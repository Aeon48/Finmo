function togglePasswordVisibility() {
  var passwordField = document.getElementById("passwordField");
  var eyeIcon = document.querySelector(".eye-icon i");
  
  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}
