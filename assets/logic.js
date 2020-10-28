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
let schedule = JSON.parse(localStorage.getItem("schedule")) || {};

var currentTime = $("#currentTime");
currentTime.text(m.format("[The time is] h:mm:ss a"));
var update = function () {
  let timeNow = moment().format("H");
  // console.log(timeNow);
  document.getElementById("currentTime").innerHTML = moment().format(
    "[The time is] h:mm:ss a"
  );

  for (let i = 8; i <= 18; i++) {
    if (i in schedule) {
      $(`#content-${i}`).text(schedule[i]);
    }
    // "key" in obj
    if (i < timeNow) {
      $(`#${i}`).removeClass("blue");
      $(`#${i}`).removeClass("green");
      $(`#${i}`).addClass("red");
    } else if (i == timeNow) {
      $(`#${i}`).removeClass("red");
      $(`#${i}`).removeClass("green");
      $(`#${i}`).addClass("blue");
    } else {
      $(`#${i}`).removeClass("red");
      $(`#${i}`).removeClass("blue");
      $(`#${i}`).addClass("green");
    }
  }
};
setInterval(update, 1000);

var pageStart = function () {};

// var container = $(".container");
// var myWorkDay = $("#timeblocks");

//STEP: create time blocks
//IN HTML

//STEP: color code time blocks

//STEP: make them click responsive (change color when clicked?!)

//STEP: make a save button for time blocks that saves in local storage
//IN HTML
// var names = [];
// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));

//...

// var storedNames = JSON.parse(localStorage.getItem("names"));

$(".saveBtn").click(function (event) {
  console.log("id = ", event.currentTarget.id);
  let content = $(event.currentTarget).parent().parent().children()[1]
    .innerHTML;
  console.log(content);
  let index = parseInt(event.currentTarget.id);
  console.log(index);
  schedule[index] = content;
  localStorage.setItem("schedule", JSON.stringify(schedule));
});

//STEP: make the saved events stay when the page is refreshed

function init() {
  for (let i = 0; i <= 10; i++) {
    schedule.push("");
  }
  console.log("Local storage get item" + localStorage.getItem("schedule"));
  schedule = JSON.parse(localStorage.getItem("schedule"));
  console.log("schedule = " + schedule);
  for (let i = 8; i <= 18; i++) {
    $(`#${i} > .col-6`).text(content);
  }
}
// $(init);
