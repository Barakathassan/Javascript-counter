let counterValue = document.querySelector(".countervalue");
let increment = document.querySelector(".add-count");
let decrement = document.querySelector(".lower-count");

let counter = 0

increment.addEventListener("click", ()=>{
  if (counter <= 49) {
    counter += 1;
    counterValue.innerHTML = counter;
  }
});

decrement.addEventListener("click", ()=>{
  if (counter >= 1) {
    counter -= 1;
    counterValue.innerHTML = counter;
  }
});