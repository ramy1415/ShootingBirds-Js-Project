import { BlackDuck,GBird,WhiteDuck} from './BlackDuck.js';
//ramy
$(function(){
    var difficulty=sessionStorage.getItem("difficulty")*12
    $("#exampleModalCenter").modal('show')
    $('#myscore').text("0");
    $('#myname').text(sessionStorage.getItem("name"));
    $('#mydiff').text(difficulty);
    $("#StartGame").on('click',function(){
        StartGame();
    })
})
    function StartGame(){
        $("#exampleModalCenter").modal('hide')
        generateBlackDucks(60000)
        $("#game").animate({
            color: "yellow",
            backgroundColor: "rgb( 2, 28, 54 )"
          },30000);
        $("body").on('click',function(){
            gunSound();
            })
        setTimeout(function(){ 
            $(".moon").delay(500).animate({left:"100px"},1000,"easeOutExpo")
            $(".sun").animate({left:"110%"},1000,"easeOutExpo")
        }, 30000);
    }
    function generateBlackDucks(minimumTime=0){
        if(minimumTime==0){return}
        var difficulty=sessionStorage.getItem("difficulty")*12;
        for(var i=0;i<3;i++){
            new BlackDuck(100,100).delay((Math.random()*5000)+minimumTime).animate({left:"2000px"},9000-difficulty)
            new GBird().delay((Math.random()*5000)+minimumTime).animate({left:"2000px"},9000-difficulty)
            new WhiteDuck().delay((Math.random()*5000)+minimumTime).animate({left:"2000px"},9000-difficulty)
        }
        generateBlackDucks(minimumTime-5000)
    }
    function gunSound(){
        var audio = document.createElement("audio");
        audio.src = "gun_fire.mp3";
        audio.play();
        audio.addEventListener("ended", function(e){
        }, false);
    }





