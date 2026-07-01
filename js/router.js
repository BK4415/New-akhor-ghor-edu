// js/router.js
import { Home } from './modules/home.js';
import { Vowels } from './modules/vowels.js';
import { DetailView } from './modules/detail.js';
import { Numbers } from './modules/numbers.js';
import { TracingSandbox } from './modules/tracing.js';

const routes = { 
    'home': Home, 
    'vowels': Vowels, 
    'vowel-detail': DetailView,
    'numbers': Numbers,
    'tracing': TracingSandbox
};

export const Router = {
    init() {
        window.onpopstate = (e) => this.navigate(e.state?.route || 'home', e.state?.params, false);
        this.navigate('home');
    },
    navigate(route, params = {}, push = true) {
        const outlet = document.getElementById('router-outlet');
        outlet.classList.add('fade-out'); // Native transition start
        
        setTimeout(() => {
            outlet.innerHTML = '';
            if(routes[route]) {
                routes[route](outlet, params); 
            }
            outlet.classList.remove('fade-out');
            outlet.classList.add('fade-in');
            
            if(push) history.pushState({route, params}, '', `#${route}`);
            
            // Update Active Nav UI
            document.querySelectorAll('.nav-item').forEach(b => 
                b.classList.toggle('active', b.dataset.link === route)
            );
            // Scroll to top for native feel
            outlet.scrollTop = 0;
        }, 150);
    }
};
