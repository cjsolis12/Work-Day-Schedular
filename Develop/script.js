// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
console.log("hey")
$(".saveBtn").click(function(){
  var textArea = $(this).prev(".description").val();
  localStorage.setItem("calendarEvent", textArea)
  alert("is this")
})




//Current Time from DayJs
var currentTime = dayjs().format('H')
console.log(currentTime)

for(var i = 9; i <= 17; i++){
  var hourText = i == 12 ? "12PM" : (i > 12 ? `${i - 12}PM` : `${i}AM`);
 console.log(hourText)
  // Hr column for each row made
  var row = $("<div>").attr('id', `hour:${i}`).addClass("row time-block");
  var hourCol = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(`${hourText}`);
  row.append(hourCol);
 
  // Condition to check past, present, and future time blocks
    if(i == currentTime){
        row.addClass("present").css("background-color", "#e08071")
        } else if(i < currentTime){
        row.addClass("past").css("background-color", "#c6c6c3")
        }else{
        row.addClass("future").css("background-color", "#85e071")   
    }

  // Description for each row made
  var description = $("<textarea>").addClass("col-8 col-md-10 description")
  row.append(description)

  // Save Button for each new row 
  var saveButton = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").append($("<i>").addClass("fas fa-save").attr("aria-hidden", true));
  row.append(saveButton)
  
  $(".container-fluid.px-5").append(row)
}

//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //


// Add code to display the current date in the header of the page.
let today = dayjs().format('dddd, MMMM D')
  $('#currentDay').text(today);
});
