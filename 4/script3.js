// випадкове ціле число
//[0,1] *110 ->[0,110]+(-10)-> [-10,100]
function RandomInt(minValue, maxValue){
    return Math.floor(Math.random()*(maxValue-minValue)+minValue);
}
// згенерувати вираз з 2 рандомних чисел

function generate(){
    num1 = RandomInt(0,100);
    num2 = RandomInt(0,100);
    let captcha = `${num1}+${num2}`;
    document.getElementById("captcha").innerText  = captcha;
}

//перевірити и вірно відповів користувач
function check(){
    const res = parseInt(document.getElementById("result").value);
    if (num1+num2 == res){
        alert ("Вірно");
    }
    else{
        alert("Спробуйте ще");
        generate();
    }
}

let num1, num2;
generate();