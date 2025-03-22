# KnoxLink - Steam Workshop to KnoxKit

<div align="center">
  <img src="./src/public/icon/128.png" alt="KnoxLink Logo" width="128" height="128" />
  <p>Bridge the gap between Steam Workshop and KnoxKit for Project Zomboid</p>

  <p>
    <a href="https://github.com/valentin-marquez/knoxlink/releases/latest">
      <img src="https://img.shields.io/github/v/release/valentin-marquez/knoxlink?include_prereleases" alt="Latest Release">
    </a>
    <a href="https://github.com/valentin-marquez/knoxlink/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/valentin-marquez/knoxlink" alt="License">
    </a>
  </p>

  <p>
    <a href="https://chrome.google.com/webstore/detail/knoxlink/[extension-id]">
      <img src="https://img.shields.io/badge/Chrome-Extension-green" alt="Chrome Extension">
    </a>
    <a href="https://addons.mozilla.org/es-ES/firefox/addon/knoxlink/">
      <img src="https://img.shields.io/badge/Firefox-Add--on-orange" alt="Firefox Add-on">
    </a>
  </p>
</div>

## 🎯 Overview

KnoxLink is a browser extension that seamlessly connects the Steam Workshop with [KnoxKit](https://github.com/valentin-marquez/KnoxKit) - a powerful instance manager for Project Zomboid. With a single click, you can import mods directly from Steam Workshop to your KnoxKit installation.

## ✨ Features

- **One-Click Import**: Add a convenient "Import with KnoxKit" button to Steam Workshop pages
- **Seamless Integration**: Automatically launches KnoxKit and initiates the mod import process
- **Project Zomboid Focus**: Only appears on Project Zomboid mod pages, keeping your browsing clean
- **Multi-Language Support**: Available in English and Spanish, with more languages coming soon

## 🔧 Installation

### Chrome / Edge / Brave (and other Chromium browsers)
1. Visit the [Chrome Web Store](https://chrome.google.com/webstore/detail/knoxlink/[extension-id])
2. Click "Add to Chrome"
3. Confirm the installation when prompted

### Firefox
1. Visit the [Firefox Add-ons Store](https://addons.mozilla.org/en-US/firefox/addon/knoxlink/)
2. Click "Add to Firefox"
3. Confirm the installation when prompted

## 🖱️ How to Use

1. Install [KnoxKit](https://github.com/valentin-marquez/KnoxKit) if you haven't already
2. Navigate to any Project Zomboid mod on the Steam Workshop
3. Look for the "Import with KnoxKit" button below the regular Subscribe button
4. Click the button to import the mod to KnoxKit

## ❓ FAQ

**Q: Nothing happens when I click the "Import with KnoxKit" button for the first time**  
A: On the first click, KnoxLink will attempt to launch KnoxKit. Your browser might prompt you to allow opening the custom URI scheme. After confirming, click the button again to complete the import process.

**Q: The "Import with KnoxKit" button doesn't appear on some mod pages**  
A: KnoxLink only adds the button to Project Zomboid mod pages. If you're on a mod page for another game, the button won't appear.


## 🛠️ Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or newer)
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/valentin-marquez/knoxlink.git
cd knoxlink

# Install dependencies
npm install
# or
yarn install
```

### Development Commands
```bash
# Start development server for Chrome
npm run dev
# or for Firefox
npm run dev:firefox
# or for Edge
npm run dev:edge

# Build for production
npm run build       # Chrome
npm run build:firefox  # Firefox
npm run build:edge     # Edge

# Create distribution zip
npm run zip         # Chrome
npm run zip:firefox    # Firefox
npm run zip:edge       # Edge
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Related Projects

- [KnoxKit](https://github.com/valentin-marquez/KnoxKit): A powerful and user-friendly instance manager for Project Zomboid

---

*KnoxLink is not affiliated with Valve Corporation, The Indie Stone, or Project Zomboid.*