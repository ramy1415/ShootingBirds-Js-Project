import { BlackDuck,GBird,WhiteDuck} from './BlackDuck.js';
//ramy
$(function(){
    var diff=sessionStorage.getItem("difficulty")*12
    generateBlackDucks(60000)
    $('#myscore').text("0");
    $('#myname').text(sessionStorage.getItem("name"));
    $('#mydiff').text(diff);
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
    function generateBlackDucks(minimumTime=0){
        if(minimumTime==0){return}
        for(var i=0;i<3;i++){
            //{left:($("#game").width()+20)+"px"}
            new BlackDuck(100,100).delay((Math.random()*5000)+minimumTime).animate({left:"2000px"},5000-diff)
            new GBird().delay((Math.random()*5000)+minimumTime).animate({left:"2000px"},5000-diff)
            new WhiteDuck().delay((Math.random()*5000)+minimumTime).animate({left:"2000px"},5000-diff)
        }
        generateBlackDucks(minimumTime-5000)
    }
    function gunSound(){
        var audio = document.createElement("audio");
        audio.src = "gun_fire.mp3";
        audio.play();
        new GBird().delay(1000).animate({left:"2000px"},5000-diff)
        audio.addEventListener("ended", function(e){
        }, false);
    }
})






