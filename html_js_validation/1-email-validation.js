// the email validation part

document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var emailForm = document.getElementById('emailForm');
  
    // Attach a submit event listener to the form
    emailForm.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Retrieve the email input value
      var emailInput = document.getElementById('email');
      var email = emailInput.value;
  
      // Validate the email
      if (validateEmail(email)) {
        // If the email is valid, submit the form
        emailForm.submit();
      } else {
        // If the email is not valid, display an error message
        var errorElement = document.getElementById('error');
        errorElement.textContent = 'Please enter a valid email address.';
      }
    });
  });
  
  // Function to validate the email format
  function validateEmail(email) {
    // Define a regular expression for a standard email format
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check if the email follows the standard email format
    return emailFormat.test(email);
  }
  