const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Make all images clickable
const allImages = document.querySelectorAll("img");
allImages.forEach(img => {
  img.classList.add("clickable-img");
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
