// const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");

const calendarDoors = 24;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#fff";
}

const createCalendar = () => {
    
  
        for(let i = 0; i  < calendarDoors; i++) {
        const calendarDoor = document.createElement("div");
        const doorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        doorText.classList.add("text");
        doorText.innerHTML = i + 1;
        calendarDoor.appendChild(doorText);

        doorNumber = i + 1;
        let doorPath = `./doors/door-${doorNumber}.jpg`;

if(doorNumber >15) {
    doorText.addEventListener("click", openDoor.bind(null));
} else {

doorText.addEventListener("click", openDoor.bind(null,  doorPath));
   }
        }
    }


createCalendar();

// calendarButton.addEventListener("click", createCalendar);

