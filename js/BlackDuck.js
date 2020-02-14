//============begginning of ramy code============
class BlackDuck{
    constructor(reward){ //reward is additional points depending on the difficulty of the game
        this.clicked=false;
        var s=$('<img class="BlackDuck Duck" src="images/BlackDuck.gif" alt="" draggable="false">')
        $(s).css({'left':"-100px",'position':'absolute','top':Math.random()*60+"%"})
        $("#game").append(s);
        $(s).on('click',function(){
            if(!this.clicked){  //if the image is not clicked yet .. modify scores then change the image source and change the direction of animation to down
                $("#totalscore").text((parseInt)($("#totalscore").text())-10-reward)  //total score is the account score of all games
                $("#bestscore").text((parseInt)($("#bestscore").text())-10-reward)     //best score is the best one match score
                $("#myscore").text((parseInt)($("#myscore").text())-10-reward)          //this current game score
            }
            this.clicked=true;
            $(s).attr('src',"images/deadBlack.png")
            $(s).stop()
            $(s).animate({top:"80"+"%"},1000,"easeOutBounce")
        })
        return $(s)
    }
}
//============ending of ramy code============





//============begginning of haidy code============
class GBird
{
    constructor(reward){
    this.bird = document.createElement('img');
    this.bird.src="images/gold.gif";
    this.clicked=false;
    this.bird.style.top=Math.random()*60+'%';
    this.bird.style.left=-100+"px";
    this.bird.classList.add("Duck");
    this.bird.setAttribute("draggable","false")
    this.bird.style.position = 'absolute';
    document.querySelector("#game").appendChild(this.bird);
    $(this.bird).on('click',function(){
        if(!this.clicked){
            $("#totalscore").text((parseInt)($("#totalscore").text())+20+reward) 
            $("#bestscore").text((parseInt)($("#bestscore").text())+20+reward) 
            $("#myscore").text((parseInt)($("#myscore").text())+20+reward) 
        }
        this.clicked=true;
        $(this).attr('src',"images/deadGold.png")
        $(this).stop()
        $(this).animate({top:"80"+"%"},1000,"easeOutBounce")
    })
    return $(this.bird);
    }
}
//============ending of haidy code============



//============begginning of Atef code============
class WhiteDuck {
    constructor(reward) {
        this.duckBody = $("<img/>");
        this.duckBody.attr("src", "images/red.gif");
        this.duckBody.css({"top":Math.random() * 60+"%","left":"-100px","position":"absolute"});
        this.duckBody.addClass("DuckImg");
        this.duckBody.addClass("Duck");
        this.clicked=false;
        $("#game").append(this.duckBody);
        $(this.duckBody).on('click',function(){
            if(!this.clicked){
                $("#totalscore").text((parseInt)($("#totalscore").text())+5+reward) 
                $("#bestscore").text((parseInt)($("#bestscore").text())+5+reward)
                $("#myscore").text((parseInt)($("#myscore").text())+5+reward)
            }
            this.clicked=true;
            $(this).attr('src',"images/deadRed.png")
            $(this).stop()
            $(this).animate({top:"80"+"%"},1000,"easeOutBounce")
        })
        return this.duckBody;
    }
    
}
class Bomb {
    constructor(left1) {
        var bounds = $('<div id="bounds"><img src="images/bomb.png" class="BombImg"/></div>');
        $(bounds).css("left", left1);
        $("body").append($(bounds));
        $(bounds).animate({ top: "100" }, 3000);   
        let score = 0;
        $(bounds).on("click", "img", function(){
            $(this).attr("src", "images/bombs.gif").hide(2000);
            let elev = parseInt($("#background").css("height")) - 120 + 50;
            for(var i=0; i<$(".Duck").length; i++){
                var duck1=$($(".Duck")[i]);
                let left2 = left1 + parseInt($(bounds).css("width"));
                let top1 = parseInt($(bounds).css("top"));
                let top2 = top1 + parseInt($(bounds).css("height"));
                if (parseInt(duck1.css("left")) > left1 - 80 && parseInt(duck1.css("left")) < left2) {
                if (parseInt(duck1.css("top")) > top1 - 80 && parseInt(duck1.css("top")) < top2) {
                    duck1.trigger("click");
                }
            }
        }   
        });
        return $(bounds);
    }
}
//============ending of Atef code============

export {BlackDuck ,GBird ,WhiteDuck,Bomb};

