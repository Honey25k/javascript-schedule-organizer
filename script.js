
$(document).ready(function () {

  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

  $('.saveBtn').on('click', function (){

    var userText = $(this).siblings('.description').val();
    var timeBlock = $(this).parent().attr('id');

    localStorage.setItem(timeBlock, userText);


    setTimeout(function () {
      $('.notice').addClass('show');
    },5000);
  });

  function newHour() {

    var existingHour = dayjs().hour();

    $('.time-block').each(function (){
      var timeId = parseInt($(this).attr('id').split('-')[2]);

      if(timeId < existingHour) {
        $(this).addClass('past');
      }
      else if(timeId === existingHour){
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  newHour();

  setInterval(newHour, 15000);


  $('#first-hour-9 .description').val(localStorage.getItem('first-hour-9'));
  $('#second-hour-10 .description').val(localStorage.getItem('second-hour-10'));
  $('#third-hour-11 .description').val(localStorage.getItem('third-hour-11'));
  $('#lunch-hour-12 .description').val(localStorage.getItem('lunch-hour-12'));
  $('#fifth-hour-13 .description').val(localStorage.getItem('fifth-hour-13'));
  $('#sixth-hour-14 .description').val(localStorage.getItem('sixth-hour-14'));
  $('#seventh-hour-15 .description').val(localStorage.getItem('seventh-hour-15'));
  $('#eighth-hour-16 .description').val(localStorage.getItem('eighth-hour-16 '));
  $('#last-hour-17 .description').val(localStorage.getItem('last-hour-17'));


 
});




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
