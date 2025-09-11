import { initWelcome } from "./pages/welcome/welcome";
import { initInstructions } from "./pages/instructions/instructions";
import { initGameplay } from "./pages/play/play";
import { initGame } from "./pages/results/results";

export function initRouter(container: HTMLElement) {

    function handleRoute(route: any) {
        const routes = [
            {
                path: /\/|welcome/,
                component: initWelcome
            },
            {
                path: /\/instructions/,
                component: initInstructions
            },
            {
                path: /\/play/,
                component: initGameplay
            },
            {
                path: /\/results/,
                component: initGame
            }
        ];
        
        function goTo(path) {
            history.pushState({}, "", path);
            handleRoute(`/${path}`);
        };

        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.component({ goTo: goTo });
                if (container.firstChild) {
                    container.firstChild.remove();
                };
                container.appendChild(el);
            };
        };
    };

    handleRoute(location.pathname);
};

