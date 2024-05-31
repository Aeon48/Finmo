function togglePasswordVisibility(inputId) {
  var inputField = document.getElementById(inputId);
  var eyeIcon = document.getElementById(`eyeIcon${inputId === 'newPassword' ? '1' : '2'}`);

  if (inputField.type === 'password') {
    inputField.type = 'text';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  } else {
    inputField.type = 'password';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  }
}

function validatePasswords() {
  var newPassword = document.getElementById('newPassword').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if (newPassword === confirmPassword) {
    alert('Passwords match!');
    // Add code to proceed with password reset here
  } else {  
    alert('Passwords do not match. Please try again.');
  }
}
