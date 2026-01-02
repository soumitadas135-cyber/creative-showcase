const userName = localStorage.getItem("loggedInUser");
if (!userName) {
  window.location.href = "login.html";
}
const user = JSON.parse(localStorage.getItem(userName));
const gallery = document.getElementById("myGallery");
function showImages() {
  gallery.innerHTML = "";
  user.images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    gallery.appendChild(image);
  });
}
showImages();
function uploadImage() {
  const file = document.getElementById("imageInput").files[0];
  const reader = new FileReader();

  reader.onload = function () {
    user.images.push(reader.result);
    localStorage.setItem(userName, JSON.stringify(user));
    showImages();
  };
  if (file) reader.readAsDataURL(file);
}
function goToPublicProfile() {
  const username = localStorage.getItem("loggedInUser");

  if (!username) {
    alert("User not logged in");
    return;
  }

  window.location.href =
    "userpublicpage.html?user=" + encodeURIComponent(username);
}