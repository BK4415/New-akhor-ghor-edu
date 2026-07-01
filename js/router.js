
import { Home } from './modules/home.js';
import { Vowels } from './modules/vowels.js';
import { TracingSandbox } from './modules/tracing.js';

const routes = { 'home': Home, 'learn': Vowels, 'vowels': Vowels, 'games': () => {}, 'profile': () => {} };

export const Router = {
    init() {
        window.onpopstate = (e) => this.navigate(e.state?.route || 'home', false);
        this.navigate('home');
    },
    navigate(route, push = true) {
        const outlet = document.getElementById('router-outlet');
        outlet.style.opacity = 0;
        setTimeout(() => {
            outlet.innerHTML = '';
            if(routes[route]) routes[route](outlet);
            outlet.style.opacity = 1;
            if(push) history.pushState({route}, '', `#${route}`);
            document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.link === route));
        }, 150);
    }
};
