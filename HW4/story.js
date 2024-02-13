//Fuctions and DOM document accessing 
let name = prompt("Enter your name, Adventurer!");
let turnCount = 0; //turn count, or length of path

function incrementTurnCountBy(turns) {
    for (let i = 0; i < turns; i++) {
        turnCount++;
    }
}

//displaying the turn count
function displayTurnCountInHTML() {
    const turnCountDisplay = document.getElementById("turnCountDisplay");
    turnCountDisplay.innerHTML = "Congratulations, " + name + "! " + `It took you ${turnCount} turns to find your family. Nice job!`;
}

//showing the turn count at the end of the journey
function showTurnCount() {
    
    displayTurnCountInHTML();
}




//begin of journey
function selectOption1()
{
    var choice1 = document.getElementById("option1").value;
    var question = document.getElementById("question");
    incrementTurnCountBy(1); //increment turn counter

    if (choice1 === "Yes"){ 
        console.log("decided to start the journey."); 
        
        document.getElementById("option1").style.display="none";
        document.getElementById("btnSubmit").style.display="none";
        
        document.getElementById("option2").style.display="block";
        document.getElementById("btnSubmit2").style.display="block";

        question.innerHTML = "Hello " + name + "! " + "You start towards the setting sun looking for anything familiar. You see foot prints in the mud to your left and what looks like the beginning of a trail to your right. Which way do you turn, " + name + "? " +  "Towards the muddy footprints or the trail?";
    
    } else if (choice1 === "No") { 
        console.log("decided to stay put"); 
    
        document.getElementById("option1").style.display="none";
        document.getElementById("btnSubmit").style.display="none";
        
        document.getElementById("option3").style.display="block";
        document.getElementById("btnSubmit3").style.display="block";

        question.innerHTML = "You decide to sit down on a nearby log and find your bearings. You look up in the sky and see birds circling to the east. Do you go towards to flock?";

    }else{
        question.innerHTML = "Answer not recognized."
    }
}
//footprints or trail
function selectOption2(){
        var choice2 = document.getElementById("option2").value;
        var question = document.getElementById("question");
        incrementTurnCountBy(1); //add to turn count

    if (choice2 === "Footprints"){ 
        console.log("Followed the footprints");
        document.body.style.backgroundImage = "url('footprints.jpg')";
        
        document.getElementById("option2").style.display="none";
        document.getElementById("btnSubmit2").style.display="none";
           
        document.getElementById("option4").style.display="block";
        document.getElementById("btnSubmit4").style.display="block";
    
        question.innerHTML = "You begin to follow the footsteps in the mud. You notice that the steps are leading up the mountain. You begin to worry you are going in the wrong direction. Do you continue up the mountain or turn back towards the trail?";
                    
        
    } else if (choice2 === "Trail") {
        console.log("Followed the trail"); 
        document.body.style.backgroundImage = "url('trail1.jpg')";

        document.getElementById("option2").style.display="none";
        document.getElementById("btnSubmit2").style.display="none";
            
        document.getElementById("option5").style.display="block";
        document.getElementById("btnSubmit5").style.display="block";
    
        question.innerHTML = "You head towards the trail and begin trekking through the forest. You see birds circling over the trees further down the path. You start to wonder what could be attracting them. Suddenly, you see movement out the corner of your eye. Do you continue on the path towards the birds, " +name+ ", "+  "or do you investigate the movement in the forest?";
            
    
    }else{
        question.innerHTML = "Answer not recognized."
        }
}
//birds or no birds
function selectOption3(){
    var choice3 = document.getElementById("option3").value;
    var question = document.getElementById("question");
    incrementTurnCountBy(1); // add to turn count

     if (choice3 == "Yes"){
        console.log("Following the birds");
        document.body.style.backgroundImage = "url('birds.jpg')";
        
        document.getElementById("option3").style.display="none";
        document.getElementById("btnSubmit3").style.display="none";
        
        document.getElementById("option6").style.display="block";
        document.getElementById("btnSubmit6").style.display="block";


        question.innerHTML = "You come upon an abandon cabin. The cabin is surrounded by tall brush and a fallen tree appears to be crushing the southern wall. Thunder begins to crack and it starts to rain buckets down on you. Do you go inside the cabin?";

    }else if (choice3 == "No"){
        console.log("Avoided the birds");
        document.body.style.backgroundImage = "url('sat-phone.jpg')";
        
        document.getElementById("option3").style.display="none";
        document.getElementById("btnSubmit3").style.display="none";
        
        question.innerHTML = "You decided to stay where you are and wait for your family to find you. You hear beeping coming from your bag. You dig through your pack and find a satellite phone. The beeping starts to get more frequent and suddenly your family appears from around the brush. " +  "'" + name + ", " + "where have you been? ' They cheered. 'We are so glad we found you safe and sound!'";
        showTurnCount(); //display total number of turns

    }else{
        question.innerHTML = "Answer not recognized."
        }
    
}
//Cabin or Rain
function selectOption6(){
    var choice16 = document.getElementById("option6").value;
    var question = document.getElementById("question");
    incrementTurnCountBy(1); //increment turn counter

if (choice16 === "Yes"){
    console.log("Went inside the cabin");
    document.body.style.backgroundImage = "url('cabin.jpg')";
    
    document.getElementById("option6").style.display="none";
    document.getElementById("btnSubmit6").style.display="none";

    question.innerHTML = "You grab a flashlight from your pack, open the door, and walk inside. " + " " + " ' " + name + ", is that you?' says a voice in the corner. You bring the light to the corner of the room and there is your family huddled in the corner. Hurray, you found them!";
    showTurnCount(); //display turn count

}else if(choice16 === "No"){
    console.log("Rain Dance");
    document.body.style.backgroundImage = "url('lightning.jpg')";
    
    document.getElementById("option6").style.display="none";
    document.getElementById("btnSubmit6").style.display="none";
    
    question.innerHTML = "You decide to take your chances in the rain. The lightning quickens and the thunder booms above your head. As you look up at the flicker of light, a bolt of lightning strikes the tree in front of you. Frozen in fear, you are unable to move before the tree falls, crushing you.";

}else{
    question.innerHTML = "Answer not recognized."
}
}
//Mountain or trail
function selectOption4(){
    var choice4 = document.getElementById("option4").value;
    var question = document.getElementById("question");
    incrementTurnCountBy(1); // add to turn count

if (choice4 === "Mountain"){ 
    console.log("Went up the mountain");
    document.body.style.backgroundImage = "url('dark-forest.jpg')";

    document.getElementById("option4").style.display="none";
    document.getElementById("btnSubmit4").style.display="none";
    
    question.innerHTML = "You head up the mountain and the sun disappears. Oh no, "+name+ "! " + "You hear a deep voice in the distance 'You should have turned back when you had the chance.' Out of nowhere something hits you in the head and knocks you unconscious.";

} else if (choice4 === "Trail") {
    console.log("Followed the trail"); 
    document.body.style.backgroundImage = "url('trail1.jpg')";

    document.getElementById("option4").style.display="none";
    document.getElementById("btnSubmit4").style.display="none";
        
    document.getElementById("option5").style.display="block";
    document.getElementById("btnSubmit5").style.display="block";

    question.innerHTML = "You head towards the trail and begin trekking through the forest. You see birds circling over the trees further down the path. You start to wonder what could be attracting them. Suddenly, you see movement out the corner of your eye. Do you continue on the path towards the birds, " +name+ ", " + "or do you investigate the movement in the forest?";
        
}else{
    question.innerHTML = "Answer not recognized."
    }
}
//Birds or movement
function selectOption5() {
    var choice5 = document.getElementById("option5").value;
    var question = document.getElementById("question");
    incrementTurnCountBy(1); //increment turn count

    if (choice5 === "Movement"){
        console.log("Follow random movement.");
        document.body.style.backgroundImage = "url('movement-forest.jpg')";
        
        document.getElementById("option5").style.display="none";
        document.getElementById("btnSubmit5").style.display="none";
    
        question.innerHTML = "You start walking towards the flicker of movement and discover a clearing. You survey the area and spot a deer leaving the clearing. Must have been the movement you saw, but now you have no idea what direction you came from. Getting lost deeper in the forest."; 

    }else if (choice5 == "Birds"){
        console.log("Following the birds");
        document.body.style.backgroundImage = "url('birds.jpg')";
        
        document.getElementById("option5").style.display="none";
        document.getElementById("btnSubmit5").style.display="none";
        
        document.getElementById("option8").style.display="block";
        document.getElementById("btnSubmit8").style.display="block";


        question.innerHTML = "You come upon an abandon cabin. The cabin is surrounded by tall brush and a fallen tree appears to be crushing the southern wall. Thunder begins to crack and it starts to rain buckets down on you. Do you go inside the cabin?";

    }
}
//Cabin or rain
function selectOption8() {
    var choice6 = document.getElementById("option8").value;
    var question = document.getElementById("question");
    incrementTurnCountBy(1); // increment turn counter
    
    if (choice6 === "Yes") {
        console.log("Went inside the cabin");
        document.body.style.backgroundImage = "url('cabin.jpg')";
    
        document.getElementById("option8").style.display = "none";
        document.getElementById("btnSubmit8").style.display = "none";
    
        document.getElementById("option9").style.display = "block";
        document.getElementById("btnSubmit9").style.display = "block";
    
        question.innerHTML = "As you step inside the cabin, the air feels heavy. Suddenly, a mysterious figure emerges from the shadows. 'Greetings, " + name + ". I've been expecting you,' the stranger says. They seem to know about your predicament. Do you trust the stranger and ask for help?";

    } else if (choice6 === "No") {
        console.log("Rain Dance");
        document.body.style.backgroundImage = "url('lightning.jpg')";
    
        document.getElementById("option8").style.display = "none";
        document.getElementById("btnSubmit8").style.display = "none";

        question.innerHTML = "You decide to take your chances in the rain. The lightning quickens, and the thunder booms above your head. As you look up at the flicker of light, a bolt of lightning strikes the tree in front of you. Frozen in fear, you are unable to move before the tree falls, crushing you.";
       
    } else {
        question.innerHTML = "Answer not recognized."
    }
} 
// strangers help
function selectOption9() {
    var choice9 = document.getElementById("option9").value;
    var question = document.getElementById("question");
    incrementTurnCountBy(1); // add to counter
    
    if (choice9 === "Help") {
        console.log("Asked the stranger for help");
        document.body.style.backgroundImage = "url('stranger.jpg')";
   
        document.getElementById("option9").style.display = "none";
        document.getElementById("btnSubmit9").style.display = "none";
              
        document.getElementById("option10").style.display = "block";
        document.getElementById("btnSubmit10").style.display = "block";
    
        question.innerHTML = "The stranger offers their assistance and provides you with a mysterious map. They mention that your family is beyond the enchanted forest. Do you follow the map to find them?";
    } else if (choice9 === "No") {
        console.log("Declined the stranger's help, Rain Dance");
        document.body.style.backgroundImage = "url('lightning.jpg')";
    
        document.getElementById("option9").style.display = "none";
        document.getElementById("btnSubmit9").style.display = "none";
    
        question.innerHTML = "You decline to stranger's offer and decide to take your chances in the rain. The lightning quickens, and the thunder booms above your head. As you look up at the flicker of light, a bolt of lightning strikes the tree in front of you. Frozen in fear, you are unable to move before the tree falls, crushing you.";

    } else {
        question.innerHTML = "Answer not recognized."
    }
}
//Map or leave
function selectOption10() {
    var choice10 = document.getElementById("option10").value;
    var question = document.getElementById("question");
    incrementTurnCountBy(1); //add to counter
    
    if (choice10 === "Follow Map") {
        console.log("Followed the mysterious map");
        document.body.style.backgroundImage = "url('map.jpg')";
    
        document.getElementById("option10").style.display = "none";
        document.getElementById("btnSubmit10").style.display = "none";
    
        question.innerHTML = "Following the mysterious map, you navigate through the enchanted forest. As you journey deeper, you hear familiar voices. Your family emerges from the trees, and you're joyfully reunited!" + " '" + name + ", " + "we are so happy to see you!'";
        showTurnCount(); // display counter
        
    } else if (choice10 === "Leave") {
        console.log("Ignored the mysterious map");
        document.body.style.backgroundImage = "url('dark-forest.jpg')";
    
        document.getElementById("option10").style.display = "none";
        document.getElementById("btnSubmit10").style.display = "none";
    
        question.innerHTML = "You decide to ignore the mysterious map and forge your own path. Unfortunately, this leads you deeper into the enchanted forest, making the journey more complex. Your family remains elusive and darkness falls.";
        
    } else {
        question.innerHTML = "Answer not recognized."
    }
}
