// the javascript for password strength

document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var passwordForm = document.getElementById('passwordForm');
  
    // Attach a submit event listener to the form
    passwordForm.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Retrieve the password input value
      var passwordInput = document.getElementById('password');
      var password = passwordInput.value;
  
      // Validate the password
      if (validatePassword(password)) {
        // If the password is valid, submit the form
        passwordForm.submit();
      } else {
        // If the password is not valid, display an error message
        var errorElement = document.getElementById('error');
        errorElement.textContent = 'Password does not meet the criteria.';
      }
    });
  });
  
  // Function to validate the password
  function validatePassword(password) {
    // Define the criteria
    var lengthRequirement = /.{8,}/;
    var uppercaseRequirement = /[A-Z]/;
    var lowercaseRequirement = /[a-z]/;
    var digitRequirement = /\d/;
    var specialCharRequirement = /[!@#$%^&*]/;
  
    // Check if the password meets all the criteria
    if (
      lengthRequirement.test(password) &&
      uppercaseRequirement.test(password) &&
      lowercaseRequirement.test(password) &&
      digitRequirement.test(password) &&
      specialCharRequirement.test(password)
    ) {
      return true; // Password is valid
    } else {
      return false; // Password is not valid
    }
  }
  