import { BlackDuck,GBird,WhiteDuck,Bomb} from './BlackDuck.js';
$(function(){
    $("#exampleModalCenter").modal('show')
    $('#myscore').text(0);
    $('#myname').text(sessionStorage.getItem("name"));
    $('#myreward').text("+ 0 points");
    $("#StartGame").on('click',function(){
        StartGame();
    })
    $("#ReplayGame").on('click',function(){
        StartGame();
    })
})
    function StartGame(){
        //============begginning of haidy code============
        startTimer();
        $("#replayModel").modal('hide')
        $("body").on('click',function(){
            gunSound();
            })
        //============end of haidy code============

        //============begginning of ramy code============
        var difficultyReward=Math.floor(((parseInt)(sessionStorage.getItem("difficulty")))/10);// amount of points to be added when clicking a duck depending on the difficulty
        var speed=(parseInt)(sessionStorage.getItem("difficulty")*12);// speed of the duck movement depending on the difficulty
        generateDucks(60000,difficultyReward,speed) //generating all ducks over 60 seconds , also passing the amount of reward points and speed of the animation
        $("#game").animate({    //change background to night over 30 sec
            backgroundColor: "rgb( 2, 28, 54 )"
          },30000);
        setTimeout(function(){ 
        $(".moon").delay(500).animate({left:"100px"},1000,"easeOutExpo")
        $(".sun").animate({left:"110%"},1000,"easeOutExpo")
        }, 30000);
        $("#exampleModalCenter").modal('hide')
        $('body').css("cursor",`url("${sessionStorage.getItem("crosshair")}")32 32,auto`);
        $('#myreward').text("+ "+difficultyReward+" points");
        $('#totalscore').text(localStorage.getItem(sessionStorage.getItem("name")));
        $('#bestscore').text(0);
        $('#myscore').text(0);
        $('#gamescore').text(0);
        //============end of ramy code============


        //============begginning of Atef code============
        window.bomb=setInterval(function(){ //generating a bomb every 6 seconds
            let bombExpectedLeft = Number.parseInt(Math.random() * 900) + 1;                
            new Bomb(bombExpectedLeft).delay(2000).hide(500);
            }, 6000);
        //============end of Atef code============
        
        
    }
    //============begginning of ramy code============
    function generateDucks(minimumTime,difficultyReward,speed){ //this function creates a 2 black/white/gold ducks every 5 seconds on a random time over 60 seconds 
        if(minimumTime<0){return}
        for(var i=0;i<2;i++){
            new BlackDuck(difficultyReward).delay((Math.random()*5000)+minimumTime).animate({left:"3000px"},7000-speed)
            new GBird(difficultyReward).delay((Math.random()*5000)+minimumTime).animate({left:"3000px"},7000-speed)
            new WhiteDuck(difficultyReward).delay((Math.random()*5000)+minimumTime).animate({left:"3000px"},7000-speed)
        }
        generateDucks((minimumTime-5000),difficultyReward,speed)
    }
    //============end of ramy code============

    //============begginning of haidy code============
    function gunSound(){//making gun sound on click
        var audio = document.createElement("audio");
        audio.src = "sounds/gun_fire.mp3";
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
                $("#replayModel").modal('show');
                clearInterval(timer);
                clearInterval(window.bomb)
                $(".Duck").finish()
                $(".Duck").remove()
                $(".moon").css("left","100%")
                $(".sun").css("left","100px")
                $("#game").css("background-color","rgb(129, 185, 215)")
                //============begginning of ramy code============
                var score=(parseInt)($('#totalscore').text())   //getting the account score of all games
                var gameScore=(parseInt)($('#bestscore').text())    //getting this game score
                var playerBestScore=(parseInt)(localStorage.getItem(sessionStorage.getItem("name")+"Best")) //getting the hiest score this player got in a game
                localStorage.setItem(sessionStorage.getItem("name"),score) //setting the new score in a local storage
                if(gameScore>playerBestScore) //setting the new high score
                    localStorage.setItem(sessionStorage.getItem("name")+"Best",$('#bestscore').text())  
                $('#bestscore').text(localStorage.getItem(sessionStorage.getItem("name")+"Best"))
                $('#totalscore').text(localStorage.getItem(sessionStorage.getItem("name")))
                $('#gamescore').text($('#myscore').text());
                $('body').css("cursor","inherit")
                //============end of ramy code============
            }
        }, 1000);
        //============end of haidy code============
       }