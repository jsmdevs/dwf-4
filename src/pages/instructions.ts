import { manos } from "../components/manos";

export function init() {
    class Instructions extends HTMLElement {
        constructor() {
            super();
            this.render();
        };

        render() {
            manos();
            const shadow = this.attachShadow({ mode: "open" });
            const div = document.createElement("div");
            div.classList.add("instructions")
            const style = document.createElement("style");

            style.textContent = `
                .instructions{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 3rem;
                    height: 100%;
                }

                .btn{
                    background-color: #006CFC;
                    border: solid 8px #001997;
                    border-radius: 8px;
                    width: 100%;
                    max-width: 284px;
                    color: white;
                    font-family: "Odibee Sans", sans-serif;
                    font-size: 32px;
                    padding: 10px;
                    cursor: pointer;
                    }

                .instructions__text{
                    text-align: center;
                    font-size: 32px;
                }
                    
                .btn:active{
                    background-color: #004aacff;
                    border: solid 8px #001061ff;
                }
            `;

            div.innerHTML = `
                <p class="instructions__text">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
                <button class="btn">¡Jugar!</button>
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };

    customElements.define("instructions-component", Instructions);
}