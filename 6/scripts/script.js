
function toRow(){
    return ` 
    <td> ${this.id}</td> 
    <td> ${this.task} </td> 
    <td> 
        <input type="button" value="Вилучити" onclick="removeTask('${this.id}')">                  
        <input type="button" value="Виконано" onclick="markAsDoneTask('${this.id}')">
        <input type="button" value="Підняти" onclick="moveUpTask('${this.id}')">
    </td>`;
}

let toDo = [
    {
        id:1,
        task:"Виконати лабораторну роботу з програмування",
        toRow: toRow
    },
    {
        id:2,
        task:"Перескласти модуль з алгебри",
        toRow: toRow
    },
    {
        id:3,
        task:" Сфотографуватися з сакурою",
        toRow: toRow
    }
]

showToDo();


function showToDo(){
    let list ="<tr> <th> Номер</th> <th> Завдання </th> <th>Дії</th></tr>";
    for (let i=0; i<toDo.length; i++){
        list += `<tr> 
                    ${toDo[i].toRow()}
                </tr>`;
    }
    document.getElementById("todo").innerHTML = list;
    let tbody = document.getElementById("todo").children[0];
    for (let i=0; i<toDo.length;i++){
        toDo[i].DOMElement = tbody.children[i+1];
    }
}

function removeTask(id){
    const index = toDo.findIndex( todo =>todo.id == id );
    toDo[index].DOMElement.remove();
    toDo.splice(index, 1);    
}

function addTask(){
    const newTask = document.getElementById("newtask").value;
    const newTaskObject = TasckFactory(newTask);
    toDo.push(newTaskObject);
    document.getElementById("todo").children[0].appendChild(newTaskObject.DOMElement);
}

function TasckFactory(task){
    let result =  {
        task, 
        id: Date.now(),
        toRow,
        DOMElement: document.createElement("tr")
    }
    result.DOMElement.innerHTML = result.toRow();
    return result;
}