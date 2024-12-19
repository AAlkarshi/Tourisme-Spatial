<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"/> 
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap">
    <script type="text/javascript"> href="script.js" </script> 

    <title>Destination</title>
</head>

<body style="background-image: url('assets/destination/background-destination-desktop.jpg'); margin: 0; background-size: cover; background-repeat: no-repeat; background-position: center;">

<nav>
    <!-- IMG DE FOND -->
    <img id="iconeIMG" src="space-tourism-website-main/space-tourism-website-main/starter-code/assets/shared/logo.svg" >
    
    <!-- Barre horizontale ajustée -->
    <hr id="BarreHorizontal">    
    
    <!-- Conteneur avec l'effet de flou -->
<div id="EnglobeOnglet">
    <a class="ONGLET" href="index.php"> <b>00 </b> Home</a>
    <a class="ONGLET">  <b>01 </b> Destination</a>
    <a class="ONGLET"> <b>02 </b> Crew</a>
    <a class="ONGLET"> <b>03 </b> Technology</a>
</div>

</nav>



    <!-- Section principale -->
    <section id="SectionChoixDestination">

        <h1 id="TitreChoixDestination"> 01 Pick Your Destination </h1>

    <div id="EnglobeLigneDestination">
        <img src="assets/destination/image-mars.png" style="height: 300px;">
        

            <div id="ChoixPlanete" >
                <ul style="display: flex; color: white; font-family: Bellefair; width:20%; list-style-type:none; justify-content: space-around;">
                    <button id="marsBtn">Mars</button>
                    <button id="moonBtn">Moon</button>
                    <button id="europaBtn">Europa</button>
                    <button id="titanBtn">Titan</button>
                </ul>
            </div>

            <div>
                <p id="TextesousMARS" style="color: #ffffff;">
                    
                </p>
            </div>
    </div>

    </section>




</body>
</html>