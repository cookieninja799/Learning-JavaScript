const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
  const randNum = getRandNum(); //rando num 0 - 3
  document.body.style.backgroundColor = colors[randNum]; //changes background color
  color.textContent = colors[randNum]; //changes text displayed
})

let getRandNum = _ => Math.floor(Math.random() * colors.length); //I used an arrow function here to pratice
