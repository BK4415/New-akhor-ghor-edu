// js/app.js
import { Router } from './router.js';
import { injectIcons } from './components/svg-loader.js';
import { initDrawer } from './components/drawer.js';
import { AudioEngine } from './audio.js';

document.addEventListener('DOMContentLoaded', () => {
    injectIcons();
    initDrawer();
    Router.init();

    // The Unlocker: Critical for Android/Chrome
    document.body.addEventListener('click', () => {
        AudioEngine.unlock();
    }, { once: true });

    // Remove Splash
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if(splash) splash.style.opacity = '0';
        setTimeout(() => splash?.remove(), 500);
    }, 1500);
});
