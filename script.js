const button = document.getElementById("likeButton");

button.addEventListener("click", function () {
  alert("You liked this! ");

  
  button.classList.toggle("liked");

  
  if (button.classList.contains("liked")) {
    button.textContent = " Liked";
  } else {
    button.textContent = " Like";
  }
});
