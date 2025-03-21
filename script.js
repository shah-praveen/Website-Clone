document.addEventListener("DOMContentLoaded", function () {
    // Toggle Important Links Section
    document.querySelector(".important-links-button").addEventListener("click", function () {
        let section = document.querySelector(".important-links");
        section.style.display = section.style.display === "block" ? "none" : "block";
    });

    // Toggle Announcements Section
    document.querySelector(".announcement-button").addEventListener("click", function () {
        let section = document.querySelector(".announcement-section");
        section.style.display = section.style.display === "block" ? "none" : "block";
    });

    // Image Slider Functionality
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

    // About Us Dropdown Functionality
    let aboutUsBtn = document.getElementById("about-us-btn");
    let aboutUsMenu = document.getElementById("about-us-menu");

    aboutUsBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents page reload
        aboutUsMenu.style.display = aboutUsMenu.style.display === "block" ? "none" : "block";
    });

    // Close About Us Dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!aboutUsBtn.contains(event.target) && !aboutUsMenu.contains(event.target)) {
            aboutUsMenu.style.display = "none";
        }
    });

    // Institution Dropdown Functionality
    let institutionBtn = document.getElementById("institution-btn");
    let institutionMenu = document.getElementById("institution-menu");

    institutionBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents page reload
        institutionMenu.style.display = institutionMenu.style.display === "block" ? "none" : "block";
    });

    // Close Institution Dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!institutionBtn.contains(event.target) && !institutionMenu.contains(event.target)) {
            institutionMenu.style.display = "none";
        }
    });
});
