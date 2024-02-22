document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let count = 0;

    function nextSlide() {
        count++;
        if (count > document.querySelectorAll(".slider img").length - 1) {
            count = 0;
        }
        updateSlider();
    }

    function prevSlide() {
        count--;
        if (count < 0) {
            count = document.querySelectorAll(".slider img").length - 1;
        }
        updateSlider();
    }

    function updateSlider() {
        const width = document.querySelector(".slider img").clientWidth;
        slider.style.transform = "translateX(" + -width * count + "px)";
    }

    // Navigation Controls Event Listeners
    document.getElementById("prevBtn").addEventListener("click", prevSlide);
    document.getElementById("nextBtn").addEventListener("click", nextSlide);
});
