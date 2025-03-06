class CustomActor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                .custom-box {
                    padding: 10px;
                    background: #ddd;
                    border-radius: 8px;
                    text-align: center;
                    margin-top: 10px;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                .custom-box:hover {
                    background: #bbb;
                }
            </style>
            <div class="custom-box">
                <p id="info">Adrien Brody ganó el premio por su increíble actuación en "The Brutalist".</p>
                <img src="bro9461_sq.jpg" alt="Imagen de Adrien Brody" style="max-width: 100%; border-radius: 5px;">
            </div>
        `;
//Evento para que agregue mas informacion cuando le de click 
        this.shadowRoot.querySelector(".custom-box").addEventListener("click", () => this.showMoreInfo());
    }

    showMoreInfo() {
        const info = this.shadowRoot.querySelector("#info");
        info.textContent = "Adrien Brody también es conocido por su papel en 'El Pianista', donde ganó un Oscar en 2003.";
    }
}

customElements.define('custom-actor', CustomActor);
