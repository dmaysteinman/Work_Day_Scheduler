// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar 
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours


// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block
// THEN I can enter an event

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar 
var currentDay = $("#currentDay");
let m = moment();
currentDay.text(m.format("[Today is] MMM Do[,] YYYY"));

var currentTime = $("#currentTime");
currentTime.text(m.format("[The time is] h:mm:ss a"));
var update = function() {
    document.getElementById("currentTime")
    .innerHTML = moment().format("[The time is] h:mm:ss a");
}
setInterval(update, 1000);

var container = $(".container")


//STEP: create time blocks 
//IN HTML






//STEP: color code time blocks


//STEP: make them click responsive (change color when clicked?!)

//STEP: make a save button for time blocks that saves in local storage



//STEP: make the saved events stay when the page is refreshed
