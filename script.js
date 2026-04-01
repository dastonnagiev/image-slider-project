const images = [
    "https://picsum.photos/600/300?1",
    "https://picsum.photos/600/300?2",
    "https://picsum.photos/600/300?3",
    "https://picsum.photos/600/300?4",
    "https://picsum.photos/600/300?5"
];

let index = 0;

const img = document.getElementById("slider-image");
const counter = document.getElementById("counter");

function updateSlider() {
    img.src = images[index];
    counter.textContent = `Изображение ${index + 1} из ${images.length}`;
}

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateSlider();
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
});
