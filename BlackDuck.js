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
                $("#myscore").text((parseInt)($("#myscore").text())-10) 
            }
            this.clicked=true;
            console.log($(s).attr('src'))
            $(s).attr('src',"images/deadBlack.png")
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
    this.bird.src="images/gold.gif";
    this.clicked=false;
    this.bird.style.top=Math.random()*400+'px';
    this.bird.style.left=-90+"px";
    this.bird.style.width= "100px";
    this.bird.style.height= "100px";
    // this.bird.Speed= 50="px";
    this.bird.style.position = 'absolute';
    document.querySelector("#game").appendChild(this.bird);
    $(this.bird).on('click',function(){
        if(!this.clicked){
            $("#myscore").text((parseInt)($("#myscore").text())+20) 
        }
        this.clicked=true;
        console.log($(this).attr('src'))
        $(this).attr('src',"images/deadGold.png")
        $(this).stop()
        $(this).animate({top:"80"+"%"},1000,"easeOutBounce")
    })
    return $(this.bird);
    }
}
//Atef
class WhiteDuck {
    constructor() {
        this.duckBody = $("<img/>");
        this.duckBody.attr("src", "images/red.gif");
        this.duckBody.css({"top":Math.random() * 400+"px","left":"-100px","position":"absolute","width":"100px","height":"100px"});
        this.duckBody.addClass("DuckImg");
        this.clicked=false;
        // this.appendTo($("#background"));
        $("#game").append(this.duckBody);
        $(this.duckBody).on('click',function(){
            if(!this.clicked){
                $("#myscore").text((parseInt)($("#myscore").text())+5) 
            }
            this.clicked=true;
            console.log($(this).attr('src'))
            $(this).attr('src',"images/deadRed.png")
            $(this).stop()
            $(this).animate({top:"80"+"%"},1000,"easeOutBounce")
        })
        return this.duckBody;
    }
    
}
export {BlackDuck ,GBird ,WhiteDuck};

