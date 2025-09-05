// text-rotation logic: 
const phrases = [
    "A Fresher in Computer Science & Engineering.",
    "Looking for opportunity in Developing Sector.",
    "Backend enthusiast.",
    "Experienced with Spring Boot Core and Nest.js.",
    "Also Familiar with Next.js"
];

let currentPhrase = 0;
const animatedText = document.getElementById("animated-text");

function showNextPhrase() {
    // Fade out
    animatedText.classList.add("opacity-0");

    setTimeout(() => {
        // Change text
        animatedText.textContent = phrases[currentPhrase];
        // Fade in
        animatedText.classList.remove("opacity-0");

        // Move to next phrase
        currentPhrase = (currentPhrase + 1) % phrases.length;
    }, 500); // match transition duration
}

// Initialize first phrase
animatedText.textContent = phrases[currentPhrase];
currentPhrase++;

// Loop every 3 seconds
setInterval(showNextPhrase, 2000);


sections.forEach((section) => {
    observer.observe(section);
});

//github button click
document.getElementById('btn-git').addEventListener('click', ()=> {
    console.log('clicked'); 
})