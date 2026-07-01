// js/components/drawer.js
import { Router } from '../router.js';

export function initDrawer() {
    const drawer = document.getElementById('app-drawer');
    const overlay = document.getElementById('drawer-overlay');
    const trigger = document.getElementById('menu-trigger');

    const menuItems = [
        { label: 'ঘৰ', route: 'home', icon: 'home' },
        { label: 'স্বৰবৰ্ণ', route: 'vowels', icon: 'learn' },
        { label: 'ব্যঞ্জনবৰ্ণ', route: 'consonants', icon: 'learn' },
        { label: 'প্ৰশাসক', route: 'admin', icon: 'settings' },
        { label: 'আমাৰ বিষয়ে', route: 'about', icon: 'profile' }
    ];

    drawer.innerHTML = `
        <div class="drawer-header">
            <div class="drawer-logo">অ</div>
            <h3>আখৰ ঘৰ</h3>
        </div>
        <nav class="drawer-nav">
            ${menuItems.map(item => `
                <button class="drawer-item" data-route="${item.route}">
                    <span class="drawer-icon" data-icon="${item.icon}"></span>
                    ${item.label}
                </button>
            `).join('')}
        </nav>
        <div class="drawer-footer">Developed by বিকি</div>
    `;

    const toggle = (open) => {
        drawer.classList.toggle('open', open);
        overlay.classList.toggle('active', open);
    };

    trigger.onclick = () => toggle(true);
    overlay.onclick = () => toggle(false);

    drawer.querySelectorAll('.drawer-item').forEach(btn => {
        btn.onclick = () => {
            if(btn.dataset.route === 'admin') {
                window.location.href = 'admin/index.html';
            } else {
                Router.navigate(btn.dataset.route);
                toggle(false);
            }
        };
    });
}
