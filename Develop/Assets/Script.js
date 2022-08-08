var now = moment() //current time

var TodaysDate = now.format("dddd Do MMMM YYYY"); // Variable of todays date with the current time parsed in the desired format
$("#currentDay").text(TodaysDate);

// this works, but is not mine

const store = window.localStorage; //replace

const container = document.getElementById("container")
var timeListEl = document.createElement('ul')

var classSort = function(hour,cHour,inputEl){ //asigns class based on if slot is checks if timeslot is 
  if(hour == cHour){ //the current hour 
    inputEl.classList.add("current");
    console.log(hour + " this is current")
  } else if (hour < cHour){ //in the past
    inputEl.classList.remove("current");
    inputEl.classList.add("past");
    console.log(hour + " this is past")
  } else { //or in the future
    inputEl.classList.remove("past");
    inputEl.classList.remove("current");
    inputEl.classList.add("future");
    console.log(hour+ ' This is future')
  }}

  var saveNotes = function(event){window.alert(event.target)}

for(let i=9;i <= 17;i++){ //starts at 9(9am), ends at 17(5pm)
  var timeBlockEl = document.createElement('li')
  timeBlockEl.classList.add("time-block")
  var timeEl = document.createElement('p')
  var timeInput = document.createElement('input')
  timeInput.type = "text"
  var timeSaveButton = document.createElement('button')
  timeSaveButton.classList.add("saveBtn")
  timeSaveButton.textContent ="Save"
  timeSaveButton.addEventListener("click",saveNotes)

  var cHour = moment().format('HH') //Current time
  timeEl.textContent=i+":00"; //Adds :00 minutes
  
  classSort(i,cHour,timeInput) // runs function to find if timeslot is in the past,present or future

  timeBlockEl.appendChild(timeEl)
  timeBlockEl.appendChild(timeInput)
  timeBlockEl.appendChild(timeSaveButton)
  timeListEl.appendChild(timeBlockEl)
 
  //spawn new object for each hour
}

container.appendChild(timeListEl)


