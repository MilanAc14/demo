var nameError = document.getElementById('name-error');
var addressError = document.getElementById('address-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var dateError = document.getElementById('dob-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateAddress() {
    var address = document.getElementById('contact-address').value;
    if (address.length == 0) {
        addressError.innerHTML = "Address is required";
        return false;
    }
    if (!address.match(/^\w+,\w+,[0-9]{5}$/)) {
        addressError.innerHTML = "write full address";
        return false;
    }
    addressError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone is required";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "should be 10 digit";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "only digits";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}
function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    //it should be alphabet may contain . _ - @ some alphabet . aphabet
    // if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    if (!email.match(/^\w+@\w+.\w{3}$/)) {
        emailError.innerHTML = "write valid email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 10;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + 'more  Characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateDate() {
    var birth = document.getElementById('contact-birth').value;
    var regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(birth)) {
        birthError.innerHTML = "write valid date";
        return false; // Invalid format
    }

    var parts = dob.split('/');
    var month = parseInt(parts[0], 10);
    var day = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Check if month is between 1 and 12
    if (month < 1 || month > 12) {
        return false; // Invalid month
    }

    // Check if day is valid for the given month
    var maxDay = new Date(year, month, 0).getDate();
    if (day < 1 || day > maxDay) {
        return false; // Invalid day
    }

    // Check if year is within a reasonable range (e.g., 1900 to current year)
    var currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear) {
        return false; // Invalid year
    }

    dateError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

    // All validation checks passed
    return true;
}




function validateForm() {
    if ((!validateName()) || (!validatePhone()) || (!validateEmail()) || (!validateMessage())) {
        submitError.style.display = 'block';
        submitError.innerHTML = "please fix errors  to post";
        setTimeout(function () { submitError.style.display = 'none'; }, 2000);
        return false;
    }
}
