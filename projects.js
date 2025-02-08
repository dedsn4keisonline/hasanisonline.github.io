// Typewriter Effect
const typewriterText = "Showcasing Intermediate IT Projects.";
const typewriterElement = document.getElementById("typewriter");

let i = 0;
const typeWriter = () => {
    if (i < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

typeWriter();