var canvas;
var ctx;
var x = 50;
var y = 50;
var x2 = 600;
var y2 = 400;
var score = 0;

var hero1, hero2, hero3, hero4, hero5, hero6;
var heroArray = [];
var coinArray = [];
var movement;


//use jquery for keypress events
$(document).ready(function(){
    
    setup();  
    
    $(this).keypress(function(event){
        getKey(event);
        
    });
});

function setup() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d');

    // heroes
    $.getJSON("data/hero.json", function(data) {
        for (var i = 0; i < data.superheroes.length; i++) {
            heroArray.push(new Super(data.superheroes[i].name, data.superheroes[i].secretIdentity, data.superheroes[i].powers, data.superheroes[i].outfit, data.superheroes[i].color, parseInt(data.superheroes[i].size), parseInt(data.superheroes[i].x), parseInt(data.superheroes[i].y), parseInt(data.superheroes[i].w), parseInt(data.superheroes[i].h)));
        }

        hero1 = heroArray[0];
        hero2 = heroArray[1];
        hero3 = heroArray[2];
        hero4 = heroArray[3];
        hero5 = heroArray[4];
        hero6 = heroArray[5];

      
    });

    // Load coins
    $.getJSON("data/coins.json", function(data) {
        data.coins.forEach(function(coinData) {
            
            var randomX = Math.floor(Math.random() * (canvas.width - coinData.radius * 2)) + coinData.radius;
            var randomY = Math.floor(Math.random() * (canvas.height - coinData.radius * 2)) + coinData.radius;

            var coinObj = new Coin(randomX, randomY, coinData.width, coinData.height, coinData.radius, coinData.collected); 
            coinArray.push(coinObj);
            
        });
        console.log(coinArray);
        
        drawSuper();
    });

}


function getKey(event) {
    
    //keypress movements 
    // console.log("Key pressed:", event.key);
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    // console.log("Actual letter:", actualLetter);

    var prevX = hero1.X;
    var prevY = hero1.Y;

    if (actualLetter == "w" || actualLetter == "W") {
        moveUp(hero1);
        // console.log("New Y position after moving up:", hero1.Y);
        movement = "up";
    } else if (actualLetter == "s" || actualLetter == "S") {
        moveDown(hero1);
        // console.log("New Y position after moving down:", hero1.Y);
        movement = "down";
    } else if (actualLetter == "a" || actualLetter == "A") {
        moveLeft(hero1);
        // console.log("New X position after moving left:", hero1.X);
        movement = "left";
    } else if (actualLetter == "d" || actualLetter == "D") {
        moveRight(hero1);
        // console.log("New X position after moving right:", hero1.X);
        movement = "right";
    }

    // Check coin collision
    checkCoinCollisions();
    
    //collision section
    var collisionOccurred = false;
    for (var i = 0; i < heroArray.length; i++) {
        if (hero1 !== heroArray[i] && hasCollided(hero1, heroArray[i])) {
            collisionOccurred = true;
            break;
        }
    }

    if (collisionOccurred || !isInsideCanvas(hero1)) {
        hero1.setX(prevX);
        hero1.setY(prevY);
    }

    drawSuper();
}

//movement functions
function moveUp(hero1)
{
    if (hero1.Y <= 0)
    {
        hero1.setY(0);
    } else
    {
        hero1.setY(hero1.Y - 10);
    }
}

function moveDown(hero1) 
{
    if (hero1.Y + hero1.Height >= canvas.height)
    {
        hero1.setY(canvas.height - hero1.Height);
    } else 
    {
        hero1.setY(hero1.Y + 10);
    }
}

function moveLeft(hero1)
{
    if (hero1.X <= 0)
    {
        hero1.setX(0);
    } else
    {
        hero1.setX(hero1.X - 10);
    }
}

function moveRight(hero1)
{
    if (hero1.X + hero1.Width >= canvas.width)
    {
        hero1.setX(canvas.width - hero1.Width);
    } else 
    {
        hero1.setX(hero1.X + 10);
    }
}

//collision function
function hasCollided(object1, object2) {
    return (
        object1.X < object2.X + object2.Width &&
        object1.X + object1.Width > object2.X &&
        object1.Y < object2.Y + object2.Height &&
        object1.Y + object1.Height > object2.Y
    );
}

 
function drawSuper()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);

    for(var i = 0; i < heroArray.length; i++)
    {
        ctx.fillStyle = heroArray[i].Color;
        ctx.fillRect(heroArray[i].X, heroArray[i].Y, heroArray[i].Width, heroArray[i].Height);

        ctx.fillStyle = "white";
        ctx.font = "55px Arial";
        ctx.textAlign = "center";
        ctx.fillText(heroArray[i].name, heroArray[i].x + (heroArray[i].w / 2), heroArray[i].y + (heroArray[i].h / 2));
        
    }  
    
    // Draw coins
    for (var j = 0; j < coinArray.length; j++) {
        if (!coinArray[j].collected) {
            ctx.fillStyle = "yellow";
            ctx.beginPath();
            ctx.arc(coinArray[j].getX(), coinArray[j].getY(), coinArray[j].getRadius(), 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }

}

function isInsideCanvas(object) {
    return object.X >= 0 && object.X + object.Width <= canvas.width &&
           object.Y >= 0 && object.Y + object.Height <= canvas.height;
}

function checkCoinCollisions() {
    for (var i = 0; i < coinArray.length; i++) {
        if (!coinArray[i].collected && hasCollided(hero1, coinArray[i])) {
            coinArray[i].setCollected(true);
            score++; 
            updateScoreDisplay(); 
            // console.log("Coin collected by hero1");

            coinArray.splice(i, 1);

            // console.log("Coin position:", coinArray[i].getX(), coinArray[i].getY());
            // console.log("Coin dimensions:", coinArray[i].getWidth(), coinArray[i].getHeight());
            // console.log("Coin array after collecting:", coinArray);
    
            break; 
        }
    }
}

function updateScoreDisplay() {
    ctx.fillStyle = "black";
    ctx.fillRect(canvas.width - 100, 10, 90, 30);
    
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, canvas.width - 50, 30);
}
