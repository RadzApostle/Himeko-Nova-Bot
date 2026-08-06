<div align="center">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw80LHHgKB1SQFobb19I4gRWwf21XShpMrV5bFJ_LgN4U8zYF715co6-A&s=10" width="100%" alt="Himeko Nova Banner">

# ✦ HIMEKO NOVA ✦

### Next Generation WhatsApp Bot Framework

> **"Beyond Speed, Beyond Elegance." — Astral Express Edition**

</div>

---

🌌 About Himeko Nova

Himeko Nova adalah WhatsApp Multi-Device bot modern berbasis Node.js dengan arsitektur ESM (ECMAScript Module) yang dirancang untuk memberikan performa tinggi, stabilitas maksimal, dan kemudahan pengembangan.

Framework ini dikembangkan dengan fokus pada:

- ⚡ High Performance — Respons cepat dengan optimasi memory
- 🚀 Fast Response — Latensi minimal untuk setiap command
- 📦 Modular Plugin System — Mudah menambah/mengubah fitur
- 💎 Easy Customization — Konfigurasi fleksibel tanpa ribet
- 🔒 Stable Session Management — Login aman dengan pairing code/QR
- 🌍 Multi Platform Support — Bisa jalan di mana saja
- 🧠 AI Integration Ready — Siap pakai dengan berbagai model AI
- 🎨 Modern Console Interface — Tampilan terminal yang informatif

---

## ✨ Main Features

| Kategori | Fitur |
|-----------|-------|
| 🤖 **AI / Chat** | AI multi-model (GPT, Gemini, Kimi, Perplexity, dll), TTS Anime, AI Quiz |
| 📥 **Downloader** | YouTube, TikTok, Spotify, Instagram, Twitter/X, Douyin, Facebook, Pinterest, dan lainnya |
| 🎮 **Game** | Ular Tangga, TicTacToe, Slot, Dungeon, Boss Battle, Minecraft Battle |
| 📚 **Edukasi / Info** | KBBI, Tebak Kata, Asah Otak, Teka-Teki, Family 100, Siapa Aku |
| 🛡️ **Group Management** | Anti Link, Anti Toxic, Anti Promosi, Anti Media, Anti Spam, Tag All, Hide Tag |
| 🖼️ **Media / Sticker** | Sticker Maker, Media Converter (Video, Audio, Image), Resize, Upscale Image, OCR |
| 💬 **Utilities** | Website Screenshot, Translate, Pairing Code, WhatsApp Number Checker, Runtime Monitor, Speed Test |
| ⚙️ **Owner Tools** | Broadcast, Restart Bot, Reload Plugin, User & Group Management, Auto Keep Alive |
| 🎭 **RPG System** | Level, XP, Inventory, Dungeon, Leaderboard |
| 🔒 **Security System** | Anti-Error Handler, Premium System, Expired Check |

---

## 📋 System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **Node.js** | 20.x LTS | 22.x LTS / 24.x (Latest Stable) |
| **RAM** | 512 MB | 1 GB+ |
| **Storage** | 500 MB | 1 GB+ |
| **Operating System** | Linux / Windows / Android (Termux) | Ubuntu 22.04 LTS atau lebih baru |
| **FFmpeg** | Required | Latest Version |
| **Git** | Optional | Recommended (Auto Update) |

---

## ✅ Supported Node.js Versions

| Version | Status |
|---------|--------|
| **Node.js 20.x LTS** | ✅ Supported |
| **Node.js 21.x** | ✅ Supported |
| **Node.js 22.x LTS** | ⭐ Recommended |
| **Node.js 23.x** | ✅ Supported |
| **Node.js 24.x** | 🚀 Latest Stable |

---

🚀 Panduan Instalasi Lengkap

📦 Instalasi di Railway (Rekomendasi untuk Production)

Untuk deployment di Railway, gunakan image Node.js 20 Slim dengan instalasi FFmpeg statis:

1. Setup Environment Railway

```bash
# Download dan ekstrak Node.js 20 (musl)
curl -L -o node-v20.20.0-linux-x64-musl.tar.xz \
  https://unofficial-builds.nodejs.org/download/release/v20.20.0/node-v20.20.0-linux-x64-musl.tar.xz
tar -xvf node-v20.20.0-linux-x64-musl.tar.xz
export PATH=$PWD/node-v20.20.0-linux-x64-musl/bin:$PATH

# Verifikasi Node.js
node --version  # Harus muncul v20.20.0
npm --version
```

2. Instal FFmpeg (untuk audio/video processing)

```bash
# Download FFmpeg statis
curl -L -o ffmpeg-release-amd64-static.tar.xz \
  https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz

# Install xz-utilz
apt-get install xz-utils -y

# Extract dan instal
tar -xvf ffmpeg-release-amd64-static.tar.xz
cd ffmpeg-7.0.2-amd64-static
cp ffmpeg ffprobe /usr/local/bin/
cd ~

# Verifikasi
ffmpeg -version
```

3. Clone & Install Bot

```bash
git clone https://github.com/RadzApostle/Himeko-Nova.git
cd Himeko-Nova
npm install
```

4. Konfigurasi & Jalankan

Edit config.js sesuai kebutuhan, lalu:

```bash
npm start
```

---

📦 Instalasi di Platform Lain

🔹 Termux (Android)

```bash
# Grant storage permission
termux-setup-storage

# Update packages
pkg update -y && pkg upgrade -y

# Install Ubuntu (Proot)
pkg install -y proot-distro
proot-distro install ubuntu
proot-distro login ubuntu

# Update Ubuntu & install dependencies
apt update && apt upgrade -y
apt install -y curl git ffmpeg imagemagick libwebp-dev python3 build-essential

# Install NVM & Node.js 22 LTS
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

nvm install 22
nvm use 22

# Clone repository & install dependencies
git clone https://github.com/RadzApostle/Himeko-Nova-Bot.git
cd Himeko-Nova-Bot

npm install
npm start
```

💡 Tips: Gunakan tmux atau screen agar bot tetap berjalan di latar belakang.

🔹 VPS (Ubuntu/Debian)

```bash
# Install Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs git ffmpeg

# Clone & install
git clone https://github.com/RadzApostle/Himeko-Nova-Bot.git
cd Himeko-Nova
npm install

# Jalankan dengan PM2 (rekomendasi production)
npm install -g pm2
pm2 start index.js --name HimekoNova
pm2 save
pm2 startup
```

🔹 Docker

```bash
docker compose up -d
```

🔹 Pterodactyl Panel

1. Buat server baru dengan egg Node.js (Startup Command: node index.js)
2. Clone project: git clone https://github.com/RadzApostle/Himeko-Nova-Bot.git
3. Install dependencies: npm install
4. Start server dari panel

🔹 Replit / Heroku / Render

· Import project dari GitHub
· Install dependencies: npm install
· Jalankan: npm start atau node index.js

---

🔐 Login Bot

Metode 1: QR Code (Default)

```bash
node index.js
```

Scan QR Code yang muncul di terminal menggunakan WhatsApp:

WhatsApp → Perangkat Tertaut → Tautkan Perangkat

Metode 2: Pairing Code

```bash
node index.js --pairing-code
```

Bot akan menampilkan 8 digit pairing code. Masukkan di:

WhatsApp → Perangkat Tertaut → Tautkan dengan Nomor Telepon

Pastikan global.pairing di config.js sudah diisi dengan nomor bot (tanpa tanda +).

---

📁 Struktur Folder

```text
Himeko-Nova/
├── index.js              # Entry point — launcher dengan cluster
├── main.js               # Core bot — koneksi Baileys & plugin loader
├── handler.js            # Message handler — proses pesan masuk
├── config.js             # Konfigurasi utama bot
├── package.json          # Dependency & metadata project
├── docker-compose.yml    # Konfigurasi Docker
├── speed.py              # Utility script Python
│
├── lib/                  # Library & helper
│   ├── simple.js         # WASocket wrapper & message helper
│   ├── print.js          # Logger & printer
│   ├── database.js       # Database helper
│   ├── store.js          # Store contacts & messages
│   ├── scrape.js         # Web scraper utama
│   ├── sticker.js        # Pembuatan stiker
│   ├── canvas.js         # Canvas/image generation
│   ├── converter.js      # Konversi media
│   ├── tts-queue.js      # TTS queue system
│   └── scrape/           # Scraper per-platform
│
├── plugins/              # Semua plugin bot (~646 plugin)
│   ├── ai-*.js           # Plugin AI
│   ├── downloader-*.js   # Plugin downloader
│   ├── game-*.js         # Plugin game
│   ├── group-*.js        # Plugin group management
│   ├── rpg-*.js          # Plugin RPG
│   ├── tools-*.js        # Plugin utilitas
│   └── owner-*.js        # Plugin khusus owner
│
├── json/                 # Data JSON untuk game & quiz
├── media/                # Asset media bot
└── src/                  # Asset gambar, font, dan resource
```

---

## ⚙️ Configuration (`config.js`)

Seluruh pengaturan utama bot berada di file **`config.js`**. Berikut beberapa konfigurasi yang paling sering digunakan:

| Configuration | Description |
|---------------|-------------|
| `global.namebot` | Nama bot. Contoh: `"✦ HimekoNova MD ✦"` |
| `global.version` | Versi bot. Contoh: `"2.0.0"` |
| `global.pairing` | Nomor WhatsApp yang digunakan untuk **Pairing Code** (tanpa awalan `+`). |
| `global.nomorbot` | Nomor WhatsApp bot (tanpa awalan `+`). |
| `global.nomorown` | Nomor WhatsApp owner utama (tanpa awalan `+`). |
| `global.owner` | Daftar owner dalam bentuk array. Contoh: `[[nomor, nama, isOwner]]`. |
| `global.autotyping` | Mengaktifkan atau menonaktifkan indikator **Typing...** (`true` / `false`). |
| `global.autorecording` | Mengaktifkan atau menonaktifkan indikator **Recording...** (`true` / `false`). |
| `global.domain` | Domain Pterodactyl Panel yang digunakan bot. |
| `global.apikey` | API Key untuk autentikasi Pterodactyl Panel. |
| `global.egg` | Egg ID Pterodactyl yang digunakan untuk membuat atau mengelola server. |

---

🔄 Cara Update Dependency

```bash
# Update semua dependency ke versi terbaru yang kompatibel
npm update

# Update package tertentu
npm install nama-package@latest

# Cek dependency yang outdated
npm outdated
```

---

🔀 Cara Mengganti Baileys

Bot ini menggunakan sistem alias npm untuk Baileys, sehingga penggantian source sangat mudah di package.json:

```json
"@whiskeysockets/baileys": "npm:@itsliaaa/baileys"
```

Untuk ganti ke source resmi WhiskeySockets atau fork lain, ubah sesuai kebutuhan lalu jalankan npm install.

---

## 🛠️ Troubleshooting

- **Bot tidak connect / QR berulang**
  - Hapus folder sesi (`sessions/` atau `auth_info_multi/`), kemudian login ulang.

- **Error: `Cannot find module`**
  - Jalankan kembali:
    ```bash
    npm install
    ```
  - Pastikan menggunakan **Node.js 20.x** atau yang lebih baru.

- **FFmpeg not found**
  - Install **FFmpeg** melalui package manager sistem atau gunakan versi statis sesuai panduan instalasi di atas.

- **Error: `sharp` / native module**
  - Jalankan salah satu perintah berikut:
    ```bash
    npm rebuild sharp
    ```
    atau
    ```bash
    npm install --build-from-source
    ```

- **Bot crash**
  - Gunakan **PM2** agar bot otomatis restart saat terjadi error.
  - Untuk melihat log:
    ```bash
    pm2 logs HimekoNova
    ```

- **Pairing Code error**
  - Pastikan nomor menggunakan format **628xxxxxxxxxx** (tanpa tanda `+`) dan jalankan:
    ```bash
    node index.js --pairing-code
    ```

- **`tar: xz: Cannot exec`**
  - Install paket **xz-utils**:
    ```bash
    apt-get install xz-utils -y
    ```

---

## 🚀 Performance Optimization

Himeko Nova telah dioptimalkan dengan berbagai teknologi modern untuk memberikan performa yang cepat, stabil, dan efisien.

- ✅ **Native Fetch API** — Lebih ringan dan lebih cepat dibandingkan `axios`.
- ✅ **Sharp Image Processing** — Pemrosesan gambar yang cepat, hemat memori, dan berkualitas tinggi.
- ✅ **@napi-rs/canvas** — Rendering canvas berperforma tinggi berbasis Native Rust.
- ✅ **Efficient Plugin Loader** — Sistem plugin dimuat secara dinamis untuk mengurangi waktu startup.
- ✅ **Optimized Memory Usage** — Pengelolaan memori yang lebih efisien sehingga bot tetap stabil dalam penggunaan jangka panjang.
- ✅ **Better VPS, Docker & Pterodactyl Compatibility** — Dioptimalkan agar berjalan lancar di VPS, Docker, Railway, Replit, Pterodactyl, dan berbagai platform hosting lainnya.

---

## 📊 Tech Stack

| Component | Technology |
|-----------|------------|
| **Runtime** | Node.js 20+ (ESM) |
| **WhatsApp Library** | Baileys (Multi-Device) |
| **Image Processing** | Sharp, `@napi-rs/canvas` |
| **Audio / Video** | FFmpeg |
| **HTTP Client** | Native Fetch API |
| **Package Manager** | npm / Yarn |
| **Process Manager** | PM2 *(Optional)* |

---

🙏 Credits & Disclaimer

Credits

- Developer / Navigator: RadzApostle
- WhatsApp Library: "@itsliaaa/baileys" (via "@whiskeysockets/baileys" alias)
- Icons & Assets: Himeko — Honkai: Star Rail

Disclaimer

«This project is intended solely for educational purposes and personal automation. It is not affiliated with, endorsed by, or sponsored by WhatsApp LLC or Meta. Use this software responsibly and at your own risk. The developer assumes no responsibility for any misuse, account restrictions, or damages resulting from the use of this project.»
---

<div align="center">

# ✦ HIMEKO NOVA ✦

### Astral Express Edition

**Elegant • Powerful • Unlimited**

<br>

![GitHub](https://img.shields.io/badge/GitHub-Himeko--Nova-blue?style=for-the-badge&logo=github)
![Node.js](https://img.shields.io/badge/Node.js-20+-green?style=for-the-badge&logo=node.js)
![Version](https://img.shields.io/badge/Version-v2.0.0-purple?style=for-the-badge)
![WhatsApp](https://img.shields.io/badge/WhatsApp-Multi--Device-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

<br>

Made with ❤️ by **RadzApostle**

</div>