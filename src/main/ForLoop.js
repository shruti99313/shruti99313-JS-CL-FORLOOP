let input = document.getElementById("input");
let button = document.getElementById("button");
let result = document.getElementById("result");

button.onclick = getSum;

/**
 * TODO completed ✅
 */
function getSum() {
    let val = parseInt(input.value);  // convert input to number
    let sum = 0;

    // loop from 0 up to val (exclusive)
    for (let i = 0; i < val; i++) {
        sum += i;
    }

    // display the result
    result.innerText = sum;
}
