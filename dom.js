

var container=document.getElementsByClassName(".container")
var color_box =document.getElementById("#color-box")
var change_color_btn = document.getElementById("#change-color-btn")


function getRandomColor(color_box,change_color_btn ){
    change_color_btn.addeventlistener("click",function(){
        color_box.style.color='orange'
    })

}
     