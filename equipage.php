<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"/> 
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="script.js" type="text/javascript" defer></script>


    <title>Destination</title>
</head>

<body style="background-image: url('assets/crew/background-crew-desktop.jpg'); margin: 0; background-size: cover; background-repeat: no-repeat; overflow-y: visible; background-position: center;">

<nav>
    <!-- IMG DE FOND -->
    <img id="iconeIMG" src="space-tourism-website-main/space-tourism-website-main/starter-code/assets/shared/logo.svg" >
    
    <!-- Barre horizontale ajustée -->
    <hr id="BarreHorizontal">    
    
    <!-- Conteneur avec l'effet de flou -->
    <div id="EnglobeOnglet">
        <a class="ONGLET" href="index.php"> <b>00 </b> Home</a>
        <a class="ONGLET" href="destination.php">  <b>01 </b> Destination</a>
        <a class="ONGLET" href="equipage.php"> <b>02 </b> Crew</a>
        <a class="ONGLET" href="technology.php"> <b>03 </b> Technology</a>
    </div>


    
     <!-- Bouton  -->
    <button id="menuButton">
        <span id="hamburgerIcon">☰</span>
        <span id="closeIcon" style="display: none;">✖</span>
    </button>

</nav>



<!-- Section principale -->
<div class="container" >
    <div id="ChoixDestination"> 

    <div id="TitreChoixDestination">  
       <div id="TitreNombrePage"> 02 </div> 
       <div id="TitrePage"> Meet your crew </div>
    </div>

    <div id="EnglobeLigneEquipage">   
        <div id="ChoixEquipage">
            <div id="texteEquipage" style="color: white; font-family: Bellefair;">
                <!-- infos seront injectées ici avec JS -->
            </div>

             <!-- POINT BLANC -->
             <ul id="PointBlanc">
                <li><button id="Commander" class="crew__role-btn" onclick="showEquipageInfo('Commander')"> </button></li>
                <li><button id="MissionSpecialist" class="crew__role-btn" onclick="showEquipageInfo('MissionSpecialist')"> </button></li>
                <li><button id="Pilot" class="crew__role-btn" onclick="showEquipageInfo('Pilot')"> </button></li>
                <li><button id="FlightEngineer" class="crew__role-btn" onclick="showEquipageInfo('FlightEngineer')"> </button></li>
            </ul>

        </div>
     
             <img id="IMGMembreEquipage" src="" alt="Image du membre de l'équipage">
          
        
        </div>
    </div>
</div>



</body>
</html>