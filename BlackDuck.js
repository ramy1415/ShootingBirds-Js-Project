class BlackDuck{
    constructor(speed,place){
        this.speed=speed;
        this.place=place;
        this.clicked=false;
        var s=$('<img class="BlackDuck" src="images/BlackDuck.gif" alt="" draggable="false">')
        $(s).css({'left':"-200px",'position':'absolute','top':Math.random()*400+"px"})
        $("#game").append(s);
        $(s).on('click',function(){
            if(!this.clicked){
                $("#myscore").text((parseInt)($("#myscore").text())+1) 
            }
            this.clicked=true;
            $(s).stop()
            $(s).animate({top:"80"+"%"},1000,"easeOutBounce")
        })
        return $(s)
    }
}

//haidy


class GBird
{
    constructor(){
    this.bird = document.createElement('img');
    this.bird.src="images/1.jpg";
    this.clicked=false;
    // this.bird.style.top=Top+"px";
    // this.bird.style.left=Left+"px";
    this.bird.style.top=Math.random()*400+'px';
    this.bird.style.left=-90+"px";
    this.bird.style.width= 100;
    this.bird.style.height= 100;
    // this.bird.Speed= 50="px";
    this.bird.style.position = 'absolute';
    document.querySelector("#game").appendChild(this.bird);
    
    return $(this.bird);

    }
    
}

//Atef
class WhiteDuck {
    constructor() {
        this.duckBody = $("<img/>");
        this.duckBody.attr("src", "images/wDuck.png");
        this.duckBody.css({"top":Math.random() * 400+"px","left":"-100px","position":"absolute"});
        this.duckBody.addClass("DuckImg");
        this.clicked=false;
        // this.appendTo($("#background"));
        $("#game").append(this.duckBody);

        

        return this.duckBody;
    }

    

    // animateDuck(val) {
    //     this.duckBody.animate({ left: val }, 5000);
    // }
}

export {BlackDuck ,GBird ,WhiteDuck};

