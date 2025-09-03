import { manos } from "../components/manos";

export function initWelcome (params){

    const gameLogo = require("url:../assets/img/piedra-papel-tijeras.svg");

    class Welcome extends HTMLElement {
        constructor(){
            super();
            this.render();
        };
        render(){
            manos();
            const shadow = this.attachShadow({ mode: "open" });
            const style = document.createElement("style");
            const div = document.createElement("div");
            div.classList.add("welcome");

            style.textContent = `
                .welcome{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    height: 100dvh;
                }

                .welcome__img{
                    width: 100%;
                    max-width: 284px;   
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
                    
                .btn:active{
                    background-color: #004aacff;
                    border: solid 8px #001061ff;
                }
            `

            div.innerHTML = `
                <img class="welcome__img" src="${gameLogo}">
                <button class="btn">Empezar</button>
            `;

            const btn = div.querySelector(".btn");
            btn.addEventListener("click", () => {
                params.goTo("instructions");
            })
        
            shadow.appendChild(style);
            shadow.appendChild(div)

        };
    };

    customElements.define("welcome-component", Welcome);
};