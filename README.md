# AltV GetCoords Script (TypeScript)

This is a simple, modernized TypeScript resource for alt:V servers that lets players quickly retrieve and copy their current in-game coordinates.  
It supports both chat command usage (with **vchat**) and a direct event fallback.

---

## ✨ Features
- **Get Player Position:** Retrieve exact x, y, z coordinates and dimension.
- **Clipboard Copy:** Automatically copies the coordinates to the clipboard (requires client permission).
- **Chat Command (optional):** /getcoords or /getcords via vchat.
- **Fallback Event:** Works without any chat resource via alt.emitServer('coords:request').

---

## 📦 Requirements
- Running alt:V server (latest dev or release build)
- Node.js (LTS recommended)
- npm for installing dependencies
- [Optionally] vchat resource for chat command support

---

## 🛠 Installation & Build
1. Clone the repository  
   git clone https://github.com/30Msearchtime/altv-getcords-script.git  
   cd altv-getcords-script

2. Install dependencies  
   npm install

3. Build the TypeScript files  
   npm run build

4. Copy this folder (with resource.toml + dist/) into your server’s resources/ directory.

---

## ▶️ Usage

### Option 1: With vchat (recommended)
- In the game chat, type:  
  /getcoords  
  (Alias /getcords also works)  
- Your coordinates will be printed in chat, logged to the client console, and copied to the clipboard.

### Option 2: Without vchat
- Open the client console (F8 by default) and run:  
  alt.emitServer('coords:request')  
- The coordinates will appear in the console and be copied to the clipboard.

---

## 🤝 Contributing
Contributions are welcome!  
Feel free to fork the repo and submit a pull request with improvements or new features.

---

## 📄 License
Distributed under the MIT License. See LICENSE for more information.

---

## 📬 Contact
- GitHub Profile: https://github.com/30Msearchtime  
