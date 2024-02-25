
var imageChoice = ["Card1", "Card2", "Card3", "Card4", "Card5", "Card6", "Card7", "Card8", "Card9", "Card10", "Card11", "Card12"];

var cardBack = "images/BlankCard.jpg";

var imageArray = new Array(); 

var player = {"firstname":"", "lastname":"", "age":0, "attempts":0}
var number1 = -1;
var number2 = -1;
var attempts = 0;
var allmatches = 0;

function RandomizedImages()
{
    var trueImages = ["images/africa2.jpg", "images/city2.jpg", "images/forest1.jpg", "images/greece1.jpg", "images/ocean2.jpg", "images/rome1.jpg"]
    var count = [0,0,0,0,0,0];
    while(imageArray.length < 12)
    {
        var randomchoice = Math.floor(Math.random() * trueImages.length)
        if(count[randomchoice] < 2)
        {
            imageArray.push(trueImages[randomchoice]);
            count[randomchoice] = count[randomchoice] + 1;
        }
    }
}

function dealCards()
{
    RandomizedImages();
    console.log(imageArray); 
    for(var i = 0; i < imageChoice.length; i++)
    {
        document.getElementById(imageChoice[i]).src= cardBack;
    }
}

function defaultState()
{
    console.log(number1);
    document.getElementById(imageChoice[number1]).src = cardBack;
    document.getElementById(imageChoice[number2]).src = cardBack;
    number1 = -1;
    number2 = -1;
}

function swapImage(number)
{
    if (number1 >= 0)
    {
        number2 = number;
        document.getElementById(imageChoice[number2]).src = imageArray[number2];
    }else if(number1 < 0)
    {
        number1 = number;
        document.getElementById(imageChoice[number1]).src = imageArray[number1];
    }
    if (imageArray[number2] != imageArray[number1] && number1 >= 0 && number2 >=0)
    {
        attempts++;
        setTimeout(defaultState, 1000);
    }else if (imageArray[number2] == imageArray[number1] && number1 >= 0 && number2 >=0)
    {
        attempts++;
        allmatches++;
        number1 = -1;
        number2 = -1;

        if(allmatches == imageArray.length/2)
        {
            player.attempts = attempts;
            localStorage.setItem("currentPlayer", JSON.stringify(player));
            window.location = "end.html";
        }
    }
}

function tryAgain()
{
    window.location = "main.html";
}

function createPlayer()
{
    var fName = document.getElementById("Fname").value;
    var lName = document.getElementById("Lname").value;
    var age = document.getElementById("Age").value;

    console.log("fName: " + fName + "lName: " + lName)

    player.firstname = fName;
    player.lastname = lName;
    player.age = age;
    localStorage.setItem("currentPlayer", JSON.stringify(player));
    window.location = "index.html";
}

function currentPlayer()
{
    var thisPlayer = localStorage.getItem("currentPlayer");
    console.log(thisPlayer);
    if (thisPlayer !== null)
    {
        player = JSON.parse(thisPlayer);
        console.log(player);
        var finish = "Player info: " + "<br><br>" + player.firstname + " " + 
        player.lastname + "<br><br>" + player.age + " years old" + "<br><br>" + 
        "You made " + player.attempts + " total attempts. Nice Job! See if you can beat that score.";
    }else{
        console.error("No currentPlayer data was found.");
    }

    if(document.getElementById("totalScore") != null)
    {
        document.getElementById("totalScore").innerHTML = finish;
    }
    
}
