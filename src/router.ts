export function initRouter(container: HTMLElement) {

    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(`/${path}`);
    };

    function handleRoute(route: any) {
        const routes = [
            {
                path: /\/instructions/,
                component: (any) => any
            },
            {
                path: /\/gameplay/,
                component: (any) => any
            },
        ];


        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.component({ goTo: goTo });
                if(container.firstChild){
                    container.firstChild.remove();
                }
                container.appendChild(el);
            };
        };
    };
    handleRoute(location.pathname);
    container.innerHTML = `
        <welcome-component></welcome-component>
    `


};