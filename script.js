document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!"); // Debugging log

    // Get elements
    let openButton = document.querySelector("#openCard");
    let changeButton = document.querySelector("#changeMessage");
    let card = document.querySelector(".card");
    let message = document.querySelector("#customMessage");

    // Check if elements exist
    if (!openButton || !changeButton || !card || !message) {
        console.error("One or more elements are missing!");
        return;
    }

    // Add event listener for "Tap to Open"
    openButton.addEventListener("click", function () {
        console.log("Tap to Open clicked!");
        card.classList.add("open");
    });

    
});
document.addEventListener("DOMContentLoaded", function () {
    let openButton = document.querySelector("#openCard");
    let audio = new Audio("hari_raya_song.mp3"); // Replace with your song file

    openButton.addEventListener("click", function () {
        document.querySelector(".card").classList.add("open");
        audio.play();
    });
});
function createKetupat() {
    let ketupat = document.createElement("div");
    ketupat.textContent = "🟩"; // Ketupat emoji
    ketupat.classList.add("ketupat"); // Add a class instead of inline styles
    document.body.appendChild(ketupat);

    // Random position
    ketupat.style.left = Math.random() * window.innerWidth + "px";

    // Remove after animation ends
    setTimeout(() => { ketupat.remove(); }, 3000);
}

// Create ketupat every 500ms
setInterval(createKetupat, 500);

