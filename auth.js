function register() {
  const username = document.getElementById("register-user").value;
  const password = document.getElementById("register-pass").value;

  if (!username || !password) {
    setMessage("Please fill in all fields.");
    return;
  }

  const user = { username, password };

  localStorage.setItem("lazyvimUser", JSON.stringify(user));

  setMessage("Account created successfully.");
}

function login() {
  const username = document.getElementById("login-user").value;
  const password = document.getElementById("login-pass").value;

  const storedUser = JSON.parse(localStorage.getItem("lazyvimUser"));

  if (!storedUser) {
    setMessage("No account found.");
    return;
  }

  if (
    username === storedUser.username &&
    password === storedUser.password
  ) {
    localStorage.setItem("loggedIn", "true");
    setMessage("Login successful.");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    setMessage("Incorrect username or password.");
  }
}

function setMessage(message) {
  document.getElementById("auth-message").innerText = message;
}
