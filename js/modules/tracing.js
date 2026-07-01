// 
export function TracingSandbox(container) {
    container.innerHTML = `
        <div class="trace-view">
            <canvas id="paint"></canvas>
            <div class="guide">অ</div>
            <button id="clr">মচক</button>
        </div>
    `;
    const canvas = document.getElementById('paint');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#5B3A20';

    let drawing = false;
    const getPos = (e) => {
        const t = e.touches ? e.touches[0] : e;
        return { x: t.clientX - rect.left, y: t.clientY - rect.top };
    };

    const start = (e) => { drawing = true; ctx.beginPath(); const p = getPos(e); ctx.moveTo(p.x, p.y); };
    const move = (e) => { if(!drawing) return; const p = getPos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); };
    const stop = () => { drawing = false; };

    canvas.addEventListener('touchstart', start);
    canvas.addEventListener('touchmove', move);
    canvas.addEventListener('touchend', stop);
    document.getElementById('clr').onclick = () => ctx.clearRect(0,0,canvas.width,canvas.height);
}
