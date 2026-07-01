// js/audio.js
import { Storage } from './storage.js';

export const AudioEngine = {
    enabled: true,

    speak(text) {
        if (!this.enabled || !window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'as-IN'; // Using Bengali as the high-quality base for Assamese
        msg.rate = 0.85;
        msg.pitch = 1.0;
        window.speechSynthesis.speak(msg);
    },

    async playEntry(entry, type) {
        const overrides = Storage.getOverrides();
        const id = entry.id || entry.letter || entry.n;

        // 1. Check for Admin Uploaded Audio first
        if (overrides.audio[id]) {
            const audio = new Audio(overrides.audio[id]);
            audio.play();
            return;
        }

        // 2. Fallback to TTS Sequence (The logic you specified)
        if (type === 'vowel') {
            this.speak(`${entry.letter}. ${entry.word}`);
        } else if (type === 'consonant') {
            this.speak(`${entry.letter}. ${entry.letter} তে ${entry.word}`);
        } else if (type === 'number') {
            this.speak(`${entry.numeral}. ${entry.w}`);
        }
    }
};
