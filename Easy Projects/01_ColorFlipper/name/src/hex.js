const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let randColor = "#";
    for (let i = 0; i < 6; i++) {
        randColor += hex[getRandNum()];
    }
    document.body.style.backgroundColor = randColor; //changes background color
    color.textContent = randColor; //changes text displayed
})

let getRandNum = _ => Math.floor(Math.random() * hex.length);