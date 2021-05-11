
function validate(){
    let errors =[];
    let login = document.getElementsByName("login")[0].value;
    let emailTemplate = new RegExp("^[\w_\-]+@\w+\.{1}\w+$","i"); // /^[\w_\-]+@\w+\.{1}\w+$/i
    if ( !login.match(/^\w{3,}$/))
        errors.push("Логін не може бути коротше 3 символів");
    let mail = document.getElementsByName("mail")[0].value;
    //перевірка шаблону спочатку літери, '_' або '-' хоча б 1 раз, потім @ далі хоча б  1 літера, ріно 1 крапка і ще хоча б 1 літера.
    if (!mail.match(emailTemplate))
            errors.push("Введіть пошту в форматі example@mail.com");
    let age = parseInt( document.getElementsByName("age")[0].value);
    if (!age || age < 12)
        errors.push("Вік не може бути менше 12 років");
    
    
    let errorList = document.getElementsByClassName("error")[0];
    errorList.innerHTML ="";
    if (errors.length>0){
        for(let error of errors){
            let e = document.createElement("li");
            e.innerText = error;
            errorList.appendChild(e);
        }
    }
}