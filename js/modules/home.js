// js/modules/home.js
import { Router } from '../router.js';

export function Home(container) {
    const hours = new Date().getHours();
    const greet = hours < 12 ? 'শুভ ৰাতিপুৱা!' : hours < 17 ? 'শুভ দুপৰীয়া!' : 'নমস্কাৰ!';

    container.innerHTML = `
        <div class="banner fade-in">
            <div class="banner-eyebrow">${greet}</div>
            <div class="banner-title">আজি কিবা এটা নতুন শিকোঁ আহক</div>
        </div>

        <div class="module-grid">
            <button class="m-card gold" data-route="vowels">
                <div class="m-icon">অ</div>
                <div class="m-info"><b>স্বৰবৰ্ণ</b><span>১১ টা আখৰ</span></div>
            </button>
            <button class="m-card green" data-route="consonants">
                <div class="m-icon">ক</div>
                <div class="m-info"><b>ব্যঞ্জনবৰ্ণ</b><span>৪১ টা আখৰ</span></div>
            </button>
            <button class="m-card sky" data-route="numbers">
                <div class="m-icon">১-১০</div>
                <div class="m-info"><b>সংখ্যা</b><span>১-১০০ লৈ</span></div>
            </button>
            <button class="m-card purple" data-route="tracing">
                <div class="m-icon">✍️</div>
                <div class="m-info"><b>লিখাৰ অনুশীলন</b><span>Tracing</span></div>
            </button>
        </div>
    `;

    container.querySelectorAll('.m-card').forEach(card => {
        card.onclick = () => Router.navigate(card.dataset.route);
    });
}
