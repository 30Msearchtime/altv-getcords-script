# alt:V GetCoords Script (TypeScript) 🚀

> ✨ **Modern, lightweight, and easy-to-use!** Quickly retrieve and copy your in-game coordinates with full TypeScript support.

A simple, modern TypeScript script for alt:V multiplayer servers that lets players fetch their current position and dimension, copy it to the clipboard, and optionally use chat commands via vchat.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![alt:V](https://img.shields.io/badge/alt:V-JS%20v2-blue)](https://altv.mp)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)

---

## ✨ Features

- 📌 **Get Player Position:** Retrieve exact x, y, z coordinates and dimension
- 📋 **Clipboard Copy:** Automatically copies coordinates to clipboard (requires client permission)
- 💬 **Chat Command (optional):** `/getcoords` or `/getcords` via vchat
- 🔄 **Fallback Event:** Works without chat resource via `alt.emitServer('coords:request')`

---

## 📦 Requirements

- **alt:V Server** (latest stable or dev build)
- **Node.js** LTS
- **npm** for dependency management
- **[Optional] vchat resource** for chat command support

---

## 🛠 Installation & Build

### Step 1: Clone the Repository

```bash
git clone https://github.com/30Msearchtime/altv-getcords-script.git
cd altv-getcords-script
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Build TypeScript

```bash
npm run build
```

### Step 4: Deploy Resource

Copy the folder (with `resource.toml` + `dist/`) into your alt:V server's `resources/` directory.

---

## ▶️ Usage

### Option 1: With vchat (Recommended)

1. Open in-game chat  
2. Type: `/getcoords` (alias `/getcords`)  
3. Coordinates will appear in chat, logged to client console, and copied to clipboard

### Option 2: Without vchat

1. Open client console (F8 by default)  
2. Run: `alt.emitServer('coords:request')`  
3. Coordinates will appear in console and be copied to clipboard

---

## 🤝 Contributing

Contributions, improvements, and feature requests are welcome!  

1. **Fork** the repository  
2. **Create** a feature branch  
3. **Commit** your changes  
4. **Push** and open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** – see LICENSE for details.

---

## 📬 Contact

- GitHub: [@30Msearchtime](https://github.com/30Msearchtime)
- Discord: [426081591832346624](https://discord.com/users/426081591832346624)
- Email: toolbotsystem@gmail.com

---

**Made with ❤️ for the alt:V community**
