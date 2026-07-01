// js/storage.js
export const Storage = {
    // Keys
    PROGRESS: 'akhor_user_progress',
    CMS_DATA: 'akhor_cms_overrides',

    // --- User Progress Logic ---
    getProgress() {
        const data = localStorage.getItem(this.PROGRESS);
        return data ? JSON.parse(data) : { stars: 0, streak: 1, lastDate: null, seen: [] };
    },

    saveProgress(update) {
        const current = this.getProgress();
        const newData = { ...current, ...update };
        localStorage.setItem(this.PROGRESS, JSON.stringify(newData));
    },

    // --- CMS / Admin Override Logic ---
    // This allows the Admin panel to change words/images without editing code
    getOverrides() {
        const data = localStorage.getItem(this.CMS_DATA);
        return data ? JSON.parse(data) : { words: {}, images: {}, audio: {} };
    },

    saveOverride(type, id, value) {
        const data = this.getOverrides();
        data[type][id] = value;
        localStorage.setItem(this.CMS_DATA, JSON.stringify(data));
    },

    // Merges base JSON data with Admin overrides
    mergeData(baseItem, type) {
        const overrides = this.getOverrides();
        const id = baseItem.id || baseItem.letter;
        
        return {
            ...baseItem,
            word: overrides.words[id] || baseItem.word,
            customImage: overrides.images[id] || null,
            customAudio: overrides.audio[id] || null
        };
    }
};
