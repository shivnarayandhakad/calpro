let hour =document.getElementById("hour");
let min =document.getElementById("min");
let sec =document.getElementById("sec");
function displayTime()
{
let date=new Date();
let hh=date.getHours();
let mm=date.getMinutes();
let ss=date.getSeconds();

let hRotation=30*hh+mm/2;
let mRotation=6*mm;
let sRotation=6*ss;

hour.style.transfrom='rotate(${hRotation}deg)';
min.style.transfrom='rotate(${mRotation}deg)';
sec.style.transfrom='rotate(${sRotation}deg)';

setInterval(displayTime,1000);
}
