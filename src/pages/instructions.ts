export function initInstructions(params) {
    const div = document.createElement("div");
    div.classList.add("instructions")

    div.innerHTML = `
        <p class="instructions__text">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
        <button class="btn">¡Jugar!</button>
     `;

    const btn = div.querySelector(".btn");
    
    btn.addEventListener("click", () => {
        params.goTo("play");
    });

     return div;
};