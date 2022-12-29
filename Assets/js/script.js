// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let dateEl = $("#date-of-today");
let dateText = moment().format("dddd, MMMM Do");
dateEl.text(dateText);
let todoText = $("textarea");
let hour9 = $("#hour-9");
let hour10 = $("#hour-10");
let hour11 = $("#hour-11");
let hour12 = $("#hour-12");
let hour13 = $("#hour-13");
let hour14 = $("#hour-14");
let hour15 = $("#hour-15");
let hour16 = $("#hour-16");
let hour17 = $("#hour-17");
let saveButton = $("saveBtn");
let messageText = $("#success-error");
let currentHour = moment().format("H");
let hourBlocks = ["9", "10", "11", "12", "13", "14", "15", "16", "17",];

// for (i = 0; i < hourBlocks.length; i++) {
//   if (currentHour === hourBlocks[i]) {
//     hour17.addClass("present");
//   } else if (currentHour > hourBlocks) {

//   }
// }

if (currentHour > hourBlocks[0]) {
  hour9.addClass("past");
} else if (currentHour === hourBlocks[0]) {
  hour9.addClass("present");
} else {
  hour9.addClass("future");
}

if (currentHour > hourBlocks[1]) {
  hour10.addClass("past");
} else if (currentHour === hourBlocks[1]) {
  hour10.addClass("present");
} else {
  hour10.addClass("future");
}

if (currentHour > hourBlocks[2]) {
  hour11.addClass("past");
} else if (currentHour === hourBlocks[2]) {
  hour11.addClass("present");
} else {
  hour11.addClass("future");
}

if (currentHour > hourBlocks[3]) {
  hour12.addClass("past");
} else if (currentHour === hourBlocks[3]) {
  hour12.addClass("present");
} else {
  hour12.addClass("future");
}

if (currentHour > hourBlocks[4]) {
  hour13.addClass("past");
} else if (currentHour === hourBlocks[4]) {
  hour13.addClass("present");
} else {
  hour13.addClass("future");
}

if (currentHour > hourBlocks[5]) {
  hour14.addClass("past");
} else if (currentHour === hourBlocks[5]) {
  hour14.addClass("present");
} else {
  hour14.addClass("future");
}

if (currentHour > hourBlocks[6]) {
  hour15.addClass("past");
} else if (currentHour === hourBlocks[6]) {
  hour15.addClass("present");
} else {
  hour15.addClass("future");
}

if (currentHour > hourBlocks[7]) {
  hour16.addClass("past");
} else if (currentHour === hourBlocks[7]) {
  hour16.addClass("present");
} else {
  hour16.addClass("future");
}

if (currentHour > hourBlocks[8]) {
  hour17.addClass("past");
} else if (currentHour === hourBlocks[8]) {
  hour17.addClass("present");
} else {
  hour17.addClass("future");
}

let hourlyTodo = todoText.value;

function displayMessage() {
  if (hourlyTodo === "") {
  messageText.text("Nothing to save.");
  messageText.setAttribute
  } else {
  messageText.text("Todo item has been saved to local storage.");
  }
}

saveButton.on(click);
if (hourlyTodo === "") {
  displayMessage("error", "Nothing to save.");
} else {
  displayMessage("success", "Todo item has been saved to local storage.");

localStorage.setItem("hourlyTodo", hourlyTodo);
}

$(function () {
let hourlyTodo = localStorage.getItem("hourlyTodo");
});

// var storedTodos = JSON.parse(localStorage.getItem("todos"));
//   // TODO: Describe the functionality of the following `if` statement.
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }

//   function storeTodos() {
//     // TODO: Describe the purpose of the following line of code.
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }

//   saveButton.click(storeTodos());

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
