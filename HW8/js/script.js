var imgSelector = "#image";
var descriptionSelector = "#description";
var titleSelector = "#title";
var shapeSelector = ".shape";
var imageArray = new Array();
var titleArray = new Array("Fun with Shapes and Images!", "The Right Shape at the Right Time!", "Beauty is in the Eye of the Beholder!", "The Glory of God!", "The Urge to Roam!", "Keep Your Head in the Clouds!");
var index = 1;

class myImage{
    constructor(image, imagePath, description)
    {
        this.image = image;
        this.imagePath = imagePath;
        this.description = description
    }

    get theImage(){
        return this.image;
    }

    get theImagePath(){
        return this.imagePath;
    }
    
    get imageInfo(){
        return this.description;
    }

    toString()
    {
        return this.image + ": " + this.imagePath + this.description + ": "; 
    }
}

//add images to array
function fillArray()
{
    imageArray.push(new myImage("#image", "imgs/oceanside.jpg", "An oceanside as the sun rises over the horizon in the east side of Ireland."));
    imageArray.push(new myImage("#image", "imgs/mountaincove.jpg", "A watery cove encapsulated by the surround mountain."));
    imageArray.push(new myImage("#image", "imgs/mountainsnrays.jpg", "A hidden valley inside a mountainous area as the sun sets below the mountain peak."));
    imageArray.push(new myImage("#image", "imgs/mountainsidenrays.jpg", "The west side of a mountain range during sunset near the Oregon coast."));
    imageArray.push(new myImage("#image", "imgs/lakeside.jpg", "On a spring day on the rocky edge of a hidden lake. Optical illusions adds dynamic to the photo."));
    imageArray.push(new myImage("#image", "imgs/riverside.jpg", "A forest hiding a raging stream on a cool, cloudy, early fall day."));
    imageArray.push(new myImage("#image", "imgs/waterfall.jpg", "A magical waterfall cascading in the forests of Asia."));

}

$(document).ready(function () {
    fillArray();
    updateImage(index);
    rotateTitle();

    $("button").click(function () {
        index = (index + 1) % imageArray.length;

        $("#image").fadeOut(function () {
            updateImage(index);
            $(this).attr("src", imageArray[index].theImagePath).fadeIn();
        });

        $(descriptionSelector).fadeOut(function () {
            $(this).text(imageArray[index].imageInfo).fadeIn("slow");
        });
        rotateTitle();
        setInterval(rotateTitle, 50);
        setInterval(moveShapes, 500);
    });
});

function updateImage(index) {
    var currentImage = imageArray[index];
    $(imgSelector).attr("src", currentImage.theImagePath);
    console.log(currentImage.description);
}

function updateImage(index) {
    var currentImage = imageArray[index];
    $(imgSelector).attr("src", currentImage.theImagePath);
    $(descriptionSelector).text(currentImage.imageInfo); 
    console.log(currentImage.description);
}

function moveShapes()
{
    $("#rectangle").animate({left:250}).animate({top:200}).animate({left:650}).animate({top:800}).animate({left:1000}).animate({top:200}).animate({left:250}).animate({top:800});
    $("#circle2").animate({left:450}).animate({top:100}).animate({left:300}).animate({top:800}).animate({left:1000}).animate({top:200}).animate({left:250}).animate({top:800});
    $("#circle3").animate({left:1650}).animate({top:600}).animate({left:650}).animate({top:700}).animate({left:1000}).animate({top:200}).animate({left:250}).animate({top:800});
}

function rotateTitle () {
    var randomIndex = Math.floor(Math.random() * titleArray.length);
    var randomTitle = titleArray[randomIndex];
    
    $(titleSelector).fadeOut(function () {
        $(this).text(randomTitle).fadeIn("slow");
    });
}