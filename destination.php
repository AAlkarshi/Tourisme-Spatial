<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"/> 
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap">
    <script src="script.js" type="text/javascript" defer></script>


    <title>Destination</title>
</head>

<body style="background-image: url('assets/destination/background-destination-desktop.jpg'); margin: 0; background-size: cover; background-repeat: no-repeat; overflow-y: visible; background-position: center;">

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
    <a class="ONGLET"> <b>03 </b> Technology</a>
</div>

</nav>



<!-- Section principale -->
<div class="container" style="    margin: 0;
    box-sizing: inherit;
    padding: 0 24px;">
<div id="ChoixDestination">

    <div id="TitreChoixDestination">  
       <div id="TitreNombrePage"> 01 </div> 
       <div id="TitrePage"> Pick Your Destination </div>
    </div>

    <div id="EnglobeLigneDestination">
            <img id="IMGPLANETE" src="" alt="Image de la planète">
        
        
        <div id="ChoixPlanete" >
            <ul>
                <li><a id="marsBtn" onclick="showPlanetInfo('mars')" >Mars</a></li>
                <li><a id="moonBtn" onclick="showPlanetInfo('moon')">Moon</a></li>
                <li><a id="europaBtn" onclick="showPlanetInfo('europa')">Europa</a></li>
                <li><a id="titanBtn" onclick="showPlanetInfo('titan')">Titan</a></li>
            </ul>
            
            <!-- Informations de la planète -->
            <div id="TextesousMARS" style="color: white; font-family: Bellefair;">
                    <!-- infos seront injectées ici avec JS -->
            </div>
        </div>
    </div>
</div>
</div>



</body>
</html>