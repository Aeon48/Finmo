document.addEventListener('DOMContentLoaded', function() {
  var countryInput = document.getElementById('countryInput');
  var countryDropdown = document.getElementById('countryDropdown');

  // Show dropdown when input field is focused
  countryInput.addEventListener('focus', function() {
    countryDropdown.style.display = 'block';
  });

  // Hide dropdown when input field loses focus
  countryInput.addEventListener('blur', function() {
    countryDropdown.style.display = 'none';
  });

  // Set selected country when dropdown item is clicked
  countryDropdown.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      countryInput.value = event.target.textContent;
      countryDropdown.style.display = 'none';
    }
  });
});
