/*Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються
випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати
номери елементів (поки він не відмовиться). Знаходити сумарний виграш.*/
let array = [];

function RandomInt(minValue, maxValue){
    return Math.floor((maxValue-minValue)*Math.random()+minValue);
}

function randomArray(len){
    let res = [];
    for (let i=0;i<len;i++)
        res.push(RandomInt(-500,500));
    return res;
}

function generateArray(){
    const count = parseInt(document.getElementById("count").value);
    array = randomArray(count);
}


let totalWin = 0;

function selectElement(){
    const elementIndex = parseInt(document.getElementById("elementIndex").value);
    if (elementIndex>=array.length){
        alert(`Ви не можете вибрати елемент білше ніж ${array.length-1}`);
        return;
    }
    totalWin += array[elementIndex];
    document.getElementById("totalWin").innerText=totalWin;
}


function finishGame(){
    let inputs = document.body.getElementsByTagName("input");
    for (let input of inputs){
        
            input.disabled = true;
    }
}