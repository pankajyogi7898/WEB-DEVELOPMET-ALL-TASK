var elem = document.querySelectorAll(".element")
var img= document.querySelectorAll("img")

// elem.addEventListener('mousemove',function(dets){
//     img.style.opacity = 1;
//     img.style.left = dets.x + "px"
//     img.style.top = dets.y + "px"
// })
// elem.addEventListener('mouseleave',function(dets){
//     img.style.opacity = 0;
// })

elem.forEach(function(val){
    val.addEventListener("mouseenter",function(dets){
        val.childNodes[3].style.opacity = 1;
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0;
    })
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.x + 'px'
    })
})