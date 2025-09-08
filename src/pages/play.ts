import { manos } from "../components/manos";


export function initGameplay(params) {

    manos();
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="countdown">
        <h1 class="countdown__number">1</h1>
    </div>
        <manos-component></manos-component>
    `;
    
    let counter = 1
    const intervaloId = setInterval(() => {
        counter++;
        const item = div.querySelector(".countdown__number");
        item.textContent = `${counter}`;
        if (counter > 3) {
            clearInterval(intervaloId);
            // params.goTo("");
            
        };
    }, 1000);

    return div;
};