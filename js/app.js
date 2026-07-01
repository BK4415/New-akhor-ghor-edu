import { Router } from './router.js';
import { injectIcons } from './components/svg-loader.js';
import { initDrawer } from './components/drawer.js';
import { AudioEngine } from './audio.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Load SVG Icons
    injectIcons();
    
    // 2. Initialize Navigation Drawer
    initDrawer();
    
    // 3. Start the Router
    Router.init();

    // 4. Audio Unlocker (Native Android Requirement)
    document.body.addEventListener('click', () => {
        AudioEngine.unlock();
    }, { once: true });

    // 5. Handle Bottom Nav Clicks
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const route = btn.dataset.link;
            Router.navigate(route);
        });
    });

    // 6. Hide Splash Screen
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.style.opacity = '0';
            setTimeout(() => splash.remove(), 500);
        }
    }, 1500);
});
