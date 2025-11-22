var body  =document.body;
var img =document.querySelector("img")

body.addEventListener("mousemove",function(dets){
    img.style.left = dets.x + 'px'
    img.style.top = dets.y + 'px'
    img.style.transform = 'translate(-50% , -50%)';
})


// var div =document.querySelector("div")
// body.addEventListener("mousemove",function(dets){
//     div.style.left = dets.x + 'px'
//     div.style.top = dets.y + 'px'
//     div.style.transform = 'translate(-50% , -50%)';
// })