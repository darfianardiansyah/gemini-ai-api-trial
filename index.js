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
        if (!Array.isArray(conversation)) throw new Error('Conversation must be an array of messages');

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
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});