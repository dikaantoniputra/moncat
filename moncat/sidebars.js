/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()


function updateClock() {
  var now = new Date();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var day = days[now.getDay()];
  var date = now.getDate();
  var month = months[now.getMonth()];
  var year = now.getFullYear();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var meridian = hours < 12 ? 'AM' : 'PM';
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  var timeString = hours + ':' + minutes + ':' + seconds + ' ' + meridian;
  var dateTimeString = day + ', ' + month + ' ' + date + ', ' + year + ' - ' + timeString;
  document.getElementById('clock').textContent = dateTimeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();


  // Function to check if the screen size is less than or equal to 992px (indicating mobile view)
  function isMobileView() {
    return window.innerWidth <= 992;
  }

  // Function to handle element visibility based on screen size
  function handleVisibility() {
    if (isMobileView()) {
      document.getElementById('desktop').style.display = 'none';
      document.getElementById('mobile').style.display = 'block';
    } else {
      document.getElementById('desktop').style.display = 'block';
      document.getElementById('mobile').style.display = 'none';
    }
  }

  // Initial check and setup on page load
  handleVisibility();

  // Event listener for window resize
  window.addEventListener('resize', function() {
    handleVisibility();
  });
