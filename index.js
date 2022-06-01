import { isWeekEnd, getDayName } from "./date-helpers.js";
let calendar = document.querySelector("#app-calendar");

for (let day=1; day<=31 ; day++){

    const weekend = isWeekEnd(day)

    
    if (day >=8){
        calendar.insertAdjacentHTML('beforeend',`<div class="day ${weekend? "weekend" : ""}">${day}</day>`)
    }else{
        const dayName = getDayName(day)
        calendar.insertAdjacentHTML('beforeend',`<div class="day ${weekend? "weekend" : ""}">
        <div class="name">${dayName}</div>
    ${day}</day>`)}
    
} 

document.querySelectorAll("#app-calendar .day").forEach((day)=>{
    day.addEventListener("click",event =>{
        event.currentTarget.classList.add("selected");
    })
})    


