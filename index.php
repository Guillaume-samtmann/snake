<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<header>
        <h1>Mon jeu Snake</h1>
</header>
<main>
<div class="en-tete">
    <div class="affichScore">
        <span id="score">0</span>
        <img class="ScoreApple" src="image/apple.png" alt="">
    </div>
    <div >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-volume-up sound" viewBox="0 0 16 16">
        <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
        <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"/>
        </svg>
    </div>
</div>
<canvas width="400" height="400"></canvas>
<section class="perdu">
    <div class="contenu">
        <h1 class="titlteLose">Vous avez perdu</h1> 
        <p class="en-teteScore"><img class="ScoreTrphy" src="image/trophy.png" alt=""><span id="scoreTotal">0</span></p>   
    </div>
    <button id="reloadButton"><a href="#">Rejouer</a></button>
</section>

</main>
<footer>
    <p>Jeu vidéo réalisé par Guillaume SAMTMANN ©2024</p>
</footer>



<script src="main.js"></script>
    
</body>
</html>