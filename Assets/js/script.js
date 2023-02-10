// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let dateEl = $("#date-of-today");
let dateText = moment().format("dddd, MMMM Do");
let todoText = $("<textarea>");
let saveButton = $(".saveBtn")
let successMessageText = $("#success");
let errorMessageText = $("#error");
let currentHour = moment().format("HH");
let hourBlocks = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  for (i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener("click", function (event) {
    event.preventDefault();
    let hourlyToDo = event.target.previousElementSibling;

    if (hourlyToDo.value.trim() === "") {
      errorMessageText.text("");
      errorMessageText.append("You need to add a To Do Item before saving!")
      successMessageText.text("");
    } else {
      let localStorageData = JSON.parse(localStorage.getItem("todoText"));
  
      let todoObj = {
      time: hourlyToDo.getAttribute("id"),
      value: hourlyToDo.value
    }
      if (localStorageData === null) {
      localStorageData = [];
      localStorageData.push(todoObj);
    } else {
      localStorageData.push(todoObj);
    }
  
    localStorage.setItem("todoText", JSON.stringify(localStorageData));
      successMessageText.text("");
      successMessageText.append("Your To Do item has been successfully added to local storage!")
      errorMessageText.text("");
    }
  });
  }
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  for (i = 0; i < hourBlocks.length; i++) {
    if (currentHour === hourBlocks[i]) {
      $(`#hour-${hourBlocks[i]}`).addClass("present");
    } else if (currentHour > hourBlocks) {
      $(`#hour-${hourBlocks[i]}`).addClass("past");
    } else {
      $(`#hour-${hourBlocks[i]}`).addClass("future");
    }
  }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function renderHourlyItems () {
    let localStorageData = localStorage.getItem("todoText")
    if (localStorageData != null) {
      let hourlyTodoValue = JSON.parse(localStorageData);
      for (let i = 0; i < hourlyTodoValue.length; i++) {
      let todoTime = hourlyTodoValue[i].time;
      document.getElementById(todoTime).value = hourlyTodoValue[i].value;
    }
  }
    }
    renderHourlyItems();
  //
  // TODO: Add code to display the current date in the header of the page.
  dateEl.text(dateText);
});