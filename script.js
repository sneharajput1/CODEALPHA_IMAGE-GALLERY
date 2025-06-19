const images = [
  "jk2.jpg",
  "SUGA1.webp",
  "jk1.jpg",
  "SUGA2.webp",
  "rm1.webp",
  "rm2.jpg",
  "jhope.jpg",
 "jin.webp",
 "v.jpg",
 "jimin.webp",




];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(n) {
  currentIndex += n;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function filterImages(category) {
  const items = document.querySelectorAll(".gallery-item");
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
