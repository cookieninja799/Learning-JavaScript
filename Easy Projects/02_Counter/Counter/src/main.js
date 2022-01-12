const btnl = document.getElementById('btn_l');
const btna = document.getElementById('btn_a');
let count = 0;
const num = document.querySelector("#num");

btnl.addEventListener("click", function() {
  count--;
  num.textContent = count;
})

btna.addEventListener("click", function() {
  count++;
  num.textContent = count;
})