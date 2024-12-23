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




















/*  EQUIPAGE  */
document.addEventListener("DOMContentLoaded", function () {
    const CommanderBtn = document.querySelector("#Commander");
    const MissionSpecialistBtn = document.querySelector("#MissionSpecialist");
    const PilotBtn = document.querySelector("#Pilot");
    const FlightEngineerBtn = document.querySelector("#FlightEngineer");
    const texteEquipage = document.querySelector("#texteEquipage");

    function showEquipageInfo(equipage , role) {
        const infoEquipage = document.getElementById('texteEquipage');
        let ImgEquipage = document.getElementById('IMGMembreEquipage');

        

        // Remise à zéro du contenu de la div
        infoEquipage.innerHTML = "";
        ImgEquipage.src = "";
        
        switch (equipage) {
            case 'Commander':
                infoEquipage.innerHTML = `
                    <h1 class="NomRoleEquipage">Commander </h1>
                    <h1 class="NomMembreEquipage">Douglas Hurley </h1>

                    <p class="planetetexte">
                    Douglas Gerald Hurley is an American engineer, former <br>
                    Marine Corps pilot and former NASA astronaut. He <br> 
                    launched into space for the third time as commander of <br>
                    Crew Dragon Demo-2.
                    </p> `;
                ImgEquipage.src = "assets/crew/image-douglas-hurley.png";
                break;

                case 'MissionSpecialist':
                    infoEquipage.innerHTML = `
                        <h1 class="NomRoleEquipage">Mission Specialist</h1>
                        <h1 class="NomMembreEquipage">Mark Shuttleworth</h1>
                
                        <p class="planetetexte">
                        Mark Richard Shuttleworth is the founder and CEO of <br>
                        Canonical, the company behind the Linux-based Ubuntu <br>
                        operating system. Shuttleworth became the first South <br>
                        African to travel to space as a space tourist.
                        </p> `;
                    ImgEquipage.src = "assets/crew/image-mark-shuttleworth.png";
                    break;
                

                case 'Pilot':
                    infoEquipage.innerHTML = `
                        <h1 class="NomRoleEquipage">Pilot </h1>
                        <h1 class="NomMembreEquipage">Victor Glover </h1>

                        <p class="planetetexte">
                        Pilot on the first operational flight of the SpaceX Crew <br>
                        Dragon to the International Space Station. Glover is a <br>
                        commander in the U.S. Navy where he pilots an F/A <br>
                        -18.He was a crew member of Expedition 64, and served <br>
                        as a station systems flight engineer.
                        </p> `;  
                ImgEquipage.src = "assets/crew/image-victor-glover.png";
                break;

                case 'FlightEngineer':
                    infoEquipage.innerHTML = `
                        <h1 class="NomRoleEquipage">Flight Engineer</h1>
                        <h1 class="NomMembreEquipage">Anousheh Ansari</h1>
                        
                        <p class="planetetexte" >
                        Anousheh Ansari is an Iranian American engineer and <br>
                        co-founder of Prodea Systems. Ansari was the fourth self-funded <br>
                        space tourist, the first self-funded woman <br>
                        to fly to the ISS, and the first Iranian in space.
                        </p>`;
                ImgEquipage.src = "assets/crew/image-anousheh-ansari.png";
                break;
        }

       
        

        infoEquipage.classList.add('active');
    }

    CommanderBtn.addEventListener("click", () => showEquipageInfo("Commander"));
    MissionSpecialistBtn.addEventListener("click", () => showEquipageInfo("MissionSpecialist"));
    PilotBtn.addEventListener("click", () => showEquipageInfo("Pilot"));
    FlightEngineerBtn.addEventListener("click", () => showEquipageInfo("FlightEngineer"));


     //  Commander par défaut
     showEquipageInfo('Commander');
});























/*  TECHNOLOGY  */
document.addEventListener("DOMContentLoaded", function () {
    const NumeroBtn1 = document.querySelector("#Btn1");
    const NumeroBtn2 = document.querySelector("#Btn2");
    const NumeroBtn3 = document.querySelector("#Btn3");
    const texteTechnology = document.querySelector("#texteTechnology");

    function showTechnologyInfo(technology) {
        const infoTechnology = document.getElementById('texteTechnology');
        let ImgTechnology = document.getElementById('IMGTechnology');


        document.querySelectorAll(".btnNumerote").forEach(button => button.classList.remove("active"));

        // Ajouter  active au bouton correspondant
        const activeButton = document.getElementById(technology);
        activeButton.classList.add("active");

        

        infoTechnology.innerHTML = "";
        ImgTechnology.src = "";
        
        switch (technology) {
            case 'Btn1':
                infoTechnology.innerHTML = `
                    <h1 class="NomTech">The terminology.. </h1>
                    <h1 class="NomTechAffiche">Launch vehicle </h1>

                    <p class="TexteTech">
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to <br>
                    carry a payload from Earth's surface to space, usually to Earth orbit or <br>
                    beyond. Our WEB-X carrier rocket is the most powerful in operation. <br>
                    Standing 150 metres tall, it's quite an awe-inspiring sight on the launch <br>
                    pad!
                    </p> `;
                ImgTechnology.src = "assets/technology/image-launch-vehicle-portrait.jpg";
                break;

            case 'Btn2':
                infoTechnology.innerHTML = `
                    <h1 class="NomTech">The terminology..</h1>
                    <h1 class="NomTechAffiche">Spaceport</h1>
                
                    <p class="TexteTech">
                    A spaceport or cosmodrome is a site for launching (or receiving) <br>
                    spacecraft, by analogy to the seaport for ships or airport for aircraft. <br>
                    Based in the famous Cape Canaveral, our spaceport is ideally situated to <br>
                    take advantage of the Earth’s rotation for launch.
                    </p> `;
                ImgTechnology.src = "assets/technology/image-spaceport-portrait.jpg";
                break;
                

            case 'Btn3':
            infoTechnology.innerHTML = `
                    <h1 class="NomTech">The terminology.. </h1>
                    <h1 class="NomTechAffiche">Space capsule </h1>

                    <p class="TexteTech">
                    A space capsule is an often-crewed spacecraft that uses a blunt-body <br>
                    reentry capsule to reenter the Earth's atmosphere without wings. Our <br>
                    capsule is where you'll spend your time during the flight. It includes a <br>
                    space gym, cinema, and plenty of other activities to keep you <br>
                    entertained.
                    </p> `;  
                ImgTechnology.src = "assets/technology/image-space-capsule-portrait.jpg";
                break;
        }

        infoTechnology.classList.add('active');
    }

    NumeroBtn1.addEventListener("click", () => showTechnologyInfo("Btn1"));
    NumeroBtn2.addEventListener("click", () => showTechnologyInfo("Btn2"));
    NumeroBtn3.addEventListener("click", () => showTechnologyInfo("Btn3"));

     //  Btn1 par défaut
     showTechnologyInfo('Btn1');
});




document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById('menuButton');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeIcon = document.getElementById('closeIcon');
    const EnglobeOnglet = document.getElementById('EnglobeOnglet');

    menuButton.addEventListener('click', () => {
        EnglobeOnglet.classList.toggle('show');

        const isMenuOpen = EnglobeOnglet.classList.contains('show');
        hamburgerIcon.style.display = isMenuOpen ? 'none' : 'block';
        closeIcon.style.display = isMenuOpen ? 'block' : 'none';
    });
});








