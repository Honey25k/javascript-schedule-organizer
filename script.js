
$(document).ready(function () {
  // setting the day, month, date and year with Day.js 
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

  // current time
  $('#currentTime').text(dayjs().format('HH:mm'));

  // on click, save button will listen. 
  $('.saveBtn').on('click', function (){
    // get (.description) siblings and parent (id)
    var userText = $(this).siblings('.description').val();
    var timeBlock = $(this).parent().attr('id');

    localStorage.setItem(timeBlock, userText); //this saves the above declared varibles in localstorage

    //adding class "show" to ".notice" and telling it to remove the class after 5 seconds. 
    setTimeout(function () {
      $('.notice').addClass('show');
    },5000);
  });

  function newHour() {
    // using dayjs to update hour 
    var existingHour = dayjs().hour();

    /* part of function where a string gets converted into int 
     so it can be found in the class id of that timeblock */
    $('.time-block').each(function (){
      var timeId = parseInt($(this).attr('id').split('-')[2]); // split to string number 9 
      /* if statement for timeid being less than existingHour 
      then class'past' will be added and color will switch to grey*/ 
      if(timeId < existingHour) {
        $(this).addClass('past');
      } /* removes past and changes to class 'present' with red color if time = existing hour.
       if existing hour is not the current time statement will remove classes 'past' and 'present'*/ 
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
  // updates to new hour 
  newHour();

  // checks if current time needs to be updated 
  setInterval(newHour, 15000);

  // shows your stored data from localstorage   
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