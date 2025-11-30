var para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText;

var iteration = 0

para.addEventListener('mouseenter', () => {
    setInterval(function () {

        const str = text.split('').map(function (char, index) {
            if(index < iteration){
                return char
            }
            return characters.split("")[Math.floor(Math.random() * 53)]
        }).join("")
        para.innerText = str;
        iteration = iteration + 0.25;
    },30)
})