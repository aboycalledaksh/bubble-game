



function makebuble(){
var bubble="";
for(var i=1;i<121;i++ ){
 var random=Math.floor(Math.random()*10);
 bubble+=`<div id="bub1">${random}</div>`;
}
document.querySelector("#playground").innerHTML=bubble;
}
var timer=60;
function runtimer(){
 setInterval(function(){
    
    if(timer>0){
        timer--;
        document.querySelector("#timer").textContent=timer;
    }
    else{
        document.querySelector("#playground").innerHTML=`<h1>Game Over!!!</h1>`;
    }
    
 },1000)
}
var rn
function newhit(){
   rn= Math.floor(Math.random()*10);
   document.querySelector("#hit").textContent=rn;

}
var score=0;

function scoree(){
score+=10;
document.querySelector("#score").textContent=score;

}
runtimer();
makebuble();
newhit();
document.querySelector("#playground").addEventListener("click", function(dets){
    var targett=Number(dets.target.textContent);
    console.log(targett)
    if(targett===rn){
        scoree();
        makebuble();
        newhit();
    }
      
})

