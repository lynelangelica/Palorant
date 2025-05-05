document.addEventListener("DOMContentLoaded", function() {
    let playButton = document.getElementById("playButton");

    playButton.addEventListener("mouseover", function() {
        playButton.style.boxShadow = "0 0 15px red";
    });

    playButton.addEventListener("mouseout", function() {
        playButton.style.boxShadow = "none";
    });
});
