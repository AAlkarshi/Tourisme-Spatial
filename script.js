document.addEventListener("DOMContentLoaded", function () {
    const marsBtn = document.querySelector("#marsBtn");
    const moonBtn = document.querySelector("#moonBtn");
    const europaBtn = document.querySelector("#europaBtn");
    const titanBtn = document.querySelector("#titanBtn");

    const textesousMARS = document.querySelector("#TextesousMARS");

    function showPlanetInfo(planet) {
        const infoContainer = document.getElementById('TextesousMARS');
        let planetImage = document.getElementById('IMGPLANETE');

        // Remise à zéro du contenu de la div
        infoContainer.innerHTML = "";
        planetImage.src = "";
        
        switch (planet) {
            case 'mars':
                infoContainer.innerHTML = `
                    <h1 class="NOMDELAPLANETE">Mars </h1>
                                
                    <p class="planetetexte">
                    Don’t forget to pack your hiking boots. You’ll need them to tackle <br>
                    Olympus Mons, the tallest planetary mountain in our solar system. It’s <br>
                    two and a half times the size of Everest!
                    </p>

                    <hr />

                    <div class="EnglobeDistanceetDuree" style="display: flex; justify-content: space-between;">
                        <div style="flex: 1; padding: 10px;">
                            <h3 class="TitreAVGDistance"> Avg. distance </h3>                     
                            <p class="NombreDistanceKM">225 mil. km</p>
                        </div>
                        
                        <div style="flex: 1; padding: 10px;">
                            <h3 id="TitreTravelTime"> Est. travel time </h3>                     
                            <p class="AnneeVoyageTemps">9 Months</p>
                        </div>
                    </div>
                `;
                planetImage.src = "assets/destination/image-mars.png";
                break;

                case 'moon':
                    infoContainer.innerHTML = `
                        <h1 class="NOMDELAPLANETE">Moon</h1>
                
                        <p class="planetetexte">
                         See our planet as you’ve never seen it before. A perfect relaxing trip <br>
                         away to help regain perspective and come back refreshed. While you’re <br>
                         there, take in some history by visiting the Luna 2 and Apollo 11 landing <br>
                         sites.</p>
                
                        <hr />
                
                        <div class="EnglobeDistanceetDuree" style="display: flex; justify-content: space-between;">
                            <div style="flex: 1; padding: 10px;">
                                <h3 class="TitreAVGDistance"> Avg. distance </h3> 
                                <p class="NombreDistanceKM">384,400 km</p>
                            </div>
                
                            <div style="flex: 1; padding: 10px;">
                                <h3 id="TitreTravelTime"> Est. travel time </h3>                     
                                <p class="AnneeVoyageTemps">3 days</p>
                            </div>
                        </div>
                    `;
                    planetImage.src = "assets/destination/image-moon.png";
                    break;
                

            case 'europa':
                infoContainer.innerHTML = `
                    <h1 class="NOMDELAPLANETE">Europa </h1>
                    
                    <p class="planetetexte">
                       The smallest of the four Galilean moons orbiting Jupiter, Europa is a <br>
                       winter lover’s dream. With an icy surface, it’s perfect for a bit of ice <br>
                       skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                    </p>

                    <hr />

                <div class="EnglobeDistanceetDuree">
                    <div style="flex: 1; padding: 10px;">
                        <h3 class="TitreAVGDistance"> Avg. distance </h3>                     
                        <p class="NombreDistanceKM">628 mil. km</p>
                    </div>

                    <div style="flex: 1; padding: 10px;">
                        <h3 id="TitreTravelTime"> Est. travel time </h3>                     
                        <p class="AnneeVoyageTemps">3 years</p>
                    </div>
                </div>
                `;  
                planetImage.src = "assets/destination/image-europa.png";
                break;

            case 'titan':
                infoContainer.innerHTML = `
                    <h1 class="NOMDELAPLANETE">Titan</h1>
                    
                    <p class="planetetexte" >
                       The only moon known to have a dense atmosphere other than Earth, <br>
                       Titan is a home away from home (just a few hundred degrees colder!). <br>
                       As a bonus, you get striking views of the Rings of Saturn.
                    </p>

                    <hr />

                    <div class="EnglobeDistanceetDuree">
                        <div style="flex: 1; padding: 10px;">
                            <h3 class="TitreAVGDistance"> Avg. distance </h3>
                            <p class="NombreDistanceKM"> 1.6 Bil. km</p>
                        </div>

                        <div style="flex: 1; padding: 10px;">
                            <h3 id="TitreTravelTime"> Est. travel time </h3>
                            <p class="AnneeVoyageTemps">7 years</p>
                        </div>
                    </div>


                `;
                planetImage.src = "assets/destination/image-titan.png";
                break;
        }

       
        

        infoContainer.classList.add('active');
    }

    marsBtn.addEventListener("click", () => showPlanetInfo("mars"));
    moonBtn.addEventListener("click", () => showPlanetInfo("moon"));
    europaBtn.addEventListener("click", () => showPlanetInfo("europa"));
    titanBtn.addEventListener("click", () => showPlanetInfo("titan"));


     //  Mars par défaut
     showPlanetInfo('mars');
});


