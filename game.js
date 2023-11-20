var gamePattern=[];

var userClickedPattern = [];

var started=false;

var buttonColours=["red","blue","green","yellow"];

var level=0;

$(".btn").click(function() {

    var userChosenColour=$(this).attr("id");

    

    userClickedPattern.push(userChosenColour);


    console.log(userClickedPattern);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    
    checkAnswer(userClickedPattern.length-1);

})


$(document).on("keypress",function(event) {

    if(!started){
        $("#level-title").text("Level"+level);
        nextSequence();
        started=true;

    }

    

})


function startOver(){
    started=false;
    gamePattern=[];

    level=0;

}


function checkAnswer(currentLevel){

    

    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){

        console.log("success");


        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);

        }

        //

    }

    else {

        var audio=new Audio("sounds/wrong.mp3");
        audio.play();


        $("h1").text("Game Over, Press Any Key to Restart");


        $("body").addClass("game-over");


        setTimeout(function(){
            $("body").removeClass("game-over");
    
        },200);

        startOver();

        console.log("wrong");
    }


   

}


function nextSequence(){

    userClickedPattern = [];


    level++;

    $("#level-title").text("Level "+level);

    var randomNumber=Math.floor(Math.random()*4);

    var randomChosenColour=buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    

    
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    

    
    
}


function playSound(name){

    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();

}


function animatePress(currentColour){

    $("."+currentColour).addClass("pressed");

    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");

    },100);


}

$(".Show").click(function() {
    $("#Rules").toggle();
})









