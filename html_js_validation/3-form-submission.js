// the javascript for form submission

document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var submitForm = document.getElementById('submitForm');
  
    // Add an event listener to the form for the "submit" event
    submitForm.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Handle the form submission
      handleFormSubmit();
    });
  });
  
  // Function to handle form submission and perform validation
  function handleFormSubmit() {
    // Retrieve the values entered in the form fields
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
  
    var nameValue = nameInput.value.trim();
    var emailValue = emailInput.value.trim();
  
    // Validate the form fields
    if (nameValue === '' || emailValue === '') {
      // If any required field is empty, display an error message
      alert('Please fill in all required fields.');
    } else {
      // If all validations pass, display a success message
      alert('Form submitted successfully!');
      // You can also perform additional actions here, such as submitting the form via AJAX or redirecting the user.
    }
  }
  