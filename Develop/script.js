// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //Current Time from DayJs
  var currentTime = dayjs().format('H')
 
  
// Looping from 9-17 to create each time block
for(var i = 9; i <= 17; i++){
  var hourText = i == 12 ? "12PM" : (i > 12 ? `${i - 12}PM` : `${i}AM`);
  var divId = 'hour-' + i;

  // Hr column for each row made
  var row = $("<div>").attr('id', divId).addClass("row time-block");
  var hourCol = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(`${hourText}`);
  row.append(hourCol);

  // Description for each row made
  var description = $("<textarea>").addClass("col-8 col-md-10 description")
  var storedUserInput = localStorage.getItem(divId);
  if (storedUserInput !== null) {
    description.val(storedUserInput)
  }
  row.append(description)

  // Save Button for each new row 
  var saveButton = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").append($("<i>").addClass("fas fa-save").attr("aria-hidden", true));
  row.append(saveButton)
  $(".container-fluid.px-5").append(row)

// Condition to check past, present, and future time blocks
    if(i == currentTime){
      row.addClass("present").css("background-color", "#e08071")
      } else if(i < currentTime){
      row.addClass("past").css("background-color", "#c6c6c3")
      }else{
      row.addClass("future").css("background-color", "#85e071")   
  }
//click event saves local storage with its appropriate time block 
  $('.saveBtn').click(function(){
    var timeBlock = $(this).parent().attr('id');
    var textArea = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlock, textArea)
  })  
}

// Add code to display the current date in the header of the page.
let today = dayjs().format('dddd, MMMM D')
  $('#currentDay').text(today);
});
