const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
];

let index = 0;

// Получаем элементы
const img = document.getElementById("slider-image");
const counter = document.getElementById("counter");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// Обновление слайдера
function updateSlider() {
    img.src = images[index];
    counter.textContent = "Изображение " + (index + 1) + " из " + images.length;
}

// Кнопка вперед
nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateSlider();
});

// Кнопка назад
prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
});
