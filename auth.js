function signup() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (!username || !password) {
    alert("Fill all fields");
    return;
  }
  const user = {
    username: username,
    email: email,
    password: password,
    images: []
  };
  localStorage.setItem(username, JSON.stringify(user));
  alert("Signup successful");
  window.location.href = "userprofile.html";
}
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem(username));

  if (user && user.password === password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "userprofile.html";
  } else {
    alert("Invalid credentials");
  }
}
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}