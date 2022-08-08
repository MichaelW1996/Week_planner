var now = moment() //current time
var DayStart = 9 //start of day 24hr format
var DayEnd = 17 //End of day 24hr format

var TodaysDate = now.format("dddd Do MMMM YYYY"); // Variable of todays date with the current time parsed in the desired format
$("#currentDay").text(TodaysDate);

const container = document.getElementById("container")
var timeListEl = document.createElement('ul')

var classSort = function(hour,cHour,inputEl){ //asigns class based on if slot is checks if timeslot is 
  if(hour == cHour){ //the current hour 
    inputEl.classList.add("current");
  } else if (hour < cHour){ //in the past
    inputEl.classList.remove("current");
    inputEl.classList.add("past");
  } else { //or in the future
    inputEl.classList.remove("past");
    inputEl.classList.remove("current");
    inputEl.classList.add("future");
  }}

  var saveNotes = function(event){
    var value = $(this).siblings('.input').val();
    var time = $(this).parent().attr('id');
    
    localStorage.setItem(time,value);
  }//when save button pressed, do this

for(let i=DayStart;i <= DayEnd;i++){ //starts at 9(9am), ends at 17(5pm)
  var timeBlockEl = document.createElement('li') //list item creation 
  timeBlockEl.classList.add("time-block") //applies class to list items
  var timeEl = document.createElement('p') //creates P element to take time
  timeEl.classList.add("hour") //applies class to hour
  var timeInput = document.createElement('input') //creates input element to add details in schedule
  timeInput.type = "text" //sets the input to be text
  timeInput.classList.add("input") // assigns class to help styling
  var timeSaveButton = document.createElement('button') //creates the save button
  timeSaveButton.classList.add("saveBtn") //applies class to save button
  timeSaveButton.textContent ="Save" //labels save button
  timeSaveButton.addEventListener("click",saveNotes) //when button is clicked, run saveNotes function

  var cHour = moment().format('HH') //Current time
  timeEl.textContent=i+":00"; //Adds :00 minutes
  
  classSort(i,cHour,timeInput) // runs function to find if timeslot is in the past,present or future

  //spawn new object for each hour
  timeBlockEl.appendChild(timeEl) //append time element to list item 
  timeBlockEl.appendChild(timeInput) // append input element to list item
  timeBlockEl.appendChild(timeSaveButton) //appends save button to list item 
  timeBlockEl.id="Hour-"+i
  timeListEl.appendChild(timeBlockEl) //appends list item to list 
}

container.appendChild(timeListEl) //appends list to container

for(let i=DayStart;i <= DayEnd;i++){ //looks for data in local storage and displays 
  var item = "Hour-"+i //generates time key for searching local storage
  var id = "#"+item //generates the input box's ID based that is to receive the data

  $(id+" .input").val(localStorage.getItem(item))}
  



