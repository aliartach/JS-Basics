let images = [
    document.querySelector("#image1"),
    document.querySelector("#image2"),
    document.querySelector("#image3"),
    document.querySelector("#image4"),
    document.querySelector("#image5")
];


function changeImage(event) {
    let imageElement = event.target;
    let imageName = imageElement.id;

    imageElement.src = `/javascript-basics-02/step 5/images/${imageName}_2.jpg`;
}

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", changeImage);
}