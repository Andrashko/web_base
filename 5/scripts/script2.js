let vehicle = document.getElementById("vehicle");
let left = 100;
const MIN_LEFT = 50;
const MAX_LEFT = 850;
const STEP = 50;
const COLOR_LIST = ["slateblue", "red", "green"];
let colorIndex = 0;

function moveRight(){
    if (left < MAX_LEFT){
        left += STEP;
        vehicle.style.left = `${left}px`;
    }
}

function moveLeft(){
    if (left > MIN_LEFT){
        left -= STEP;
        vehicle.style.left = `${left}px`;
    }
}

function changeColor(){
    colorIndex++;
    if(colorIndex>=COLOR_LIST.length)
        colorIndex=0;
    vehicle.style.backgroundColor = COLOR_LIST[colorIndex];
}