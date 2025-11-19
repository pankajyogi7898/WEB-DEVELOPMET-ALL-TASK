var btn = document.querySelector("button");


btn.addEventListener("click",function(){
    var h1 = document.createElement("h1")

    var array = ["hy! my name is pankaj" , "yogi is greate" , "harsh bhaiya is god" , "sheryians coding school" , "pankaj nath yogi","keep patients"]

    var arr1 = Math.floor(Math.random()*array.length)

    h1.innerHTML = array[arr1]
    var body = document.querySelector("body")

    var y= Math.random()*100
    var x = Math.random()*100
    

    var c1 = Math.floor(Math.random()*255)
    var c2 = Math.floor(Math.random()*255)
    var c3 = Math.floor(Math.random()*255)

    var rota = Math.floor(Math.random()*360)

    // h1.style.color = `rgb(${c1},${c2},${c3})`
    h1.style.rotate = rota + 'deg'
    
    h1.style.position = 'absolute'
    h1.style.left = y + '%'
    h1.style.top = x + '%'

    
    body.appendChild(h1)
    
})