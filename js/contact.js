const form = document.getElementById("form");
const sender = document.getElementById("name");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const msg = document.getElementById("message");


function checkInputs() {
    const senderValue = sender.value;
    const subjectValue = subject.value;
    const emailValue = email.value;
    const msgValue = msg.value;

    if (senderValue === "") {
        setErrorFor(sender, "Name is required.");
    } else if (senderValue.length < 5) {
        setErrorFor(sender, "Name must be least 5 characters long.");
    } else {
        setSuccessFor(sender);
    }

    if (subjectValue === "") {
        setErrorFor(subject, "Subject is required.");
    } else if (subjectValue.length < 5) {
        setErrorFor(subject, "Subject must have at least 5 characters.");
    } else {
        setSuccessFor(subject);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email is required.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Please insert a valid email.");
    } else {
        setSuccessFor(email);
    }

    if (msgValue === "") {
        setErrorFor(msg, "Message is required.");
    } else if (msgValue.length < 10) {
        setErrorFor(msg, "Must have at least 10 characters.");
    } else {
        setSuccessFor(msg);
    }
    

    const formControls = form.querySelectorAll(".form-control");

    form.addEventListener('submit', (e) => {
        const formIsValid = [...formControls].every((formControl) => {
            return formControl.className == "form-control success";
          });
      
          if (!formIsValid) {
             e.preventDefault();
              console.log("Form is invalid");
      
          } else {
              console.log("Form is valid");
          }

    });
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    input.style.borderColor = "#e74c3e";
    formControl.className = "form-control error";
};

function setSuccessFor(input) {
    const formControl = input.parentElement;
    input.style.borderColor = "#2ecc71";
    formControl.className = "form-control success";
};

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
};

