function validate(){
    let phone = document.getElementsByName("phone")[0].value;
    if (!isPhoneValid(phone)){
        document.getElementsByClassName("error")[0].innerText = "Не формат +3(80цц)-цц-цц-ццц";
    } else{
        document.getElementsByClassName("error")[0].innerText = "";
    }

    let name = document.getElementsByName("name")[0].value;
    if (!isNameValid(name)){
        document.getElementsByClassName("error")[1].innerText = "не формат: Петренко П.П.";
    } else{
        document.getElementsByClassName("error")[1].innerText = "";
    }

    let them = document.getElementsByName("them")[0].value;
    if (!isThemValid(them)){
        document.getElementsByClassName("error")[2].innerText = "Не вірна тема";
    } else{
        document.getElementsByClassName("error")[2].innerText = "";
    }
}

function isPhoneValid(phone){
    return /^\+3\(80\d\d\)\-\d\d\-\d\d\-\d{3}$/.test(phone);
}

function  isNameValid(name){
    return /^[А-Я]{1}[а-я]+\s[А-Я]{1}\.[А-Я]{1}\.$/.test(name);
}

function  isThemValid(them){
    return /^[A-ZА-Я]{1}.{0,49}$/.test(them);
}