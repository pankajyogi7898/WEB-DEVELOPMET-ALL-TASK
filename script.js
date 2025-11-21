var btn = document.querySelector("button");


btn.addEventListener("click",function(){
    var div = document.createElement("div")
    // var h1 = document.createElement("h1")
    // h1.innerHTML ="helllo"
    var body = document.querySelector("body")

    var y= Math.random()*100
    var x = Math.random()*100

    var c1 = Math.floor(Math.random()*255)
    var c2 = Math.floor(Math.random()*255)
    var c3 = Math.floor(Math.random()*255)

    var rota = Math.floor(Math.random()*360)

    
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    div.style.rotate = rota + 'deg'
    
    div.style.position = 'absolute'
    div.style.left = y + '%'
    div.style.top = x + '%'

    
    body.appendChild(div)
    
})