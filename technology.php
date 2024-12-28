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


    <title>Technology</title>
</head>

<body style="background-image: url('assets/technology/background-technology-desktop.jpg'); margin: 0; background-size: cover; background-repeat: no-repeat; overflow-y: visible; background-position: center;">

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
    <div id="TitreChoixDestination">  
       <div id="TitreNombrePage"> 03 </div> 
       <div id="TitrePage"> Space launch 101 </div>
    </div>
</div>


    <div id="ChoixTechnology"> 

    

    <div id="EnglobeLigneTech">   
        
        <div id="ChoixTech">
            <div id="texteTechnology" style="color: white; font-family: Bellefair;">
                <!-- infos seront injectées ici avec JS -->
            </div>

             <!-- POINT BLANC -->
             <ul id="NumeroPointBlanc">
                <li><button id="Btn1" class="btnNumerote active" onclick="showTechnologyInfo('Btn1')" > 1 </button></li>
                <li><button id="Btn2" class="btnNumerote" onclick="showTechnologyInfo('Btn2')"> 2 </button></li>
                <li><button id="Btn3" class="btnNumerote" onclick="showTechnologyInfo('Btn3')"> 3 </button></li>
            </ul>
        </div>
     
             <img id="IMGTechnology" src="" alt="Image de la Technologie">
          
        
        </div>
    </div>



</body>
</html>