// HTML elements
let form = document.getElementById('myForm');
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let email = document.getElementById('email');
let radioDiv1 = document.querySelector('.innerRadioDiv1')
let radioDiv2 = document.querySelector('.innerRadioDiv2')
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let radioSvg1 = document.getElementById('radioSvg1');
let radioSvg2 = document.getElementById('radioSvg2');
let checkbox = document.getElementById('checkbox');
let message = document.querySelector('textarea[name="message"]');
// errors
let fNameError = document.getElementById('fNameError');
let lNameError = document.getElementById('lNameError');
let emailError = document.getElementById('emailError');
let radioError = document.getElementById('radioError');
let messageError = document.getElementById('messageError');
let checkboxError = document.getElementById('checkboxError');
// success message
let success = document.getElementById('successMessage');

// radio checked styling
setInterval(function() {
  if (radio1.checked) {
    radioDiv1.style.backgroundColor = 'hsl(170, 68%, 82%)';
    radioDiv1.style.border = '1px solid hsl(169, 82%, 27%)';
    radio1.style.position = 'absolute';
    radio1.style.opacity = '0';
    radioSvg1.style.display = 'inline';
  } else {
    radioDiv1.style.backgroundColor = 'white';
    radioDiv1.style.border = '1px solid grey';
    radio1.style.position = 'relative';
    radio1.style.opacity = '1';
    radioSvg1.style.display = 'none';
  }

  if (radio2.checked) {
    radioDiv2.style.backgroundColor = 'hsl(170, 68%, 82%)';
    radioDiv2.style.border = '1px solid hsl(169, 82%, 27%)';
    radio2.style.position = 'absolute';
    radio2.style.opacity = '0';
    radioSvg2.style.display = 'inline';
  } else {
    radioDiv2.style.backgroundColor = 'white';
    radioDiv2.style.border = '1px solid grey';
    radio2.style.position = 'relative';
    radio2.style.opacity = '1';
    radioSvg2.style.display = 'none';
  }
}, 0.1);

// prevent form from submitting when enter key is pressed on a radio input
form.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && document.activeElement.type === 'radio') {
    event.preventDefault(); // prevent form from submitting 
    document.activeElement.checked = true; // activates radio button on enter
  }
});

// prevents form from submitting when enter key is pressed on checkbox input
form.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && document.activeElement.type === 'checkbox') {
    event.preventDefault(); // prevent form from submitting
    if (document.activeElement.checked === true) { // check if unchecked, uncheck if checked
      document.activeElement.checked = false;
    } else {
      document.activeElement.checked = true;
    }
  }
});

// validation functionality
form.addEventListener('submit', function(event) {
  
  let emailValidation = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  let isValid = true;

  if (fName.value.length < 2) {
    event.preventDefault();
    fName.style.border = '1px solid red';
    fNameError.style.display = 'block';
    isValid = false;
  } else {
    fName.style.border = '1px solid grey';
    fNameError.style.display = 'none';
  }
  
  if (lName.value.length < 2) {
    event.preventDefault();
    lName.style.border = '1px solid red';
    lNameError.style.display = 'block';
    isValid = false;
  } else {
    lName.style.border = '1px solid grey';
    lNameError.style.display = 'none';
  } 

  if (!emailValidation.test(email.value)) {
    event.preventDefault();
    email.style.border = '1px solid red';
    emailError.style.display = 'block';
    isValid = false;
  } else {
    email.style.border = '1px solid grey';
    emailError.style.display = 'none';
  }
  
  if (!radio1.checked && !radio2.checked) {
    event.preventDefault();
    radioError.style.display = 'block';
    isValid = false;
  } else {
    radioError.style.display = 'none';
  }

  if (message.value.trim().length === 0) {
    event.preventDefault();
    messageError.style.display = 'block';
    message.style.border = '1px solid red';
    isValid = false;
  } else {
    messageError.style.display = 'none';
    message.style.border = '1px solid grey';
  }

  if (!checkbox.checked) {
    event.preventDefault();
    checkboxError.style.display = 'block';
    isValid = false;
  } else {
    checkboxError.style.display = 'none';
  }

  if (isValid) {
    event.preventDefault();
    // event.currentTarget.submit(); // send form 
    fName.value = '';
    lName.value = '';
    email.value = '';
    radio1.checked = false;
    radio2.checked = false;
    message.value = '';
    checkbox.checked = false;

    success.style.display = 'block';

    setTimeout(() => {
      success.style.display = 'none';  
    }, 2000);
  }
});