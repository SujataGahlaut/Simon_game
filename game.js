let r=Math.floor(Math.random()*4);
let arr=["green","red","yellow","blue"];
let col=arr[r];
let user=[];let bool=false;let level=0;
$("body").keypress(function(){
   if(!bool){
    document.getElementsByTagName("h1")[0].innerHTML="PLAYING";
    animate();
   }
})
$(".btn").click(function(){
    let u_choice=$(this).attr("id");
    user.push(u_choice,col)

    console.log(u_choice);
    console.log(col);
    
   if(bool){
        checkans(u_choice,col);
   }
})

function checkans(u_choice,col){
    if(u_choice===col){
       g_col();
       animate();
       
    }
    else{
        $("body").addClass("game-over");
        var audio=new Audio("wrong.mp3");
        audio.play();
        setTimeout(function () {
           
            $("body").removeClass("game-over");
        }, 200);
        bool=false;
        document.getElementsByTagName("h1")[0].innerHTML="Press Key to Start";
       
    }
}

function g_col()
{
    r=Math.floor(Math.random()*4);
    
    col=arr[r];
}
function animate(){
   
    
    bool=true;
       switch(col){
            case "green":
                $(".btn#green").animate({opacity:0.5});
                var audio=new Audio("green.mp3");
                audio.play();
                $(".btn#green").animate({opacity:1});
                break;
            case "red":
                $(".btn#red").animate({opacity:0.5});
                var audio=new Audio("red.mp3");
                audio.play();
                $(".btn#red").animate({opacity:1});
                break;
            case "yellow":
               $(".btn#yellow").animate({opacity:0.5});
                var audio=new Audio("yellow.mp3");
                audio.play();
                $(".btn#yellow").animate({opacity:1});
                break;
            case "blue":
               $(".btn#blue").animate({opacity:0.5});
                var audio=new Audio("blue.mp3");
                audio.play();
                $(".btn#blue").animate({opacity:1});
                break;
        }
        
        
   
}


// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });


// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

//       console.log("success");

//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }

//     } else {

//       console.log("wrong");

//       playSound("wrong");

//       $("body").addClass("game-over");
//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       //2. Call startOver() if the user gets the sequence wrong.
//       startOver();
//     }

// }

// function nextSequence() {

//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// //1. Create a new function called startOver().
// function startOver() {

//   //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
//   level = 0;
//   gamePattern = [];
//   started = false;

// }
