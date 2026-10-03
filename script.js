function upDate(previewPic) {
  console.log("Event triggered for image: " + previewPic.alt);
  
  const displayBox = document.getElementById("image");
  displayBox.style.backgroundImage = "url('" + previewPic.src + "')";
  displayBox.innerText = previewPic.alt;
}

function unDo() {
  const displayBox = document.getElementById("image");
  displayBox.style.backgroundImage = "url('')";
  displayBox.innerText = "Hover over or tab to an image below to display here.";
}

function initializeGallery() {
  console.log("Page loaded: Initializing gallery tabindex attributes.");
  
  const images = document.querySelectorAll(".preview");
  
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Added tabindex='0' to image " + (i + 1));
  }
}