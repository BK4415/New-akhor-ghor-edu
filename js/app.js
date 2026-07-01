// js/app.js
import { Router } from './router.js';
import { injectIcons } from './components/svg-loader.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize UI Icons
    injectIcons();

    // 2. Initialize Routing
    Router.init();

    // 3. Remove Splash Screen with a smooth fade
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        splash.style.opacity = '0';
        setTimeout(() => splash.remove(), 500);
    }, 2000);

    // 4. Handle Bottom Nav Clicks
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const route = btn.dataset.link;
            Router.navigate(route);
        });
    });

    // 5. Prevent System Gestures (Android Pull-to-refresh)
    document.body.addEventListener('touchmove', (e) => {
        if (e.touches.length > 1) e.preventDefault();
    }, { passive: false });
});
