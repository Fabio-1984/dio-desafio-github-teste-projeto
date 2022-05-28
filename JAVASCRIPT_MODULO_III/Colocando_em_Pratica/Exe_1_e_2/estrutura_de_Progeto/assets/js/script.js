var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;



document.getElementById('adicionar').addEventListener("click", increment);

document.getElementById('subtrair').addEventListener("click", decrement);

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 10) {
        adicionar.disabled = true;
    }else{
        adicionar.disabled = false;
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber <= 0) {
        subtrair.disabled = true;
    }else{
        subtrair.disabled = false;
    }
}


