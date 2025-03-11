document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to the Gaming and Chat Website!");
});
<script src="script.js"></script>
document.addEventListener("DOMContentLoaded", function() {
    let box = document.getElementById("game-box");
    let scoreDisplay = document.getElementById("score");
    let score = 0;

    function moveBox() {
        let container = document.getElementById("game-container");
        let maxX = container.clientWidth - box.clientWidth;
        let maxY = container.clientHeight - box.clientHeight;

        let newX = Math.floor(Math.random() * maxX);
        let newY = Math.floor(Math.random() * maxY);

        box.style.left = newX + "px";
        box.style.top = newY + "px";
    }

    box.addEventListener("click", function() {
        score++;
        scoreDisplay.textContent = score;
        moveBox();
    });

    // Start moving the box every second
    setInterval(moveBox, 1000);
});
