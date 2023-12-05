$(document).ready(function(){

// current date and time (referencing dayjs formats)
var currentDate = dayjs().format('dddd, MMMM D, YYYY');
var currentTime = dayjs().format('hh:mm:ss a');

// display current date and time 
$("#currentDay").html(currentDate);
$("#currentTime").html(currentTime);
console.log("welcome")

let timeBlock = $('.time-block');
let saveButton = $('.saveBtn');

// function to update time block colors based on time
function timeLog () {
var currentHour = dayjs().hour();
$(".time-block").each(function () {
    var loggedHour = parseInt($(this).attr("id").split("hour")[1]);
console.log("loggedHour: ", loggedHour, "currentHour: ", currentHour );
    if (loggedHour < currentHour) {
        $(this).addClass("past");
    } else if (loggedHour === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
}

});
}
// Function to save text to local storage 
function saveLog () {
    var blockId = $(this).closest(".time-block").attr("id");
    var textBox = $(this).siblings(".description").val();

    localStorage.setItem(blockId, textBox);

}
// Save button click to save functionality 
saveButton.on("click", saveLog);

// Call the timeLog
timeLog();


});
