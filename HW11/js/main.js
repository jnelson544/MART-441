var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var x = 50;
var y = 50;
var x2 = 600;
var y2 = 400;

var rect1;
var rect2;

createRect();
drawRect();

setInterval(update, 3500);

function createRect()
{
    rect1 = new Shape(x,y,120,140,'blue');
    rect2 = new Shape(x2,y2,70,50,'purple');

}

//moves image autonomously
function update()
{
    rect2.setX(Math.max(0, Math.floor(Math.random() * 800 - rect2.w)));
    rect2.setY(Math.max(0, Math.floor(Math.random() * 600 - rect2.h)));
    drawRect(); 
}

//draw shapes
function drawRect()
{
    ctx.clearRect(0,0,800,600);
    rect1.drawShape();
    rect2.drawShape();
}

//use jquery for keypress events
$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    //collision section
    var collisonOccured = hasCollided(rect1,rect2);
    if (collisonOccured) 
    {
        canvas.style.backgroundColor = "rgb("+ Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        if (rect1.Width <= 10 || rect1.Height <= 10)
        {
            $('#myStatus').text('Too Many Collisons! Refresh Page!');
        }else
        {
            rect1.setWidth(rect1.Width - 5);
            rect1.setHeight(rect1.Height - 5);
        }
        if (rect2.Width >= 500 || rect2.Height >= 500)
        {
            $('#myStatus').text('Too Many Collisons! Refresh Page!'); 
        }else
        {
            rect2.setWidth(rect2.Width + 5);
            rect2.setHeight(rect2.Height + 5);
        }
    }
    
    drawRect();

    //keypress movements 
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w" || actualLetter == "W")
    {
        moveUp();
    }
    else if(actualLetter == "s" || actualLetter == "S")
    {
        moveDown();
    }
    else if(actualLetter == "a" || actualLetter == "A")
    {
        moveLeft();
    }
    else if(actualLetter == "d" || actualLetter == "D")
    {
        moveRight();
    }
    
}

//movement functions
function moveUp()
{
    
    if (rect1.y <= 0)
    {
        rect1.setY(0);
    }else
    {
        rect1.setY(rect1.Y-10);
    }
}

function moveDown() 
{
    if (rect1.y + rect1.h >= 600)
    {
        rect1.setY(600 - rect1.h);
    } else 
    {
        rect1.setY(rect1.y + 10);
    }
}

function moveLeft()
{
    if (rect1.x <= 0)
    {
        rect1.setX(0);
    }else
    {
        rect1.setX(rect1.X-10);
    }
}

function moveRight()
{
    if (rect1.x + rect1.w >= 800)
    {
        rect1.setX(800 - rect1.w);
    } else 
    {
        rect1.setX(rect1.X + 10);
    }
}

//collision function
function hasCollided(object1, object2) {
    return !(
        (object1.y + object1.h < object2.y) ||
        (object1.y > object2.y + object2.h) ||
        (object1.x + object1.w < object2.x) ||
        (object1.x > object2.x + object2.w)
    );
}