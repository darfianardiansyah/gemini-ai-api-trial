# 🏥 Health Buddy - Asisten Kesehatan AI

**Chatbot kesehatan berbasis AI** yang menggunakan Google Gemini API untuk memberikan konsultasi kesehatan dasar, tips gaya hidup sehat, nutrisi, olahraga, dan informasi kesehatan umum.

> ⚠️ **Disclaimer**: Health Buddy adalah tool informatif dan **BUKAN pengganti konsultasi medis profesional**. Selalu konsultasikan dengan dokter atau tenaga medis profesional untuk diagnosis dan treatment yang akurat.

## ✨ Fitur Utama

- 🤖 **AI-Powered Responses** — Menggunakan Google Gemini API untuk respons yang intelligent dan contextual
- 💬 **Real-time Chat Interface** — Chat responsif dengan animated loading dan user-friendly messages
- 🎨 **Modern Professional UI/UX** — Desain clean, menenangkan dengan sistem design yang konsisten
- 📱 **Fully Responsive** — Optimal di desktop, tablet, dan mobile devices
- 🛡️ **Robust Error Handling** — User-friendly error messages dalam Bahasa Indonesia
- 🔒 **Secure Configuration** — Environment variable untuk API key management
- ⚡ **Lightweight & Fast** — Vanilla JavaScript tanpa framework heavyweight
- 🌐 **Production Ready** — Siap untuk deployment dengan CORS enabled

## 🛠️ Tech Stack

### Backend
- **Node.js** (v18+) — JavaScript runtime environment
- **Express.js** (v5.2) — Minimalist web framework
- **@google/genai** (v2.9) — Google Generative AI SDK
- **CORS** (v2.8) — Cross-Origin Resource Sharing middleware
- **dotenv** (v17.4) — Environment variable management

### Frontend
- **Vanilla JavaScript** — No framework dependencies, pure ES6+
- **CSS3** — CSS Variables, Animations, Gradients, Flexbox
- **HTML5** — Semantic markup dengan accessibility considerations

## 📋 Prerequisites

Sebelum memulai, pastikan Anda telah menginstall:

- **Node.js** versi 18.0.0 atau lebih tinggi — [Download](https://nodejs.org/)
- **npm** atau **yarn** (biasanya datang dengan Node.js)
- **Git** (untuk clone repository)
- **Google Gemini API Key** — [Dapatkan API Key gratis](https://aistudio.google.com)

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/gemini-chatbot-api.git
cd gemini-chatbot-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Buat file `.env` di root directory (copy dari `.env.example`):

```bash
# Untuk Windows
copy .env.example .env

# Untuk macOS/Linux
cp .env.example .env
```

Kemudian edit `.env` dan isi dengan API key Anda:

```env
GOOGLE_API_KEY=your_gemini_api_key_here
```

**Cara mendapatkan Gemini API Key:**

1. Buka [Google AI Studio](https://aistudio.google.com)
2. Klik **"Get API Key"** di halaman dashboard
3. Klik **"Create API key in new project"** atau pilih project yang sudah ada
4. Copy API key yang ter-generate
5. Paste ke file `.env` Anda (ganti `your_gemini_api_key_here`)

### 4. Jalankan Server

```bash
npm start
# atau
node index.js
```

Output yang diharapkan:
```
Server running on port http://localhost:3000
```

Buka browser dan navigasikan ke **http://localhost:3000** 🎉

## 📖 Cara Penggunaan

### User Interface

1. **Header** — Menampilkan judul aplikasi dan deskripsi
2. **Chat Box** — Area untuk melihat riwayat percakapan
3. **Input Field** — Tempat mengetik pertanyaan kesehatan
4. **Send Button** — Tombol untuk mengirim pertanyaan
5. **Footer** — Tips penggunaan aplikasi

### Interaksi

1. Ketik pertanyaan tentang kesehatan Anda
2. Tekan **Enter** atau klik tombol **Kirim**
3. Tunggu AI memproses (tampil "Thinking..." dengan animasi)
4. Respons akan ditampilkan dalam chat box
5. Lanjutkan percakapan - AI akan menjaga konteks

### Contoh Pertanyaan

```
✅ Bagaimana cara meningkatkan kualitas tidur?
✅ Apa manfaat olahraga rutin untuk kesehatan?
✅ Berapa asupan air yang direkomendasikan per hari?
✅ Apa saja tips nutrisi sehat untuk diet?
✅ Bagaimana cara mengurangi stress dan anxiety?
✅ Apa gejala awal dehidrasi?
✅ Berapa waktu tidur ideal untuk kesehatan?
```

## 📁 Project Structure

```
gemini-chatbot-api/
├── 📄 index.js              # Backend server & API endpoints
├── 📄 package.json          # Project metadata & dependencies
├── 📄 .env.example          # Environment template (copy & edit)
├── 📄 .gitignore            # Git ignore rules
├── 📄 README.md             # Dokumentasi (file ini)
│
├── 📁 public/               # Frontend static files
│   ├── 📄 index.html        # HTML structure dengan semantic tags
│   ├── 📄 style.css         # CSS dengan design tokens & animations
│   └── 📄 script.js         # JavaScript logic untuk chat functionality
│
└── 📁 node_modules/         # Dependencies (auto-generated, jangan commit)
```

## 🔌 API Endpoints

### POST `/api/chat`

Mengirim pesan chat dan menerima respons dari AI Gemini.

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
      "text": "Respons AI dari request sebelumnya"
    }
  ]
}
```

**Success Response (200 OK):**
```json
{
  "result": "Respons kesehatan yang detail dan bermanfaat dari AI Gemini"
}
```

**Error Response Examples:**

1. **Quota Exceeded (429)**
```json
{
  "error": {
    "message": "⏳ Kuota API telah habis. Free tier dibatasi 20 permintaan per hari. Silahkan coba lagi nanti atau upgrade ke paket berbayar.",
    "code": 429
  }
}
```

2. **Invalid API Key (401)**
```json
{
  "error": {
    "message": "🔐 API key tidak valid. Periksa kembali GOOGLE_API_KEY di file .env",
    "code": 401
  }
}
```

3. **Invalid Request (400)**
```json
{
  "error": {
    "message": "❌ Permintaan tidak valid. Silahkan coba lagi dengan pertanyaan yang jelas.",
    "code": 400
  }
}
```

4. **Server Error (500)**
```json
{
  "error": {
    "message": "Gagal memproses permintaan Anda. Silahkan coba lagi nanti.",
    "code": 500
  }
}
```

## ⚙️ Konfigurasi

### Mengubah AI System Instructions

Edit file `index.js` (line ~46) untuk mengubah behavior AI:

```javascript
systemInstructions: `Anda adalah asisten kesehatan yang membantu pengguna...`
```

Anda bisa mengubah:
- Personality/tone AI
- Topics yang dibahas
- Response format
- Disclaimers yang ditampilkan

### Mengubah Model Gemini

Edit `index.js` (line ~16):

```javascript
const GEMINI_MODEL = 'gemini-2.5-flash'; // Default & recommended
```

Model yang tersedia:
- `gemini-pro` — Model lama, lebih cepat
- `gemini-1.5-pro` — Model menengah
- `gemini-1.5-flash` — Model lebih baru
- `gemini-2.5-flash` — **Recommended** (terbaru, fastest)

### Mengubah Temperature (Kreativitas AI)

Edit `index.js` (line ~54):

```javascript
temperature: 0.9, // 0 = deterministic, 1 = creative
```

- `0.0 - 0.3` — Very predictable (gunakan untuk QA)
- `0.5 - 0.7` — Balanced (default untuk chat)
- `0.8 - 1.0` — More creative (gunakan untuk creative content)

### Mengubah Port Server

Edit `index.js` (line ~25):

```javascript
const PORT = process.env.PORT || 3000;
```

Atau set via environment:
```bash
PORT=5000 npm start
```

## 🚨 Troubleshooting

### Error: "Cannot find module '@google/genai'"

**Penyebab**: Dependencies belum diinstall

**Solusi:**
```bash
npm install
# atau reinstall semua dependencies
rm -rf node_modules package-lock.json
npm install
```

---

### Error: "API key is invalid or missing"

**Penyebab**: `.env` file tidak ada atau API key tidak benar

**Solusi:**
1. Buat/verifikasi `.env` file ada di root directory
2. Pastikan format: `GOOGLE_API_KEY=your_key_here`
3. Restart server dengan `node index.js`
4. Buat API key baru di [Google AI Studio](https://aistudio.google.com)

---

### Error: "⏳ Kuota API telah habis"

**Penyebab**: Free tier Gemini API dibatasi 20 requests/hari

**Solusi:**
- ✅ Tunggu hingga quota reset (automatic setiap 24 jam)
- ✅ Cek usage di https://ai.dev/rate-limit
- ✅ Upgrade ke paid plan untuk unlimited requests
- ✅ Gunakan project/API key yang berbeda

---

### Error: "🔐 API key tidak valid"

**Penyebab**: API key sudah expired atau salah dikopy

**Solusi:**
1. Login ke [Google AI Studio](https://aistudio.google.com)
2. Generate API key baru
3. Update di `.env` file
4. Restart server

---

### Error: "CORS policy: blocked"

**Penyebab**: Request dari domain yang tidak diizinkan

**Solusi:**
- CORS sudah di-enable di backend untuk semua domain
- Pastikan frontend request ke `http://localhost:3000/api/chat` (bukan alamat lain)
- Untuk production, update CORS settings di `index.js`

---

### Chat tidak menampilkan respons (loading infinite)

**Penyebab**: Multiple kemungkinan

**Solusi:**
1. Buka browser console (F12 → Console tab)
2. Lihat error message detail
3. Check Network tab untuk melihat request/response
4. Pastikan server berjalan dengan `node index.js`
5. Cek apakah API quota sudah habis
6. Restart browser dan server

---

### Frontend terlihat aneh atau tidak responsive

**Penyebab**: CSS tidak ter-load dengan benar

**Solusi:**
1. Hard refresh browser (Ctrl+Shift+R atau Cmd+Shift+R)
2. Clear browser cache
3. Pastikan file `style.css` ada di folder `public/`

---

### Port sudah digunakan/tidak bisa connect

**Penyebab**: Aplikasi lain sudah menggunakan port 3000

**Solusi:**
```bash
# Ganti ke port lain
PORT=5000 npm start

# Atau cek process yang menggunakan port 3000
netstat -tuln | grep 3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows
```

## 📦 Dependencies

| Package | Version | Kegunaan |
|---------|---------|----------|
| `@google/genai` | ^2.9.0 | Google Generative AI SDK untuk Gemini |
| `express` | ^5.2.1 | Web framework untuk API routing |
| `cors` | ^2.8.6 | Middleware untuk CORS support |
| `dotenv` | ^17.4.2 | Load environment variables dari `.env` |

**Total size**: ~50MB (dengan node_modules)

## 🎨 Customization

### Mengubah Color Scheme

Edit CSS variables di `public/style.css` (top of file):

```css
:root {
  --color-primary: #2563EB;      /* Biru - Main color */
  --color-primary-hover: #1D4ED8; /* Biru gelap - Hover state */
  --color-secondary: #10B981;     /* Hijau - Accent color */
  --color-secondary-hover: #059669;
  --color-bg-main: #F8FAFC;       /* Background utama */
  --color-bg-card: #FFFFFF;       /* Card/surface color */
  --color-text-primary: #0F172A;  /* Text color main */
  --color-text-secondary: #64748B; /* Text color secondary */
  --color-border: #E2E8F0;        /* Border color */
}
```

### Mengubah Typography

```css
body {
  font-family: 'Your Font Name', sans-serif; /* Ganti font */
  font-size: 16px;
}

h1 {
  font-size: 28px;
  font-weight: 700;
}
```

### Mengubah Spacing

```css
:root {
  --spacing-md: 16px;  /* Adjust main spacing */
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}
```

### Mengubah Border Radius

```css
:root {
  --radius-md: 12px;   /* Rounded corners */
  --radius-lg: 16px;
}
```

### Mengubah Animations

```css
.message {
  animation: messageSlideIn 0.3s ease-out; /* Adjust duration & easing */
}
```

### Mengubah Brand/Logo

Edit `public/index.html`:
- Ganti text "Health Buddy" dengan nama aplikasi Anda
- Ubah SVG icon dengan icon custom
- Update subtitle text

## 🔐 Security Best Practices

### ⚠️ Jangan Pernah:
- ❌ Commit `.env` file ke repository
- ❌ Share atau publish API key
- ❌ Expose secret keys di frontend code
- ❌ Disable CORS validation di production

### ✅ Selalu:
- ✅ Gunakan `.env.example` sebagai template
- ✅ Add `.env` ke `.gitignore`
- ✅ Rotate API key secara berkala
- ✅ Use HTTPS in production
- ✅ Validate user input di backend & frontend
- ✅ Implement rate limiting di production

## 📝 Environment Variables

### Required
```env
GOOGLE_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxx
```

### Optional
```env
# Server port (default: 3000)
PORT=3000

# Node environment
NODE_ENV=production

# Log level
LOG_LEVEL=info
```

## 🚀 Deployment

### Deploy ke Vercel

1. Push repository ke GitHub
2. Buka [Vercel Dashboard](https://vercel.com/dashboard)
3. Click **"Add New Project"** → Select repository
4. Setup environment variables:
   - Add `GOOGLE_API_KEY` dengan value dari Google AI Studio
5. Click **"Deploy"**

Vercel akan automatically build & deploy aplikasi Anda.

### Deploy ke Railway.app

1. Push ke GitHub
2. Buka [Railway.app](https://railway.app)
3. Click **"Create New Project"** → **"Deploy from GitHub repo"**
4. Select repository Anda
5. Add environment variables:
   - `GOOGLE_API_KEY` = your API key
6. Click **"Deploy"**

### Deploy ke Render

1. Push ke GitHub
2. Buka [Render Dashboard](https://dashboard.render.com)
3. Click **"Create New"** → **"Web Service"**
4. Connect GitHub repository
5. Configure:
   - Build Command: `npm install`
   - Start Command: `node index.js`
6. Add environment variables
7. Click **"Create Web Service"**

### Deploy ke Heroku (Legacy)

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

heroku login
heroku create your-app-name
heroku config:set GOOGLE_API_KEY=your_key_here
git push heroku main

# View logs
heroku logs --tail
```

## 📚 Dokumentasi Tambahan

- [Google Gemini API Documentation](https://ai.google.dev/docs)
- [Express.js Guide](https://expressjs.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 🤝 Contributing

Kontribusi sangat diterima! Langkah-langkahnya:

1. **Fork** repository ini
2. **Create feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to branch** (`git push origin feature/AmazingFeature`)
5. **Open Pull Request** dengan deskripsi yang jelas

### Areas untuk Contribution:
- 🐛 Bug fixes
- ✨ New features
- 📖 Documentation improvements
- 🎨 UI/UX improvements
- 🌍 Language localization
- ⚡ Performance optimization

## 📄 License

Project ini dilisensikan di bawah **ISC License** — Lihat `package.json` untuk detail lengkap.

## 📞 Support & Issues

Temukan bug atau ada pertanyaan? 

1. Buka [GitHub Issues](https://github.com/yourusername/gemini-chatbot-api/issues)
2. Jelaskan masalah dengan detail
3. Sertakan:
   - Error message atau screenshot
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment info (Node version, OS, dll)

## 🙏 Acknowledgments

- **Google Gemini API** — Powerful AI capabilities
- **Express.js** — Web framework
- **Open Source Community** — Semua contributors

## 🎯 Roadmap

Fitur yang akan datang:

- [ ] Dark mode theme
- [ ] Chat history persistence (localStorage)
- [ ] Export conversation as PDF
- [ ] Multiple languages support
- [ ] Voice input/output
- [ ] Health metrics tracking
- [ ] Integration dengan wearable devices
- [ ] Progressive Web App (PWA)
- [ ] Offline mode support

---

## ⭐ Terakhir

Jika project ini bermanfaat untuk Anda, jangan lupa:

1. ⭐ **Star** repository ini di GitHub
2. 📤 **Share** dengan teman & keluarga
3. 🔗 **Fork** untuk personal use atau modification
4. 💬 **Berikan feedback** untuk improvement

**Happy Coding! 🎉**

---

<div align="center">

**Made with ❤️ by [Your Name]**

[GitHub](https://github.com/yourusername) • [Website](https://yourwebsite.com) • [Email](mailto:your.email@example.com)

</div>
