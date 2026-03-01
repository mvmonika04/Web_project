const form = document.getElementById("form");
const username = document.getElementById("Username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    // Username
    if (usernameValue === "") {
        setError(username, "Username is required");
    } else {
        setSuccess(username);
    }

    // Email
    if (emailValue === "") {
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Enter a valid email");
    } else {
        setSuccess(email);
    }

    // Password
    if (passwordValue === "") {
        setError(password, "Password is required");
    } else if (passwordValue.length < 6) {
        setError(password, "Password must be at least 6 characters");
    } else {
        setSuccess(password);
    }

    // Confirm Password
    if (cpasswordValue === "") {
        setError(cpassword, "Confirm password is required");
    } else if (cpasswordValue !== passwordValue) {
        setError(cpassword, "Passwords do not match");
    } else {
        setSuccess(cpassword);
    }
}

// Show error
function setError(input, message) {
    const inputGroup = input.parentElement;
    const errorDisplay = inputGroup.querySelector(".error");

    errorDisplay.innerText = message;
    input.style.borderColor = "red";
}

// Show success
function setSuccess(input) {
    const inputGroup = input.parentElement;
    const errorDisplay = inputGroup.querySelector(".error");

    errorDisplay.innerText = "";
    input.style.borderColor = "green";
}

// Email validation function
function isValidEmail(email) {
    const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return re.test(email);
}



const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let valid = true;

    // Clear old errors
    document.getElementById("userError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";

    // Validation
    if (username === "") {
      document.getElementById("userError").innerText = "Username is required";
      valid = false;
    }

    if (email === "") {
      document.getElementById("emailError").innerText = "Email is required";
      valid = false;
    }

    if (password === "") {
      document.getElementById("passError").innerText = "Password is required";
      valid = false;
    }

    if (valid) {
      // Store in localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      alert("Registered Successfully!");
      window.location.href = "login.html";
    }
  });
}