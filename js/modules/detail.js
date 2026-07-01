// js/modules/detail.js
import { AudioEngine } from '../audio.js';

export function DetailView(container, item, type) {
    container.innerHTML = `
        <div class="detail-view fade-in">
            <div class="flip-container">
                <div class="big-letter">${item.letter || item.numeral}</div>
            </div>
            
            <div class="info-zone">
                <h2 class="word-text">${item.word || item.w}</h2>
                <button id="play-sound" class="fab-audio">
                    <svg viewBox="0 0 24 24" fill="white"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                </button>
            </div>

            <div class="nav-controls">
                <button class="p-btn" id="prev">পূৰ্বৰ</button>
                <button class="p-btn primary" id="next">পিছৰটো</button>
            </div>
        </div>
    `;

    document.getElementById('play-sound').onclick = () => AudioEngine.playEntry(item, type);
    
    // Auto-play sound on entry for native feel
    setTimeout(() => AudioEngine.playEntry(item, type), 500);
}
