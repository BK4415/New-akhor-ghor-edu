// 
import { VOWELS_DATA } from '../data.js';
import { Router } from '../router.js';

export function Vowels(container) {
    const header = `
        <div class="module-header fade-in">
            <button class="back-btn" id="vowel-back">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="3">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <div class="header-text">
                <h2>স্বৰবৰ্ণ</h2>
                <p>১১ টা মৌলিক স্বৰ</p>
            </div>
        </div>
        <div class="vowel-grid">
            ${VOWELS_DATA.map((v, i) => `
                <div class="vowel-card" data-index="${i}" style="--delay: ${i * 0.05}s">
                    <div class="v-letter">${v.letter}</div>
                    <div class="v-footer">শিকা আৰম্ভ কৰক</div>
                </div>
            `).join('')}
        </div>
    `;

    container.innerHTML = header;

    // Navigation Logic
    document.getElementById('vowel-back').onclick = () => Router.navigate('home');

    // Card Interaction
    container.querySelectorAll('.vowel-card').forEach(card => {
        card.onclick = () => {
            const index = card.dataset.index;
            // Native-like "click" feedback
            card.style.transform = "scale(0.95)";
            setTimeout(() => Router.navigate('vowel-detail', { index }), 100);
        };
    });
}
