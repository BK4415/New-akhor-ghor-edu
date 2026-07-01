// js/components/svg-illustrations.js

const ILLUSTRATIONS = {
    'আম': `<svg viewBox="0 0 100 100" fill="var(--accent)"><path d="M50 20 C30 20 10 40 10 60 C10 85 40 95 50 95 C60 95 90 85 90 60 C90 40 70 20 50 20 Z"/><path d="M50 20 L50 10" stroke="green" stroke-width="4"/></svg>`,
    'কলম': `<svg viewBox="0 0 100 100" fill="none" stroke="var(--text-main)" stroke-width="3"><path d="M30 80 L70 20 L80 30 L40 90 Z"/><path d="M30 80 L25 90 L40 90 Z" fill="black"/></svg>`,
    'ঘৰ': `<svg viewBox="0 0 100 100" fill="var(--primary)"><path d="M10 90 L10 40 L50 10 L90 40 L90 90 Z"/><rect x="40" y="60" width="20" height="30" fill="white"/></svg>`
};

export function getIllustration(word) {
    // Returns the SVG if found, otherwise returns a generic premium circle
    return ILLUSTRATIONS[word] || `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="var(--bg-cream)" stroke="var(--primary)"/></svg>`;
}
