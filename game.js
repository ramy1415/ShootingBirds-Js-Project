import { BlackDuck,GBird,WhiteDuck,Bomb} from './BlackDuck.js';
//ramy
$(function(){
    var difficulty=sessionStorage.getItem("difficulty")*12
    $("#exampleModalCenter").modal('show')
    $('#myscore').text(0);
    $('#myname').text(sessionStorage.getItem("name"));
    $('#mydiff').text(difficulty);
    $("#StartGame").on('click',function(){
        StartGame();
    })
    $("#ReplayGame").on('click',function(){
        StartGame();
    })
})
    function StartGame(){
        startTimer();
        var difficultyReward=Math.floor(((parseInt)(sessionStorage.getItem("difficulty")))/10);
        var speed=(parseInt)(sessionStorage.getItem("difficulty")*12);
        $("#exampleModalCenter").modal('hide')
        $("#replayModel").modal('hide')
        $('#totalscore').text(localStorage.getItem(sessionStorage.getItem("name")));
        $('#bestscore').text(0);
        $('#myscore').text(0);
        generateDucks(60000,difficultyReward,speed)
        window.bomb=setInterval(function(){
            let bombExpectedLeft = Number.parseInt(Math.random() * 900) + 1;                
            new Bomb(bombExpectedLeft).delay(2000).hide(500);
            }, 6000);
        $("#game").animate({
            color: "purple",
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
    function generateDucks(minimumTime,difficultyReward,speed){
        if(minimumTime<=0){return}
        for(var i=0;i<2;i++){
            new BlackDuck(difficultyReward).delay((Math.random()*5000)+minimumTime).animate({left:"2000px"},9000-speed)
            new GBird(difficultyReward).delay((Math.random()*5000)+minimumTime).animate({left:"2000px"},9000-speed)
            new WhiteDuck(difficultyReward).delay((Math.random()*5000)+minimumTime).animate({left:"2000px"},9000-speed)
        }
        generateDucks((minimumTime-5000),difficultyReward,speed)
    }
    function gunSound(){
        var audio = document.createElement("audio");
        audio.src = "gun_fire.mp3";
        audio.play();
        audio.addEventListener("ended", function(e){
        }, false);
    }
    function startTimer(){
        var min = 0;
        var sec = 60;
        var timer = setInterval(function(){
            document.getElementById('timer').innerHTML = min + ':' + (sec < 10 ? '0' + sec : sec);
            sec -= 1;
            if(sec == 0){
                min -= 1;
                sec = 59;
            }
            if(min < 0){
                $(".Duck").finish()
                $(".Duck").remove()
                $(".moon").css("left","100%")
                $(".sun").css("left","100px")
                $("#game").css("background-color","rgb(129, 185, 215)")
                clearInterval(window.bomb)
                $("#replayModel").modal('show');
                clearInterval(timer);
                var score=(parseInt)($('#totalscore').text())
                var gameScore=(parseInt)($('#bestscore').text())
                var playerBestScore=(parseInt)(localStorage.getItem(sessionStorage.getItem("name")+"Best"))
                localStorage.setItem(sessionStorage.getItem("name"),score)
                if(gameScore>playerBestScore)
                    localStorage.setItem(sessionStorage.getItem("name")+"Best",$('#bestscore').text())
                $('#bestscore').text(localStorage.getItem(sessionStorage.getItem("name")+"Best"))
                $('#totalscore').text(localStorage.getItem(sessionStorage.getItem("name")))
            }
        }, 1000);
       }
    