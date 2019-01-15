function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}

function changeBigPicture(eventObj) {
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var eventElement = eventObj.target;
    var imageNameParts = eventElement.id.split("_");
    var src = "img/big/" + imageNameParts[1] + ".jpg";
    var imageDomElement = document.createElement("img");
    imageDomElement.onerror = imgError;
    imageDomElement.src = src;
    appDiv.appendChild(imageDomElement);
}

function imgError() {
    alert('The image could not be loaded.');
    this.style.visibility = "hidden";
}

window.onload = init;
