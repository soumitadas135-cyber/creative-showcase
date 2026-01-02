const gallery = document.getElementById("gallery");
for (let key in localStorage) {
  try {
    const user = JSON.parse(localStorage.getItem(key));
    if (user && user.images) {
      user.images.forEach(img => {
        const image = document.createElement("img");
        image.src = img;
        gallery.appendChild(image);
      });
    }
  } catch {}
}