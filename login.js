const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("loginEmail").value.trim();
        let password = document.getElementById("loginPassword").value.trim();

        let emailError = document.getElementById("loginEmailError");
        let passwordError = document.getElementById("loginPasswordError");
        let loginError = document.getElementById("loginError");

        // Clear errors
        emailError.innerText = "";
        passwordError.innerText = "";
        loginError.innerText = "";

        let isValid = true;

        if (email === "") {
            emailError.innerText = "Email is required";
            isValid = false;
        }

        if (password === "") {
            passwordError.innerText = "Password is required";
            isValid = false;
        }

        if (!isValid) return;

        // Get users
        let users = JSON.parse(localStorage.getItem("users")) || [];

        let validUser = users.find(
            user => user.email === email && user.password === password
        );

        if (validUser) {
            alert("Login successful!");
            window.location.href = "index.html"; // next page
        } else {
            loginError.innerText = "Invalid email or password";
        }
    });
}


const login = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    let valid = true;

    // Clear errors
    document.getElementById("loginEmailError").innerText = "";
    document.getElementById("loginPassError").innerText = "";
    document.getElementById("invalidError").innerText = "";

    // Validation
    if (email === "") {
      document.getElementById("loginEmailError").innerText = "Email is required";
      valid = false;
    }

    if (password === "") {
      document.getElementById("loginPassError").innerText = "Password is required";
      valid = false;
    }

    if (valid) {
      if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "home.html"; // next page
      } else {
        document.getElementById("invalidError").innerText = "Invalid email or password";
      }
    }
  });
}