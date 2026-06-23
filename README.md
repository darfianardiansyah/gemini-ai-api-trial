# 🏥 Health Buddy - AI Kesehatan

Chatbot kesehatan berbasis AI yang menggunakan Google Gemini API untuk memberikan konsultasi kesehatan dasar, tips gaya hidup sehat, nutrisi, olahraga, dan informasi kesehatan umum.

## ✨ Fitur Utama

- 🤖 **AI-Powered Responses** — Menggunakan Google Gemini API untuk respons yang intelligent dan contextual
- 💬 **Real-time Chat** — Interface chat yang responsif dan user-friendly
- 🎨 **Modern UI/UX** — Desain professional, clean, dan menenangkan dengan tema kesehatan
- 📱 **Fully Responsive** — Optimal di desktop, tablet, dan mobile devices
- 🔒 **Secure API Communication** — Environment variable untuk API key management
- ⚡ **Fast & Lightweight** — Vanilla JavaScript tanpa framework heavyweight
- 🌐 **CORS Enabled** — Siap untuk deployment dan integrasi

## 🛠️ Tech Stack

### Backend
- **Node.js** — JavaScript runtime environment
- **Express.js** — Web framework untuk API routing
- **Google Generative AI** — Library untuk Gemini API integration
- **CORS** — Cross-Origin Resource Sharing
- **dotenv** — Environment variable management

### Frontend
- **Vanilla JavaScript** — No framework dependencies
- **CSS3** — Modern styling dengan variables dan animations
- **HTML5** — Semantic markup

## 📋 Prerequisites

Sebelum memulai, pastikan Anda telah menginstall:

- **Node.js** (versi 16.0.0 atau lebih tinggi) — [Download](https://nodejs.org/)
- **npm** (biasanya datang dengan Node.js)
- **Git** (untuk clone repository)
- **Google Gemini API Key** — [Dapatkan API Key](https://aistudio.google.com)

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/gemini-chatbot-api.git
cd gemini-chatbot-api
```

### 2. Install Dependencies

```bash
npm install
```

Ini akan menginstall semua dependencies yang tercantum di `package.json`:
- `@google/genai` — Google Generative AI SDK
- `express` — Web framework
- `cors` — CORS middleware
- `dotenv` — Environment variable loader

### 3. Setup Environment Variables

Buat file `.env` di root directory project:

```bash
# Untuk Windows
type nul > .env

# Untuk macOS/Linux
touch .env
```

Kemudian isi `.env` dengan API key Anda:

```env
GOOGLE_API_KEY=your_gemini_api_key_here
```

**Cara mendapatkan Gemini API Key:**

1. Buka [Google AI Studio](https://aistudio.google.com)
2. Klik **"Get API Key"** di halaman dashboard
3. Pilih **"Create API key in new project"** atau gunakan project yang sudah ada
4. Copy API key dan paste ke `.env` file
5. Pastikan API key sudah di-enable untuk Generative Language API

### 4. Jalankan Server

```bash
node index.js
```

Output yang diharapkan:
```
Server running on port http://localhost:3000
```

Buka browser dan navigasikan ke `http://localhost:3000`

## 📖 Cara Penggunaan

1. **Buka aplikasi** — Navigasikan ke `http://localhost:3000` di browser
2. **Ketik pertanyaan** — Tanyakan tentang kesehatan Anda di input field
3. **Tekan Enter atau klik Kirim** — AI akan merespon dengan informasi kesehatan
4. **Lanjutkan percakapan** — Chat akan menjaga konteks percakapan Anda

### Contoh Pertanyaan

- "Bagaimana cara meningkatkan kualitas tidur?"
- "Apa manfaat olahraga rutin?"
- "Berapa asupan air yang direkomendasikan per hari?"
- "Apa tips nutrisi sehat untuk diet?"
- "Bagaimana cara mengurangi stress?"

## 📁 Project Structure

```
gemini-chatbot-api/
├── index.js                 # Backend server & API endpoints
├── package.json            # Project dependencies
├── .env.example            # Template environment variables
├── README.md               # Dokumentasi ini
├── public/
│   ├── index.html          # Frontend HTML
│   ├── style.css           # Styling & design system
│   └── script.js           # Frontend JavaScript logic
└── node_modules/           # Dependencies (auto-generated)
```

## 🔌 API Endpoints

### POST /api/chat

Mengirim pesan chat dan menerima respons dari AI.

**Request Body:**
```json
{
  "conversation": [
    {
      "role": "user",
      "text": "Pertanyaan kesehatan Anda"
    },
    {
      "role": "model",
      "text": "Respons AI sebelumnya"
    }
  ]
}
```

**Response:**
```json
{
  "result": "Respons kesehatan dari AI Gemini"
}
```

**Error Response:**
```json
{
  "error": {
    "code": 429,
    "message": "You exceeded your current quota..."
  }
}
```

## ⚙️ Konfigurasi

### Mengubah System Instructions

Edit file `index.js` untuk mengubah behavior AI:

```javascript
systemInstructions: `Anda adalah asisten kesehatan yang...`
```

### Mengubah Model Gemini

```javascript
const GEMINI_MODEL = 'gemini-2.5-flash'; // Ganti dengan model lain
```

Model yang tersedia:
- `gemini-pro`
- `gemini-1.5-pro`
- `gemini-1.5-flash`
- `gemini-2.5-flash` (recommended)

### Mengubah Port

Edit `index.js`:
```javascript
const PORT = 3000; // Ganti dengan port yang diinginkan
```

## 🚨 Troubleshooting

### Error: "Cannot find module '@google/genai'"

**Solusi:**
```bash
npm install @google/genai
```

### Error: "API key is invalid or missing"

**Solusi:**
- Pastikan `.env` file sudah dibuat
- Verifikasi API key sudah benar di `.env`
- Restart server setelah update `.env`

### Error: "CORS policy error"

**Solusi:**
- CORS sudah di-enable di backend
- Verifikasi frontend mengirim ke `http://localhost:3000/api/chat`

### Error: "You exceeded your current quota"

**Solusi:**
- Gemini API free tier memiliki limit 20 requests/day
- Tunggu sampai quota reset (automatic reset setiap 24 jam)
- Upgrade ke paid plan untuk unlimited requests

### Chat tidak menampilkan respons

**Solusi:**
- Buka browser console (F12) untuk melihat error
- Pastikan backend server sedang berjalan
- Check Network tab untuk melihat API request

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@google/genai` | ^2.9.0 | Google Gemini AI integration |
| `express` | ^5.2.1 | Web framework |
| `cors` | ^2.8.6 | Cross-Origin Resource Sharing |
| `dotenv` | ^17.4.2 | Environment variable management |

## 🎨 Customization

### Mengubah Warna

Edit CSS variables di `public/style.css`:

```css
:root {
  --color-primary: #2563EB;      /* Warna utama */
  --color-secondary: #10B981;    /* Warna sekunder */
  --color-bg-main: #F8FAFC;      /* Background */
  --color-text-primary: #0F172A; /* Text utama */
}
```

### Mengubah Font

```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

### Mengubah Spacing

```css
:root {
  --spacing-md: 16px; /* Adjust spacing */
}
```

## 🔐 Security Notes

1. **Jangan commit `.env` file** — Tambahkan ke `.gitignore`
2. **Keep API key secure** — Jangan share atau publish API key
3. **Validate user input** — Frontend sudah melakukan validation
4. **Use HTTPS in production** — Untuk security layer tambahan

## 📝 Environment Variables

```env
# Required
GOOGLE_API_KEY=your_api_key_here

# Optional (untuk production)
PORT=3000
NODE_ENV=production
```

## 🚀 Deployment

### Deploy ke Vercel

1. Push repository ke GitHub
2. Buka [Vercel Dashboard](https://vercel.com)
3. Import project dari GitHub
4. Setup environment variables di Vercel settings
5. Deploy

### Deploy ke Heroku

```bash
heroku login
heroku create your-app-name
git push heroku main
```

### Deploy ke Railway

1. Push ke GitHub
2. Connect project di [Railway.app](https://railway.app)
3. Setup environment variables
4. Deploy

## 📚 Dokumentasi Tambahan

- [Google Gemini API Documentation](https://ai.google.dev/docs)
- [Express.js Guide](https://expressjs.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

Project ini dilisensikan di bawah ISC License — lihat `package.json` untuk detail.

## ⚖️ Disclaimer

Health Buddy adalah tool informatif dan bukan pengganti konsultasi medis profesional. Selalu konsultasikan dengan dokter atau tenaga medis profesional untuk diagnosis dan treatment yang akurat.

## 📞 Support

Jika Anda memiliki pertanyaan atau menemukan bug:

1. Buka [Issues](https://github.com/yourusername/gemini-chatbot-api/issues)
2. Jelaskan masalah dengan detail
3. Sertakan error messages atau screenshots jika ada

## 🙏 Acknowledgments

- Google Gemini API untuk AI capabilities
- Express.js community
- Open source contributors

---

**Happy Coding! 🎉**

Jika project ini bermanfaat, jangan lupa star ⭐ di GitHub!
