const button = document.getElementById("likeButton");

button.addEventListener("click", function () {
  alert("You liked this! ");

  // toggle class
  button.classList.toggle("liked");

  // change text
  if (button.classList.contains("liked")) {
    button.textContent = " Liked";
  } else {
    button.textContent = " Like";
  }
});
