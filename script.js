// Sélectionner les éléments d'onglets (boutons)
const marsBtn = document.querySelector("#marsBtn");
const moonBtn = document.querySelector("#moonBtn");
const europaBtn = document.querySelector("#europaBtn");
const titanBtn = document.querySelector("#titanBtn");

// Sélectionner l'élément pour afficher les informations de la planète
const textesousMARS = document.querySelector("#TextesousMARS");

const ChoixPlanete = {
    Mars: {
        Nom: "Mars",
        Texte: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        DistanceMoyenne: "225 mil. km",
        TempsParcouruPourAtteindrePlanete: "9 months"
    },
    Moon: {
        Nom: "Moon",
        Texte: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        DistanceMoyenne: "384,400 km",
        TempsParcouruPourAtteindrePlanete: "3 days"
    },
    Europa: {
        Nom: "Europa",
        Texte: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        DistanceMoyenne: "628 mil. km",
        TempsParcouruPourAtteindrePlanete: "3 years"
    },
    Titan: {
        Nom: "Titan",
        Texte: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        DistanceMoyenne: "1.6 bil. km",
        TempsParcouruPourAtteindrePlanete: "7 years"
    }
};

// Fonction pour mettre à jour les informations de la planète dans le <p>
function updatePlanetInfo(planet) {
    textesousMARS.innerHTML = `
        <h2>${ChoixPlanete[planet].Nom}</h2>
        <p>${ChoixPlanete[planet].Texte}</p>
        <h3>Avg. distance</h3>
        <h1>${ChoixPlanete[planet].DistanceMoyenne}</h1>
        <h3>Est. travel time</h3>
        <h1>${ChoixPlanete[planet].TempsParcouruPourAtteindrePlanete}</h1>
    `;
}

// Ajouter des événements de clic sur chaque bouton
marsBtn.addEventListener("click", () => updatePlanetInfo("Mars"));
moonBtn.addEventListener("click", () => updatePlanetInfo("Moon"));
europaBtn.addEventListener("click", () => updatePlanetInfo("Europa"));
titanBtn.addEventListener("click", () => updatePlanetInfo("Titan"));
