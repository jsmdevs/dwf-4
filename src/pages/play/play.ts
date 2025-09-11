import { manos } from "../../components/manos";
import { state } from "../../state";

export function initGameplay(params) {

    manos();
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="loader__container">
        <div class="loader">
            <svg viewBox="0 0 100 100">
                <circle class="loader__background" cx="50" cy="50" r="46"/>
                <circle class="loader__circle" cx="50" cy="50" r="46"/>
            </svg>
            <span class="loader__number">1</span>
        </div>
    </div>
        <manos-component></manos-component>
    `;
    
    let counter = 1;
    const intervaloId = setInterval(() => {
        counter++;
        const item = div.querySelector(".loader__number");
        item.textContent = `${counter}`;
        if (counter > 3) {
            clearInterval(intervaloId);
            params.goTo("results");
            const currentGame = state.getState().currentGame;
            state.pushToHistoty(currentGame);
        };
    }, 1000);

    return div;
};