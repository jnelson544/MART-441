//Fuctions and DOM document accessing 
let name = prompt("Enter your name, Adventurer!");
function storyTime(option)
{
    
    var yesCount = 0;
    var noCount = 0;
    var chose1 = document.getElementById("optionA").innerHTML;
    var chose2 = document.getElementById("optionB").innerHTML;

    if (option == 1 && chose1 == "Yes"){ 
        yesCount++;
        console.log("decided to start the journey."); 
        document.getElementById("question").innerHTML = "You start towards the setting sun looking for anything familiar. You see foot prints in the mud to your left and what looks like the beginning of a trail to your right. Which way do you turn?";
        document.getElementById("optionA").innerHTML = "Left towards footprints";
        document.getElementById("optionB").innerHTML = "Right towards trail";
    
    } else if (option == 2 && chose2 == "No") { 
        noCount++;
        console.log("decided to stay put"); 
        document.getElementById("question").innerHTML = "You decide to sit down on a nearby log and find your bearings. You look up in the sky and see birds circling to the east. Do you go towards to flock?";
        document.getElementById("optionA").innerHTML = "Yes, follow the birds";
        document.getElementById("optionB").innerHTML = "No, avoid poultry";
    
    } else if (option == 1 && chose1 == "Left towards footprints"){ 
        noCount++;
        console.log("Followed the footprints");
        document.body.style.backgroundImage = "url('footprints.jpg')";
        document.getElementById("question").innerHTML = "You begin to follow the footsteps in the mud. You notice that the steps are leading up the mountain. You begin to worry you are going in the wrong direction. Do you continue up the mountain or turn back towards the trail?";
        document.getElementById("optionA").innerHTML = "Up the Mountain.";
        document.getElementById("optionB").innerHTML = "Double back to the trail.";
    
    } else if ((option == 2 && chose2 == "Right towards trail") || (option == 2 && chose2 == "Double back to the trail.")){
        yesCount++;
        console.log("Followed the trail"); 
        document.body.style.backgroundImage = "url('trail1.jpg')";
        document.getElementById("question").innerHTML = "You head towards the trail and begin trekking through the forest. You see birds circling over the trees further down the path. You start to wonder what could be attracting them. Suddenly, you see movement out the corner of your eye. Do you continue on the path towards the birds or do you investigate the movement in the forest?";
        document.getElementById("optionA").innerHTML = "Investigate the movement.";
        document.getElementById("optionB").innerHTML = "Find the birds.";

    } else if ((option == 1 && chose1 == "Yes, follow the birds") || (option == 2 && chose2 == "Find the birds.")){
        yesCount++;
        console.log("Following the birds");
        document.body.style.backgroundImage = "url('birds.jpg')";
        document.getElementById("question").innerHTML = "You come upon an abandon cabin. The cabin is surrounded by tall brush and a fallen tree appears to be crushing the southern wall. Thunder begins to crack and it starts to rain buckets down on you. Do you go inside the cabin?";
        document.getElementById("optionA").innerHTML = "Inside the cabin sounds good.";
        document.getElementById("optionB").innerHTML = "Nope, its just a little rain.";

    } else if (option == 1 && chose1 == "Investigate the movement."){
        noCount++;
        console.log("Follow random movement.");
        document.body.style.backgroundImage = "url('movement-forest.jpg')";
        document.getElementById("question").innerHTML = "You start walking towards the flicker of movement and discover a clearing. You survey the area and spot a deer leaving the clearing. Must have been the movement you saw, but now you have no idea what direction you came from. Getting lost deeper in the forest.";
        document.getElementById("optionA").innerHTML = "Thanks for playing!";
        document.getElementById("optionB").innerHTML = "Try again next time.";     

    }else if (option == 2 && chose2 == "No, avoid poultry"){
        noCount++;
        console.log("Avoided the birds");
        document.body.style.backgroundImage = "url('sat-phone.jpg')";
        document.getElementById("question").innerHTML = "You decided to stay where you are and wait for your family to find you. You hear beeping coming from your bag. You dig through your pack and find a satellite phone. The beeping starts to get more frequent and suddenly your family appears from around the brush. They found you! Safe and Sound!";
        document.getElementById("optionA").innerHTML = "Thanks for playing!";
        document.getElementById("optionB").innerHTML = "Click Here to discover more endings!";
        
    } else if (option == 1 && chose1 == "Up the Mountain."){
        noCount++;
        console.log("Went up the mountain");
        document.body.style.backgroundImage = "url('dark-forest.jpg')";
        document.getElementById("question").innerHTML = "You head up the mountain and the sun disappears. You hear a deep voice in the distance 'You should have turned back when you had the chance.' Out of nowhere something hits you in the head and knocks you unconscious.";
        document.getElementById("optionA").innerHTML = "You made some bad choices.";
        document.getElementById("optionB").innerHTML = "Try again next time."; 

    } else if (option == 1 && chose1 == "Inside the cabin sounds good."){
        yesCount++;
        console.log("Went inside the cabin");
        document.body.style.backgroundImage = "url('cabin.jpg')";
        document.getElementById("question").innerHTML = "You grab a flashlight from your pack, open the door, and walk inside. " + " " + " ' " + name + ", is that you?' says a voice in the corner. You bring the light to the corner of the room and there is your family huddled in the corner. Hurray, you found them!";
        document.getElementById("optionA").innerHTML = "Thanks for playing!";
        document.getElementById("optionB").innerHTML = "Click Here to discover more endings!";

    } else if (option == 2 && chose2 == "Nope, its just a little rain."){
        noCount++;
        console.log("Rain Dance");
        document.body.style.backgroundImage = "url('lightning.jpg')";
        document.getElementById("question").innerHTML = "You decide to take your chances in the rain. The lightning quickens and the thunder booms above your head. As you look up at the flicker of light, a bolt of lightning strikes the tree in front of you. Frozen in fear, you are unable to move before the tree falls, crushing you.";
        document.getElementById("optionA").innerHTML = "You made some bad choices.";
        document.getElementById("optionB").innerHTML = "Try again next time.";
        

    } else if ((option == 1 && chose1 == "You made some bad choices.") || ( option == 2 && chose2 == "Try again next time.") || (option == 1 && chose1 == "Thanks for playing!") || (option == 2 && chose2 == "Click Here to discover more endings!")){
        console.log("Game Over");
        document.body.style.backgroundImage = "url('blue_flowers1366x768.jpg')";
        document.getElementById("question").innerHTML = "While out hiking with your family, you come across a rare flower. You stop to take some photos while your family continues on through the brush. Distracted by your floural discover, you loose track of your family. Now you must try and find your family, but be careful because it is getting dark. Don't want to be alone in the woods at night.";  
        document.getElementById("optionA").innerHTML = "Yes";
        document.getElementById("optionB").innerHTML = "No";
    } 
}  
