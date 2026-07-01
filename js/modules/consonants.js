// js/modules/consonants.js
import { CONSONANT_GROUPS } from '../data.js';
import { Router } from '../router.js';

export function Consonants(container) {
    container.innerHTML = `
        <div class="module-header fade-in">
            <button class="back-btn" id="con-back">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="3">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <div class="header-text">
                <h2>ব্যঞ্জনবৰ্ণ</h2>
                <p>বৰ্গ অনুসৰি আখৰবোৰ শিকক</p>
            </div>
        </div>

        <div class="group-container scroll-y">
            ${CONSONANT_GROUPS.map((group, index) => `
                <div class="group-row" data-group="${index}">
                    <div class="group-info">
                        <span class="group-label">${group.group}</span>
                        <span class="group-title">${group.title}</span>
                    </div>
                    <div class="group-preview">
                        ${group.letters.slice(0, 3).map(l => `<span>${l.letter}</span>`).join('')}
                    </div>
                    <div class="group-arrow">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('con-back').onclick = () => Router.navigate('home');

    container.querySelectorAll('.group-row').forEach(row => {
        row.onclick = () => {
            const groupIndex = row.dataset.group;
            Router.navigate('consonant-detail', { groupIndex });
        };
    });
}
