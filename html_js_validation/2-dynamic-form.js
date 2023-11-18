// the dynamic form validation

document.addEventListener('DOMContentLoaded', function () {
    // Get the form element and input container
    var dynamicForm = document.getElementById('dynamicForm');
    var numFieldsSelect = document.getElementById('numFields');
    var inputContainer = document.getElementById('inputContainer');
  
    // Attach an input event listener to the dropdown menu
    numFieldsSelect.addEventListener('input', function () {
      // Get the selected value from the dropdown menu
      var selectedValue = parseInt(numFieldsSelect.value);
  
      // Generate and display the input fields based on the selected value
      generateInputFields(selectedValue);
    });
  
    // Attach a submit event listener to the form
    dynamicForm.addEventListener('submit', function (event) {
      // Validate the form before submission
      if (!validateForm()) {
        // If the form is not valid, prevent the default form submission
        event.preventDefault();
      }
    });
  });
  
  // Function to generate input fields dynamically
  function generateInputFields(numFields) {
    // Clear existing input fields
    inputContainer.innerHTML = '';
  
    // Generate new input fields
    for (var i = 1; i <= numFields; i++) {
      var inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.name = 'field' + i;
      inputContainer.appendChild(inputField);
    }
  }
  
  // Function to validate the form before submission
  function validateForm() {
    // Get all input fields within the inputContainer
    var inputFields = inputContainer.getElementsByTagName('input');
  
    // Check if any field is empty
    for (var i = 0; i < inputFields.length; i++) {
      if (inputFields[i].value.trim() === '') {
        // If any field is empty, display an error message and return false
        alert('Please fill in all fields.');
        return false;
      }
    }
  
    // If all fields are filled, return true
    return true;
  }
  