document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".important-links-button").addEventListener("click", function() {
        let section = document.querySelector(".important-links");
        section.style.display = section.style.display === "block" ? "none" : "block";
    });

    document.querySelector(".announcement-button").addEventListener("click", function() {
        let section = document.querySelector(".announcement-section");
        section.style.display = section.style.display === "block" ? "none" : "block";
    });

    let images = document.querySelectorAll(".hero img");
    let currentIndex = 0;

    function changeImage() {
        images.forEach((img, index) => {
            img.classList.remove("active");
            if (index === currentIndex) {
                img.classList.add("active");
            }
        });
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeImage();
    setInterval(changeImage, 3000);
});
