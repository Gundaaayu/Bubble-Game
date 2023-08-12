var timer=6;
var score=0;
var newHit;


document.querySelector("#pbtm").addEventListener("click",function(details){

    var clickedNum=(Number(details.target.textContent));
    if(clickedNum===newHit){
        increaseScore();
        getNewHit();
        makeBubble();

    }
});

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;   
}

function getNewHit(){
    newHit=Math.floor(Math.random()*10);
    document.querySelector("#newhit").textContent=newHit;

}

function makeBubble(){
    clutter="";

for(i=1;i<=112;i++){
    var rn=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML=clutter;
}


function timerRun(){
    var timerInt=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerValue").textContent=timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`
        }

},1000)}

getNewHit();

timerRun();

makeBubble();

increaseScore();

