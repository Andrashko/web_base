function ShowList(list){
    let listTemplate = ""; 
    for(let i=0;i<list.length;i++){
        listTemplate += `<li>${list[i]}</li>`; 
    }
    document.getElementById("goods").innerHTML = listTemplate;
}

function addGood(){
    let newGood = document.getElementById("newGood").value;
    document.getElementById("newGood").value = "";
    goods.push(newGood);
    ShowList(goods);
}

function compareStrings(str1, str2){
    if (str1.toLocaleLowerCase() > str2.toLocaleLowerCase())
        return -1;
    else if (str1.toLocaleLowerCase() < str2.toLocaleLowerCase())
        return 1;
    else 
        return 0; 
}

function sortGoods(){
    goods.sort(compareStrings);
    ShowList(goods);
}

function removeGood(){
    let good = document.getElementById("GoodToRemove").value;
    let index = goods.indexOf(good);
    if (index == -1){
        alert(`У списку нема ${good}`);
    } else {
        while( index != -1){
            goods.splice(index, 1);
            index = goods.indexOf(good);
        }
        
        ShowList(goods);
        document.getElementById("GoodToRemove").value = "";
    }
}

let goods = ["Хліб", "Масло", "Сіль", "Хліб", "Кола", "сіль", "Хліб", "Хліб",];
ShowList(goods);
