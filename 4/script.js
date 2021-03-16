function findMax(){
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);
    let res = document.getElementById("result");
    if (num1>num2) {
        res.innerText = `Більше перше число ${num1}`;
        document.getElementById("number1").style.background = "yellow";
        document.getElementById("number2").style.background = "white";
    }
    else if (num1<num2){
        res.innerText = `Більше друге число ${num2}`;
        document.getElementById("number1").style.background = "white";
        document.getElementById("number2").style.background = "yellow";
    }
    else {
        res.innerText = "Числа рівні";
    }
}