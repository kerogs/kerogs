function setCookie(name: string, value: string, days: number = 7): void {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Expiration dans le nombre de jours spécifié
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Fonction pour obtenir la valeur d'un cookie
function getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

// Fonction pour supprimer un cookie
function deleteCookie(name: string): void {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}








// Fonction pour ajouter ou modifier un cookie
console.log('loading.ts -> OK');
// when html is loaded
window.addEventListener('load', () => {

    let loadingLogs = document.querySelector('.loading ul') as HTMLElement;
    loadingLogs.innerHTML += `<li>Data synchronization</li>`;

    let warningOn = true;
    let warningID = 2;

    loadingLogs.innerHTML += `<li>System warnings analysis</li>`;
    if (warningOn) {

        // check if cookie warning have the same value as warningID (if not, show warning)
        const warningCookie = getCookie('warningCookie');

        if (warningCookie == null || warningCookie != warningID.toString()) {

            // showPopup
            let warningArea = document.querySelector('.warning') as HTMLElement;
            if (warningArea) {
                warningArea.style.display = 'block';
            } else {
                console.error('warningArea not found');
            }

        } else {
            nexstep();
        }

    }

    // loading style, image, etc...

});

function warningValidation(warningID: number): void {

    let warningArea = document.querySelector('.warning') as HTMLElement;
    if (warningArea) {
        warningArea.style.display = 'none';
    } else {
        console.error('warningArea not found');
    }

    setCookie('warningCookie', warningID.toString(), 7);

    nexstep();
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function nexstep() {
    // fake loading
    let loadingLogs = document.querySelector('.loading ul') as HTMLElement;

    // fake timer
    loadingLogs.innerHTML += `<li>Communication with Rhodes Island</li>`;

    let allFetchSuccessful = true;  // Variable pour vérifier si tous les fetchs sont réussis

    const userURLReadme = 'https://raw.githubusercontent.com/kerogs/kerogs/main/README.md';
    
    try {
        // Premier fetch avec délai
        await fetch(userURLReadme)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur for README');
                }
                return response.text();
            })
            .then(userURLReadmeContent => {
                console.log('[FETCH] userURLReadme -> OK');
                loadingLogs.innerHTML += `<li>Profile extraction [<b>Kerogs</b>]</li>`;
            })
            .catch(error => {
                console.error('[FETCH ERROR] userURLReadme:', error);
                allFetchSuccessful = false;  // Si un fetch échoue, on marque comme échoué
            });

        // Délai avant le prochain fetch
        await delay(1000); // Attendre 1 seconde

        const userURLReadmeOld = 'https://raw.githubusercontent.com/kerogs/kerogs/main/README.md';
        await fetch(userURLReadmeOld)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur for OLD README');
                }
                return response.text();
            })
            .then(userURLReadmeOldContent => {
                console.log('[FETCH] userURLReadmeOld -> OK');
                loadingLogs.innerHTML += `<li>Retrieval of the previous profile</li>`;
            })
            .catch(error => {
                console.error('[FETCH ERROR] userURLReadmeOld:', error);
                allFetchSuccessful = false;
            });

        // Délai avant le prochain fetch
        await delay(1000); // Attendre 1 seconde

        const userURL = "https://api.github.com/users/kerogs";
        await fetch(userURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données du profil');
                }
                return response.text();
            })
            .then(userURLContent => {
                console.log('[FETCH] userURL -> OK');
                loadingLogs.innerHTML += `<li>Metadata collection</li>`;
            })
            .catch(error => {
                console.error('[FETCH ERROR] userURL:', error);
                allFetchSuccessful = false;
            });

        // Délai avant le prochain fetch
        await delay(1000); // Attendre 1 seconde

        const userURLRepos = "https://api.github.com/users/kerogs/repos";
        await fetch(userURLRepos)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des repositories');
                }
                return response.text();
            })
            .then(userURLReposContent => {
                console.log('[FETCH] userURLRepos -> OK');
                loadingLogs.innerHTML += `<li>Repositories extraction</li>`;
            })
            .catch(error => {
                console.error('[FETCH ERROR] userURLRepos:', error);
                allFetchSuccessful = false;
            });

    } catch (error) {
        console.error('Erreur générale:', error);
        allFetchSuccessful = false;
    }

    // Si tous les fetchs ont réussi, on redirige vers /home.html
    if (allFetchSuccessful) {
        console.log('All fetches are successful. Redirecting...');
        setTimeout(() => {
            window.location.href = './kerogs/home.html';
        }, 1000);  // Rediriger après 1 seconde de délai
    } else {
        loadingLogs.innerHTML += `<li><b>Une erreur est survenue. Veuillez réessayer.</b></li>`;
    }

    await delay(1000);
}
