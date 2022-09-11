//cerner_2^5_2022
function move(elementName, increment){
   document.getElementById(elementName).style.left = Number(window.getComputedStyle(document.getElementById(elementName)).getPropertyValue("left").replace("px", ""))>300?5:(Number(window.getComputedStyle(document.getElementById(elementName)).getPropertyValue("left").replace("px", "")) + increment) + "px";
   document.getElementById(elementName).style.top = Number(window.getComputedStyle(document.getElementById(elementName)).getPropertyValue("top").replace("px", ""))>300?5:(Number(window.getComputedStyle(document.getElementById(elementName)).getPropertyValue("top").replace("px", "")) + increment) + "px";
}
function moveAll() {
   move("box1",(Math.random() * 20) + 1);
   move("box2",(Math.random() * 20) + 1);
   move("box3",(Math.random() * 20) + 1);
}
var isPlaying=false;
var intervalObj;
function play() {
   isPlaying==true?clearInterval(intervalObj):false;
   intervalObj = (isPlaying==false?setInterval(moveAll, 250 + (Math.random() * 20)):null);
   isPlaying = (isPlaying==true?false:true);
   document.getElementById("message").innerHTML = isPlaying==true?"Click to Stop!":"Click to Start!";
}	

