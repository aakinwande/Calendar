const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const currenDate = document.querySelector(".current-date");
days = document.querySelector(".days");
prevNextIcons = document.querySelectorAll(".icons span");

let date = new Date,
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

const showCalendar = () => {
    let firstDate = new Date(currentYear, currentMonth, 1).getDay(),
    lastDate = new Date(currentYear, currentMonth + 1, 0).getDate()
    lastDateofMonth = new Date(currentYear, currentMonth, 0).getDate();
    
    let dateList = "";

    for (let i = firstDate; i > 0; i--) {
        dateList += `<li class="inactive">${lastDateofMonth -i + 1}</li>`;
         }

    for (let i = 1; i <= lastDate; i++) {
   dateList += `<li>${i}</li>`;
    }
    currenDate.innerText = `${months[currentMonth]} ${currentYear}`
    days.innerHTML = dateList;
}

showCalendar();

prevNextIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        currentMonth = icon.id === "prev" ? currentMonth -1 : currentMonth + 1;       
        
        if(currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        }
        else {
            date = new Date;
        }
        showCalendar();
        
    })
    
});