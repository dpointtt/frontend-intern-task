const gridItems = document.getElementsByClassName("image");

let overlay = document.getElementById("overlay");
let imageContainer = document.getElementById("image-container");
let imageToShow = document.getElementById("image-to-show");
let closeButton = document.getElementById("overlay-close");

function imageViewListener() {
    for (let i = 0; i < gridItems.length; i++) {
        let image = gridItems[i].getElementsByTagName("img")[0];
        image.addEventListener("click", function() {
            imageToShow.src = this.src;
            overlay.style.display = "block";
            imageContainer.style.display = "block";

            closeButton.addEventListener("click", function() {
                imageContainer.style.display = "none";
                overlay.style.display = "none";
            });
        });
    }
}

imageViewListener()
