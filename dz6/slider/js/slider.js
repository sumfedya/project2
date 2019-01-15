var imgArray = ["SW600.jpg", "Burgman650.jpg", "TMAX.jpg", "C650GT.jpeg"];
var indexOfImg = 0;

function init() {
    var next = document.getElementById("next");
    next.onclick = changeSlide;
    var previous = document.getElementById("previous");
    previous.onclick = changeSlide;
}

function changeSlide(obj) {
    var imgElement = document.getElementById("big_picture");

    if (obj.target.id == "next") {
        indexOfImg++;
    } else {
        indexOfImg--;
    }
    
    if (indexOfImg == imgArray.length) {
        indexOfImg = 0;
    } else if (indexOfImg == -1) {
        indexOfImg = (imgArray.length - 1);
    }

    imgElement.src = "img/" + imgArray[indexOfImg];
}

window.onload = init;
