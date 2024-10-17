const KerogsWatermark = (() => {
    const init = (selector, options = {}) => {
        document.addEventListener('DOMContentLoaded', () => {
            const watermarkElement = document.querySelector(selector);

            if (!watermarkElement) return;

            let watermarkHTML = `

            <!-- 
            by : Kerogs
            Github : https://github.com/kerogs
            CodePen : https://codepen.io/kerogs
            -->

            <style>
                .kerogs-watermark-container{
                    position: fixed;
                    left: 20px;
                    top: 20px;
                    z-index: 999999999999;
                    gap: 10px;
                    font-size: 12px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }
                .kerogs-collab-on {
                    
                    display: flex;
                    gap: 10px;
                }
                    
                .kerogs-watermark {
                }
                    
                .kerogs-watermark {
                    opacity: .8;
                    transition: .2s;
                }
                    
                .kerogs-watermark:hover {
                    opacity: 1;
                    transform: scale(1.1);
                }
                    
                .kerogs-watermark img {
                    width: 30px;
                    height: 30px;
                    object-fit: contain;
                }
            </style>
            
            
            <div class="kerogs-watermark-container">
            `;

            if (options.collaborator) {
                watermarkHTML += `<div class="kerogs-collab-on">`;
            }

            watermarkHTML += `
            <div class="kerogs-watermark" title="Kerogs">
                <a href="https://github.com/kerogs">
                    <img src="https://raw.githubusercontent.com/kerogs/iconpack/refs/heads/main/logo_dark.svg" alt="Kerogs Logo">
                </a>
            </div>
        `;

            // Si l'option 'collaborator' est activée
            if (options.collaborator && options.collab && Array.isArray(options.collab)) {
                options.collab.forEach(collaborator => {
                    watermarkHTML += `
                    <div class="kerogs-watermark" title="${collaborator.name}">
                        <a href="${collaborator.url}" target="_blank">
                            <img src="${collaborator.img}" alt="${collaborator.name}">
                        </a>
                    </div>
                `;
                });
                watermarkHTML += `</div>`
            }

            watermarkElement.innerHTML = watermarkHTML;
        });

        waatermarkHTML += `</div>`;
    };

    // Expose uniquement la fonction 'init'
    return {
        init: init
    };
})();