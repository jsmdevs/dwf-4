import { state } from "../state";

export function manos() {
    class Manos extends HTMLElement {
        constructor() {
            super();
            this.render();
        };

        render() {
            // Importar imágenes

            function handleOption(optionSelected: Element, optionsGame: NodeListOf<Element>) {
                
                optionsGame.forEach((option) => {
                    option.classList.add("unselected");
                    if (option.classList[1] && option.classList[1] == "selected") {
                        option.classList.remove("selected");
                    };

                    if (option.id == optionSelected.id) {
                        optionSelected.classList.add("selected");
                        option.classList.remove("unselected")
                    };
                });
            };

            const imgPiedra = require("url:../assets/img/piedra.svg");
            const imgPapel = require("url:../assets/img/papel.svg");
            const imgTijera = require("url:../assets/img/tijera.svg");

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
                    overflow: hidden;
                    gap: .8rem;
                }
                    
                .btn-game{
                    cursor: pointer;
                    position: relative;
                }

                #tijera,
                #piedra{
                    width: 90px;
                    bottom: 0;
                }

                #tijera{
                    bottom: -70px;
                }
                #piedra{
                    bottom: -70px;

                }

                #papel{
                    bottom: -70px;
                    width: 108px;
                }

                .selected{
                    bottom: -15px !important;
                }

                .unselected{
                    opacity: .5;
                }
            `;

            div.classList.add("manos__container");
            div.innerHTML = `
            <img id="tijera" class="btn-game" src=${imgTijera} alt="">
               <img id="piedra" class="btn-game" src=${imgPiedra} alt="">
               <img id="papel" class="btn-game" src=${imgPapel} alt="">
            `;

            const optionsGame = div.querySelectorAll(".btn-game");

            optionsGame.forEach((item) => {
                item.addEventListener("click", () => {
                    handleOption(item, optionsGame);
                    state.setGame(item.id);
                });

            });

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };

    if (!customElements.get('manos-component')) {
        customElements.define('manos-component', Manos);
    }
};