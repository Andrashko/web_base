let message = document.getElementById("messages").getElementsByTagName("p")[0];

function showContent(){
    let age = parseInt(document.getElementById("age").value);
    if (age>=18){
        document.getElementById("content").style.display="block";
    }
    else {

        message.innerText = "Ви занадто молоді";
        setTimeout( clearMessage, 2000);
    }
}

function clearMessage(){
    message.innerText = "";
}


let count = 0;
setInterval(incCount, 1000);
function incCount(){
    count++;
    document.getElementById("counter").innerText = count;
}