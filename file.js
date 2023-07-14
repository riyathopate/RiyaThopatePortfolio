function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//type

// Define the typing effect function
function typeEffect(element, phrases, speed) {
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = "";
    let isDeleting = false;

    // Start typing effect
    function type() {
        if (phraseIndex === phrases.length) {
            phraseIndex = 0;
        }

        currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            element.innerHTML = currentPhrase.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            element.innerHTML = currentPhrase.substring(0, letterIndex + 1);
            letterIndex++;
        }

        if (!isDeleting && letterIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            phraseIndex++;
            setTimeout(type, 500);
        } else {
            setTimeout(type, speed);
        }
    }

    // Start typing effect on page load
    window.onload = function() {
        type();
    };
}

// Call the typing effect function with multiple phrases
const element = document.querySelector("#typing-effect");
const phrases = ["a Web-Developer.", "an Engineer.", "a Data Analyst."];
typeEffect(element, phrases, 100);

// JavaScript code for showing and hiding popups
function showPopup(category) {
    var popup = document.getElementById("popup-" + category);
    popup.style.display = "flex";
}

function hidePopup(category) {
    var popup = document.getElementById("popup-" + category);
    popup.style.display = "none";
}