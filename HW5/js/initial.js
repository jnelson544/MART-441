
var imageChoice = ["Card1", "Card2", "Card3", "Card4", "Card5", "Card6", "Card7", "Card8", "Card9", "Card10", "Card11", "Card12"];

var cardBack = "../images/BlankCard.jpg";

var imageArray = new Array(); 

function RandomizedImages()
{
    var trueImages = ["../images/africa1.jpg", "../images/city1.jpg", "../images/forest1.jpg", "../images/greece1.jpg", "../images/ocean1.jpg", "../images/rome1.jpg"]
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

function swapImage(number)
{
    document.getElementById(imageChoice[number]).src= imageArray[number];    
}