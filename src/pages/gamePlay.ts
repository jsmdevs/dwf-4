export function init(){
    class GamePlay extends HTMLElement{
        constructor(){
            super();
            this.render();
        }

        render(){
            const shadow = this.attachShadow({ mode: "open" });
            const div = document.createElement("div");

            div.innerHTML = `
                <div class="countdown">
                    
                </div>
            `
        };
    };

    customElements.define("gameplay-element",GamePlay);
}