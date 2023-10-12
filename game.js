let r=Math.floor(Math.random()*4);
let arr=["green","red","yellow","blue"];
let col=arr[r];
let user=[];let bool=false;
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
