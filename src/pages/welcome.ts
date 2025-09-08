export function initWelcome(params) {
    const gameLogo = require("url:../assets/img/piedra-papel-tijeras.svg");


    const div = document.createElement("div");
    div.classList.add("welcome");

    div.innerHTML = `
        <img class="welcome__img" src="${gameLogo}">
        <button class="btn">Empezar</button>
     `;

    const btn = div.querySelector(".btn");
    btn.addEventListener("click", () => {
        params.goTo("instructions");
    });

    return div;
};