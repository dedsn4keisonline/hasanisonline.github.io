document.addEventListener("DOMContentLoaded", function() {
    // Typewriter Effect
    const typewriterElement = document.getElementById("typewriter");
    const text = "Cybersecurity and IT";
    let i = 0;
    let speed = 150; // Typing speed (milliseconds)

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            typewriterElement.style.borderRight = "none"; // Remove the blinking cursor
        }
    }

    typeWriter();
});