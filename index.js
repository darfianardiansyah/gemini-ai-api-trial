import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

//setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

const GEMINI_MODEL = 'gemini-2.5-flash';

app.use(cors());
app.use(express.json());

// serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

app.post('/api/chat', async (req, res) => {
    const { conversation } = req.body;
    try {
        if (!Array.isArray(conversation)) {
            return res.status(400).json({ 
                error: { message: 'Conversation must be an array of messages' } 
            });
        }

        const contents = conversation.map(({ role, text }) => ({
            role,
            parts: [{ text }],
        }));

        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents,
            config: {
                temperature: 0.9,
                systemInstructions: `Anda adalah asisten kesehatan yang membantu pengguna dengan informasi kesehatan umum. 
                Anda memberikan tips kesehatan, informasi tentang gaya hidup sehat, dan panduan kesejahteraan umum. 
                Anda dapat memberikan informasi tentang nutrisi, olahraga, tidur, dan stress management. 
                Pastikan untuk selalu memberikan jawaban yang ramah, informatif, dan menekankan bahwa saran Anda bukan pengganti konsultasi medis profesional.`,
            },
        });
        res.status(200).json({ result: response.text });
    } catch (error) {
        console.error('Error:', error);

        // Extract error message from various error formats
        let errorMessage = 'Failed to process your request. Please try again later.';
        let statusCode = 500;

        // Try to parse error from API response
        try {
            const errorMsg = error.message || '';
            
            // Check if error message is a stringified JSON
            if (errorMsg.includes('"error"')) {
                const parsedError = JSON.parse(errorMsg);
                if (parsedError.error && parsedError.error.message) {
                    errorMessage = parsedError.error.message;
                    // Map error codes to HTTP status
                    if (parsedError.error.status === 'RESOURCE_EXHAUSTED') {
                        statusCode = 429; // Too Many Requests
                    } else if (parsedError.error.status === 'INVALID_ARGUMENT') {
                        statusCode = 400; // Bad Request
                    } else if (parsedError.error.status === 'UNAUTHENTICATED') {
                        statusCode = 401; // Unauthorized
                    }
                }
            } else if (errorMsg) {
                // Use the error message directly if it's not JSON
                errorMessage = errorMsg;
            }
        } catch (parseError) {
            // If parsing fails, use the original error message
            errorMessage = error.message || 'An unknown error occurred.';
        }

        // Send error response
        res.status(statusCode).json({ 
            error: { 
                message: errorMessage,
                code: statusCode
            } 
        });
    }
});