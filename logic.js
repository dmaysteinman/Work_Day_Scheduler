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

//STEP: Create a timer with date using js
var currentDay = $("#currentDay");
let m = moment();
currentDay.text(m.format("[Today is] dddd[,] MMM Mo[,] YYYY"));

var currentTime = $("#currentTime");
currentTime.text(m.format("[The time is] h:mm:ss a"));
var update = function() {
    document.getElementById("currentTime")
    .innerHTML = moment().format("[The time is] h:mm:ss a");
}
setInterval(update, 1000);

var container = $(".container")


//STEP: create time blocks 
//THE ARRAY AND FOR LOOP IS TAKEN FROM SHANNON'S VIA 5PM STUDY GROUP
let hours = ["8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "500pm"];

for (var i = 0; i < hours.length; i++) {
    //Create row for each hour of the day
    var hourRow = $("<div>");
    //Assign row class
    hourRow.attr("class", "row");
    //Create column for the hour to display in
    var hourCol = $("<div>");
    //Assign column class
    hourCol.attr("class", "col-2");
    //Append column to row
    hourRow.append(hourCol);
    //Set text of column to hour of the day
    hourCol.text(hours[i]);
    //Append the row to the container
    container.append(hourRow);
    //Create column for user input, the plan for that hour of the day
    var planCol = $("<div>");
    //Assign class to middle column
    planCol.attr("class", "col-9");
    //Just to test
    // planCol.text("Test");
    //Append plan column to the row (which is already appended to container)
    hourRow.append(planCol);
    //Create column for save button
    var saveBtnCol = $("<div>");
    //Assign class to last column of row
    saveBtnCol.attr("class", "col-1");
    //Append column to row
    hourRow.append(saveBtnCol);
    //Create save button
    var saveBtn = $("<button>");
    //Assign attributes to button to apply CSS
    saveBtn.attr("type", "button");
    saveBtn.attr("class", "saveBtn btn btn-success");
    //Set text content of save button
    saveBtn.text("Save");
    //Append save button to last column (which is already appended to the row)
    saveBtnCol.append(saveBtn);
}; 


//STEP: color code time blocks


//STEP: make them click responsive (change color when clicked?!)

//STEP: make a save button for time blocks that saves in local storage

//STEP: make the saved events stay when the page is refreshed
