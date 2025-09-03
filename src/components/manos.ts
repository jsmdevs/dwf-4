export function manos() {
    class Manos extends HTMLElement {
        constructor() {
            super();
            this.render();
        };

        render() {
            // Importar imágenes
            const imgPiedra = require("url:../assets/img/piedra.png");
            const imgPapel = require("url:../assets/img/papel.png");
            const imgTijera = require("url:../assets/img/tijera.png");

            const shadow = this.attachShadow({ mode: "open" });
            const div = document.createElement("div");

            const style = document.createElement("style");
            style.textContent = `
                .manos__container{
                    display: flex;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: 0;
                    gap: 3rem;
                }
               `;

            div.classList.add("manos__container");
            div.innerHTML = `
            <div class="piedra"><img src=${imgTijera} alt=""></div>
               <div class="piedra"><img src=${imgPiedra} alt=""></div>
               <div class="piedra"><img src=${imgPapel} alt=""></div>
            `;


            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };

    customElements.define("manos-component", Manos);
};