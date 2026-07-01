import { Home } from './modules/home.js';
import { Vowels } from './modules/vowels.js';
import { Numbers } from './modules/numbers.js';
import { TracingSandbox } from './modules/tracing.js';
import { QuizModule } from './modules/games.js';

const routes = {
    'home': Home,
    'vowels': Vowels,
    'numbers': Numbers,
    'tracing': TracingSandbox,
    'games': QuizModule,
    'profile': (container) => container.innerHTML = '<h2>Profile Coming Soon</h2>'
};

export const Router = {
    init() {
        window.onpopstate = (e) => this.navigate(e.state?.route || 'home', false);
        this.navigate('home');
    },
    navigate(route, push = true) {
        const outlet = document.getElementById('router-outlet');
        outlet.classList.add('fade-out');
        
        setTimeout(() => {
            outlet.innerHTML = '';
            if (routes[route]) routes[route](outlet);
            outlet.classList.remove('fade-out');
            outlet.classList.add('fade-in');
            
            if (push) history.pushState({route}, '', `#${route}`);
            
            // Update Active Tab
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.toggle('active', item.dataset.link === route);
            });
        }, 150);
    }
};
