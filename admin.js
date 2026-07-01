// admin/admin.js
import { ADMIN_CREDS, VOWELS_DATA, CONSONANT_GROUPS } from '../js/data.js';
import { Storage } from '../js/storage.js';

const $ = (id) => document.getElementById(id);

// Login Logic
$('login-btn').onclick = () => {
    if ($('user').value === ADMIN_CREDS.user && $('pass').value === ADMIN_CREDS.pass) {
        $('admin-login').classList.add('hidden');
        $('admin-dash').classList.remove('hidden');
        renderEditor();
    } else {
        $('error-msg').innerText = "ভুল তথ্য!";
    }
};

function renderEditor() {
    const list = $('editor-list');
    const overrides = Storage.getOverrides();
    const allLetters = [...VOWELS_DATA, ...CONSONANT_GROUPS.flatMap(g => g.letters)];

    list.innerHTML = allLetters.map(item => {
        const id = item.id || item.letter;
        return `
            <div class="edit-row">
                <span>${item.letter}</span>
                <input type="text" data-id="${id}" value="${overrides.words[id] || item.word}">
            </div>
        `;
    }).join('');
}

$('save-words').onclick = () => {
    const inputs = document.querySelectorAll('#editor-list input');
    inputs.forEach(input => {
        Storage.saveOverride('words', input.dataset.id, input.value);
    });
    alert("সংৰক্ষিত হ’ল!");
};
