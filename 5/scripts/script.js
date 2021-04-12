let toDo = ["Виконати лабораторну роботу з програмування", "Перескласти модуль з алгебри", 
"Сфотографуватися з сакурою", "Відпочити з друзями"];
showToDo();

function rowTemlate(index, task){
    return ` 
        <td> ${index}</td> 
        <td> ${task} </td> 
        <td> 
            <input type="button" value="Вилучити" onclick="removeTask('${task}')">                  
            <input type="button" value="Виконано" onclick="markAsDoneTask('${task}')">
            <input type="button" value="Підняти" onclick="moveUpTask('${task}')">
        </td>`;
}

function showToDo(){
    let list ="<tr> <th> Номер</th> <th> Завдання </th> <th>Дії</th></tr>";
    for (let i=0; i<toDo.length; i++){
        list += `<tr> 
                    ${rowTemlate(i+1, toDo[i])}
                </tr>`;
    }
    document.getElementById("todo").innerHTML = list;
}

function addTask(){
    const newTask = document.getElementById("newtask").value;
    toDo.push(newTask);
    let row = document.createElement("tr");
    row.innerHTML = rowTemlate(toDo.length, newTask);
    document.getElementById("todo").children[0].appendChild(row);
}

function removeTask(task){
    const index = toDo.indexOf(task);
    toDo.splice(index, 1);
    let tbody = document.getElementById("todo").children[0];
    let rowToRemove = tbody.children[index+1];
    rowToRemove.remove();
}

function markAsDoneTask(task){
    const index = toDo.indexOf(task);
    let tbody = document.getElementById("todo").children[0];
    let rowDoneTask = tbody.children[index+1];
    rowDoneTask.classList.add("doneTask");
}

function moveUpTask(task){
    const index = toDo.indexOf(task);
    if (index == 0){
        alert ("Неможливо");
        return;
    }
    // toDo.splice(index, 1);
    // toDo.splice(index-1, 0, task);
    let temp = toDo[index];
    toDo[index] = toDo[index-1];
    toDo[index-1] = temp;

    let tbody = document.getElementById("todo").children[0];
    let rowToMove = tbody.children[index+1];
    let previuseRow = tbody.children[index];
    rowToMove.remove();
    tbody.insertBefore(rowToMove, previuseRow);
}