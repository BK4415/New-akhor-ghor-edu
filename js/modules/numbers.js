// js/modules/numbers.js
import { NUMBERS_DATA } from '../data.js';
import { Router } from '../router.js';

export function Numbers(container) {
    let currentPage = 0;
    const perPage = 20;

    const render = () => {
        const start = currentPage * perPage;
        const end = start + perPage;
        const chunk = NUMBERS_DATA.slice(start, end);

        container.innerHTML = `
            <div class="module-header">
                <h2>সংখ্যা (${start + 1}-${end})</h2>
            </div>
            <div class="numbers-grid">
                ${chunk.map(n => `
                    <div class="num-card" onclick="playNum('${n.numeral}', '${n.w}')">
                        <div class="num-val">${n.numeral}</div>
                        <div class="num-word">${n.w}</div>
                    </div>
                `).join('')}
            </div>
            <div class="num-nav">
                <button ${currentPage === 0 ? 'disabled' : ''} id="prev-n">আগৰ</button>
                <button ${end >= 100 ? 'disabled' : ''} id="next-n">পিছৰ</button>
            </div>
        `;

        document.getElementById('prev-n').onclick = () => { currentPage--; render(); };
        document.getElementById('next-n').onclick = () => { currentPage++; render(); };
    };
    render();
}
