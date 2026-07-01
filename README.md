This is the official documentation for Akhor Ghor (আখৰ ঘৰ). This README explains
the modular architecture, setup instructions, and maintenance for the premium
version of the app.

📖 Akhor Ghor (আখৰ ঘৰ)

Premium Native-Style Assamese Learning Application

Akhor Ghor is a high-performance, offline-first PWA (Progressive Web App)
designed to provide a native Android experience for children learning the
Assamese alphabet and numbers. Built with a modular JavaScript architecture, it
uses zero external frameworks to ensure lightning-fast loading on low-end mobile
devices.

🚀 Key Features

  - Native Experience: Hardware-accelerated animations, splash screen, and
    haptic-style visual feedback.
  - SVG-Only UI: 100% custom SVG icons (no generic emojis) for a professional,
    branded look.
  - Complete Content: Includes all 11 Vowels, 41 Consonants (grouped by Vargas),
    and Numbers 1–100.
  - Audio Engine: Intelligent pronunciation sequence logic (Letter →
    Classification → Word) with high-quality fallback.
  - Tracing Sandbox: High-DPI canvas for finger-painting practice with letter
    guides.
  - Admin Panel: A secure local CMS to update example words and upload custom
    media.
  - Offline Mode: 100% functional without internet once installed.

📂 Folder Structure

To maintain a professional production environment, keep the files organized as
follows:

akhor-ghor/
├── index.html            # Native shell & Splash screen
├── manifest.json         # PWA configuration
├── sw.js                 # Service Worker (Offline Cache)
├── assets/
│   ├── logos/            # SVG Branding (Splash & Header)
│   ├── icons/            # SVG System Icons
│   └── audio/            # (Optional) Pre-recorded .mp3 files
├── css/
│   ├── variables.css      # Design tokens (Colors, Spacing)
│   ├── app.css            # Layout & Shell styles
│   ├── components.css     # UI Elements (Cards, Buttons, Nav)
│   └── animations.css     # Native-feel transition logic
├── js/
│   ├── app.js             # Main bootstrap & App lifecycle
│   ├── router.js          # Native-feel navigation engine
│   ├── data.js            # Content JSON (Alphabet/Numbers)
│   ├── audio.js           # Smart TTS & Playback logic
│   ├── storage.js         # LocalStorage & CMS logic
│   ├── components/
│   │   └── svg-loader.js  # Icon injection system
│   └── modules/
│       ├── home.js        # Dashboard module
│       ├── vowels.js      # Learning logic
│       ├── tracing.js     # Canvas sandbox
│       └── games.js       # Quiz engine
└── admin/
    ├── index.html         # Admin login & Dashboard
    ├── admin.js           # CMS logic
    └── admin.css          # Admin-specific styling

🛠️ Setup & Installation

1. Local Development

Since the app uses ES6 Modules, it cannot be opened by simply double-clicking
index.html.

  - Use a local server (e.g., VS Code "Live Server" extension).
  - Or run npx serve in the project root.

2. Android APK Generation

To turn this into a native Android App:

1.  Use a WebView Wrapper or Trusted Web Activity (TWA).
2.  Set the theme_color in manifest.json to #FF5A52.
3.  In Android Studio, set the WebView to ignore browser navigation (back button
    is handled by router.js).

⚙️ Admin Panel

The admin panel allows you to customize content without touching the code.

  - URL: your-domain.com/admin/index.html
  - Username: Rumashree
  - Password: incompletejourney@k

Capabilities:

  - Edit example words for every letter.
  - Upload .jpg/.png to replace default illustrations.
  - Upload .mp3 files to replace the Text-to-Speech voice with real recordings.

🔊 Audio Logic

The app uses a "Smart Sequence" for pronunciation:

1.  Vowels: Speaks the Letter \rightarrow Word.
2.  Consonants: Speaks Letter \rightarrow "Letter-te" \rightarrow Word (e.g.,
    "Ka... Ka-te Kolom").
3.  Numbers: Speaks Numeral \rightarrow Word (e.g., "Ek... Ekh").

Note: The engine uses the bn-IN high-quality voice as a base, which provides the
most accurate phonetic match for Assamese consonants.

🎨 Customizing Design

All colors and spacing are controlled via css/variables.css. To change the brand
color:

  - Modify --primary: #FF5A52; to your preferred hex code.
  - Modify --bg-cream: #FDF6E4; to change the paper background.

📄 License & Credits

Developed by Biki (বিকি).
Copyright © 2024 Akhor Ghor. All Rights Reserved.

Ready for Production Deployment. 🚀
