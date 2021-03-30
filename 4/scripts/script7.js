function findSchedule(){
    let beginTime = document.getElementById("beginTime").value;
    let lessonDuration = document.getElementById("lessonDuration").value;
    let lessonCount = parseInt( document.getElementById("lessonCount").value);
    let schedule = document.getElementById("schedule");

    let Hours = parseInt( beginTime.split(":")[0]);
    let Minutes = parseInt( beginTime.split(":")[1]);

    let DurationHour = parseInt( lessonDuration.split(":")[0]);
    let DurationMinutes = parseInt( lessonDuration.split(":")[1]);
    schedule.innerHTML="";

    for (let i=0;i< lessonCount; i++){
        schedule.innerHTML += `<tr> <td>Дзвінок на ${i+1} урок </td><td> ${Hours}:${Minutes} </td></tr>`;
        Hours += DurationHour;
        Minutes += DurationMinutes;
        if (Minutes >= 60){
            Minutes -= 60;
            Hours += 1;
        }
    }
}