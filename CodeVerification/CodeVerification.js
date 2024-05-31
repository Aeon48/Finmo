document.addEventListener('DOMContentLoaded', function() {
  var countdownDisplay = document.getElementById('countdown');

  var seconds = 60;

  var countdownInterval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    seconds;
    countdownDisplay.textContent = seconds;

    if (seconds <= 0) {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = 'Time Expired';
    }
  }
});
