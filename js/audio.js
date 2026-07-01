// js/audio.js
export const AudioEngine = {
    unlocked: false,

    unlock() {
        if (this.unlocked) return;
        // Native trick to unlock speech synthesis
        const silent = new SpeechSynthesisUtterance('');
        window.speechSynthesis.speak(silent);
        this.unlocked = true;
    },

    speak(text) {
        this.unlock();
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'bn-IN'; 
        msg.rate = 0.9;
        window.speechSynthesis.speak(msg);
    },

    playEntry(item, type) {
        // Logic check: priority for Admin Overrides
        const overrides = JSON.parse(localStorage.getItem('akhor_cms_overrides') || '{"audio":{}}');
        const id = item.id || item.letter || item.n;

        if (overrides.audio[id]) {
            const audio = new Audio(overrides.audio[id]);
            audio.play();
        } else {
            // Sequential Pronunciation
            if (type === 'vowel') this.speak(`${item.letter}. ${item.word}`);
            if (type === 'consonant') this.speak(`${item.letter}. ${item.letter} তে ${item.word}`);
            if (type === 'number') this.speak(`${item.numeral}. ${item.w}`);
        }
    }
};
