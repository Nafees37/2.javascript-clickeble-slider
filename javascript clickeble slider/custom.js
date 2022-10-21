let imageArray = ["images/0.jpg", "images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"];

let arrayIndex_number = 0;

let imageLength = imageArray.length;

let imageSelect = document.getElementById("image");

function nextFun() {
    arrayIndex_number++;

    if (arrayIndex_number >= imageLength) {
        arrayIndex_number = 0;

        imageSelect.src = imageArray[arrayIndex_number];
    } else {
        imageSelect.src = imageArray[arrayIndex_number];
    }
}

function prevFun() {
    arrayIndex_number--;

    if (arrayIndex_number < 0) {
        arrayIndex_number = imageLength - 1;

        imageSelect.src = imageArray[arrayIndex_number];
    } else {
        imageSelect.src = imageArray[arrayIndex_number];
    }
}
