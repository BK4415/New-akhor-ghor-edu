# আখৰ ঘৰ (Akhor Ghor) — Premium Assamese Learning App

**আখৰ ঘৰ** is a high-performance, mobile-first educational application designed to teach children Assamese vowels, consonants, and numbers (1–100). Built as a "Native-Feel" Progressive Web App (PWA), it eliminates the "website feel" through a fixed-viewport architecture, custom SVG iconography, and modular JavaScript.

---

## 💎 Premium Features & Requirements (41 Met)

- **Native UX:** Full-screen layout with no browser scrolling/bounce, native splash screen, and hardware-accelerated transitions.
- **SVG-Only UI:** No emojis or generic browser assets. All icons, navigation elements, and rewards are custom-coded SVG paths.
- **Offline-First:** Powered by a Service Worker (sw.js) for 100% offline functionality.
- **Assamese Content:** Complete logic for all 11 vowels, 41 consonants (grouped by vargas), and numbers 1–100 with phonetic pronunciation.
- **Advanced Audio Engine:** Uses a sequence-based TTS (Text-to-Speech) fallback with support for professional audio overrides via the Admin Panel.
- **PWA & APK Ready:** Configured with a `manifest.json` and maskable icons for direct Android WebView wrapping.
- **No Backend Required:** All progress, streaks, and CMS overrides are persisted via an optimized `localStorage` Storage Engine.

---

## 🛠 Technical Stack

- **Frontend:** Vanilla ES6 Modules (No frameworks for maximum speed).
- **Styling:** CSS Variables (Tokens) & hardware-accelerated animations.
- **Architecture:** Modular Router with State-based rendering.
- **Canvas:** High-DPI (Retina) Tracing Sandbox for writing practice.

---

## 📂 Project Structure

```text
akhor-ghor/
├── index.html            # Native Shell & Splash Screen
├── manifest.json         # PWA Manifest
├── sw.js                 # Service Worker (Offline Cache)
├── css/
│   ├── variables.css     # Design Tokens (Colors, Shadows)
│   ├── app.css           # Native Layout & Navigation
│   ├── components.css    # Premium Cards, Drawer, & Buttons
│   └── animations.css    # Hardware-accelerated transitions
├── js/
│   ├── app.js            # App Bootstrapper
│   ├── router.js         # Modular Navigation Logic
│   ├── data.js           # Vowels, Consonants, & 1-100 Data
│   ├── storage.js        # LocalStorage CMS & Progress Engine
│   ├── audio.js          # Sequential Audio/TTS Logic
│   ├── components/       # SVG Loader & UI Parts
│   └── modules/          # Screen-specific logic (Home, Vowels, etc.)
├── assets/
│   ├── logos/            # Splash & App Logos (SVG)
│   └── icons/            # PWA Icons (PNG)
└── admin/                # Local CMS Panel    is handled by router.js).

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
