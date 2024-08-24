let number = document.querySelector(".progress-bar");
let maxCount = document.querySelector(".total-time");

let maxValue = parseInt(maxCount.textContent, 10) * 100;
console.log(maxValue, number);  // This will log 500 if .total-time contains "5"

function run(){
    
    console.log(number.max);
}


number.addEventListener("click", run);