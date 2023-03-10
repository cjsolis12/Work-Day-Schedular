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
  


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



//Current Time from DayJs
var currentTime = dayjs().format('h')
console.log(currentTime)

for(var i = 9; i <= 17; i++){
  var hour = i + (currentTime >= 12 ? 12 : 0)
  var hourText = hour == 12 ? "12AM" : (hour > 12 ? `${hour - 12}PM` : `${hour}AM`);
 
  // Hr column for each row made
  var row = $("<div>").attr('id', `hour:-${i}`).addClass("row time-block");
  var hourCol = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(`${hourText}`);
  row.append(hourCol);


    if(hour == currentTime){
        row.addClass("present").css("color", "red")
        } else if(hourText < currentTime){
        row.addClass("future").css("color", "grey")
        }else{
        row.addClass("past").css("color", "red")   
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
let today = dayjs().format('MMM DD, YYYY')
  $('#currentDay').text(today);

    setInterval(function(){
      today = dayjs().format('MMM DD, YYYY')
      $('#currentDay').text(today);
    }, 1000);
});
