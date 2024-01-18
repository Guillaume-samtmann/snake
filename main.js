const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');
const over = document.querySelector(".perdu");
const reloadButton = document.getElementById('reloadButton');
let eatAudio = new Audio ("son/apple_eat.mp4");
let gameOver = new Audio ("son/gameOver.mp3");




reloadButton.addEventListener('click', function(event) {
    
    event.preventDefault(); // Empêche le comportement par défaut du lien
    
    // Recharge la page
    location.reload();
});


let box = 20;


let snake = []; 
snake[0] = {x : 10*box, y: 10*box}

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

let score = 0

let d 


var imgSnake = new Image();
imgSnake.src = 'image/snake.png';

var imgApple = new Image();
imgApple.src = 'image/apple.png';

let rotationAngle = 0;



function direction(event){
    let key = event.keyCode;
    if(key == 37 && d != "RIGHT"){//le chiffre 37 est égale au code de la touche fléche de gauche
        d= "LEFT";
        if (d === "LEFT") {
            rotateSnakeImageLeft(); // Appel de la fonction pour la rotation vers la gauche
        }
    }else if (key == 38 && d != "DOWN"){
        d = "UP";
        if (d === "UP") {
            rotateSnakeImageUp(); // Appel de la fonction pour la rotation vers la gauche
        }
    }else if (key == 39 && d != "LEFT"){
        d = "RIGHT";
        if (d === "RIGHT") {
            rotateSnakeImageRight(); // Appel de la fonction pour la rotation vers la gauche
        }
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
        if (d === "DOWN") {
            rotateSnakeImageDown(); // Appel de la fonction pour la rotation vers la gauche
        }
    }
}

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    


    for (let i = 0; i < snake.length; i++) {
        if (i === 0) {
            context.save(); // Sauvegarder le contexte actuel
            context.translate(snake[i].x + box / 2, snake[i].y + box / 2); // Placer au centre de l'image
            context.rotate(rotationAngle * Math.PI / 180); // Faire la rotation (180 pour une rotation de 180 degrés)
            context.drawImage(imgSnake, -box / 2, -box / 2, box, box); // Dessiner l'image
            context.restore(); // Restaurer le contexte précédent

        } else {
            context.fillStyle = "green";
            context.fillRect(snake[i].x, snake[i].y, box, box);
            // context.save(); //
            // context.translate(snake[i].x + box / 2, snake[i].y + box / 2); 
            // context.rotate(rotationAngle * Math.PI / 180);
            // context.drawImage(imgBody, -box / 2, -box / 3, box, box);
            // context.restore(); // Restaurer le contexte précédent
        }
    }

    context.drawImage(imgApple, food.x, food.y, box, box);

    let snakeX = snake[0].x
    let snakeY = snake[0].y



    if (d == "LEFT")snakeX -= box;
    if(d == "UP") snakeY -= box;
    if(d == "RIGHT") snakeX += box;
    if(d == "DOWN") snakeY += box;

    if(snakeX == food.x && snakeY == food.y){
        score++;
        eatAudio.play();
        food= {
            x: Math.floor(Math.random() * 15 + 1) * box,
            y: Math.floor(Math.random() * 15 + 1) * box
        }
    } else {
        snake.pop()
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    if(snakeX < 0 || snakeY < 0 || snakeX > 19*box || snakeY > 19*box || collision(newHead, snake)){
        endGame();
       
        
    }

    snake.unshift(newHead);

    document.getElementById('score').textContent = score;
    /* context.fillStyle = "red"
    context.font = "30px Arial"
    context.fillText(score, 2*box, 2*box) */

    

}

function endGame() {
    clearInterval(game);
    over.style.display = 'flex';

    const scoreTotalElement = document.getElementById('scoreTotal');
    scoreTotalElement.textContent = score;

    gameOver.play();  
}

let lastRotation = '';

function rotateSnakeImageLeft() {
    if (lastRotation === 'left') {
        rotationAngle -= 90; // Changer l'angle de rotation de 90 degrés vers la gauche
        
    } else {
        rotationAngle = -270; // Rotation initiale si la dernière rotation n'était pas à gauche
    }
    lastRotation = 'left'; // Mettre à jour la dernière rotation effectuée
    // Redessiner le canvas après avoir modifié l'angle de rotation
    draw();
}

function rotateSnakeImageUp() {
    if (lastRotation === 'left') {
        rotationAngle = 180; // Si la dernière rotation était à gauche, réinitialiser à 0 (rotation initiale)
    }else if (lastRotation === 'right') {
        rotationAngle = -180; // Si la dernière rotation était à gauche, réinitialiser à 0 (rotation initiale)
    } else {
        rotationAngle -= 180; // Changer l'angle de rotation de 180 degrés
        
    }
    lastRotation = 'up'; // Mettre à jour la dernière rotation effectuée
    // Redessiner le canvas après avoir modifié l'angle de rotation
    draw();
}

function rotateSnakeImageRight() {
    if (lastRotation === 'left') {
        rotationAngle -= 90; // Changer l'angle de rotation de 90 degrés vers la gauche
        
    } else {
        rotationAngle = 270; // Rotation initiale si la dernière rotation n'était pas à gauche
    }
    lastRotation = 'right'; // Mettre à jour la dernière rotation effectuée
    // Redessiner le canvas après avoir modifié l'angle de rotation
    draw();
}

function rotateSnakeImageDown() {
    if (lastRotation === 'left') {
        rotationAngle -= 90; // Changer l'angle de rotation vers le bas à 0 degrés
    } else {
        rotationAngle = 0; // Rotation initiale si la dernière rotation n'était pas à gauche
    }
    lastRotation = 'down'; // Mettre à jour la dernière rotation effectuée
    // Redessiner le canvas après avoir modifié l'angle de rotation
    draw();
}

function collision(head, array){
    for(let g = 0; g < array.length; g++){
        if(head.x == array[g].x && head.y == array[g].y){
            return true;
        }
    }
    return false
}

document.addEventListener("keydown", direction);
rotateSnakeImageLeft();
rotateSnakeImageUp();
rotateSnakeImageRight();
rotateSnakeImageDown();
   
   
let game = setInterval(draw, 110)