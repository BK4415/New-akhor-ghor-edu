// js/modules/tracing.js
export function TracingSandbox(container, params) {
    const letter = params.letter || 'অ';
    container.innerHTML = `
        <div class="trace-view fade-in">
            <div class="trace-header">
                <button onclick="history.back()">←</button>
                <h3>আখৰ লিখক</h3>
            </div>
            <div class="canvas-wrap">
                <div class="canvas-bg">${letter}</div>
                <canvas id="paint-canvas"></canvas>
            </div>
            <div class="trace-footer">
                <button id="clear-btn" class="secondary-btn">মচক</button>
            </div>
        </div>
    `;

    const canvas = document.getElementById('paint-canvas');
    const ctx = canvas.getContext('2d');
    
    // Fix for high-DPI screens
    const setup = () => {
        const box = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = box.width * dpr;
        canvas.height = box.height * dpr;
        ctx.scale(dpr, dpr);
        ctx.lineWidth = 14;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#5B3A20';
    };
    setup();

    let drawing = false;
    const pos = (e) => {
        const rect = canvas.getBoundingClientRect();
        const t = e.touches ? e.touches[0] : e;
        return { x: t.clientX - rect.left, y: t.clientY - rect.top };
    };

    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        drawing = true;
        const p = pos(e);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
    });

    canvas.addEventListener('touchmove', (e) => {
        if (!drawing) return;
        const p = pos(e);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
    });

    window.addEventListener('touchend', () => drawing = false);
    document.getElementById('clear-btn').onclick = () => ctx.clearRect(0,0,canvas.width,canvas.height);
}
