DOMContentLoaded

var container=document.getElementsByClassName (".container")
var color_box =document.getElementById("#color-box")
var change_color_btn = document.getElementById("#change-color-btn")


color_box.onclick=getRandomColor;


function getRandomColor(color_box,change_color_btn){
    
    document.color_box.style.backgroundColor = "red";
}
color_box.addEventListener("click",getRandomColor);
     