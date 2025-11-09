//Carousel Script

const slidesContainer = document.getElementById("project-slides");
const dotsContainer = document.getElementById("project-dots");
const projects = slidesContainer.children;
let currentIndex = 0;
let lastVisibleCount = getVisibleCount(); // track last visible count so we can recalc index on resize

// Helper: how many slides visible at current viewport width
function getVisibleCount() {
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 640) return 2; // sm/md
    return 1; // mobile
}

// Create dots (pages)
function createDots() {
    dotsContainer.innerHTML = "";
    const visibleCount = getVisibleCount();
    const totalDots = Math.ceil(projects.length / visibleCount);

    // clamp currentIndex so it never exceeds new last page
    currentIndex = Math.min(currentIndex, Math.max(0, totalDots - 1));

    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement("span");
        dot.className =
            "h-3 w-3 rounded-full bg-blue-300 cursor-pointer transition-all";
        dot.addEventListener("click", () => moveToSlide(i));
        dotsContainer.appendChild(dot);
    }

    lastVisibleCount = visibleCount; // update tracker
    updateDots();
}


function updateDots() {
    [...dotsContainer.children].forEach((dot, index) => {
        dot.classList.toggle("bg-blue-700", index === currentIndex);
        dot.classList.toggle("w-4", index === currentIndex);
    });
}

function moveToSlide(index) {
    const visibleCount = getVisibleCount();
    const totalDots = Math.ceil(projects.length / visibleCount);
    // clamp requested index
    const clampedIndex = Math.max(0, Math.min(index, totalDots - 1));

    const slideWidth = slidesContainer.children[0].offsetWidth;
    slidesContainer.style.transform = `translateX(-${clampedIndex * slideWidth * visibleCount}px)`;

    currentIndex = clampedIndex;
    updateDots();
}


window.addEventListener("resize", () => {
    // Recalculate after grid finishes layout changes
    setTimeout(() => {
        const newVisible = getVisibleCount();
        const oldVisible = lastVisibleCount;

        if (newVisible !== oldVisible) {
            const currentItemIndex = currentIndex * oldVisible;
            currentIndex = Math.floor(currentItemIndex / newVisible);
        }

        createDots();

        // Ensure DOM updates and measure correct width
        requestAnimationFrame(() => {
            const firstSlide = slidesContainer.children[0];
            if (!firstSlide) return;
            const slideWidth = firstSlide.offsetWidth;
            slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth * getVisibleCount()}px)`;
            updateDots();
        });
    }, 150); // small delay allows layout to stabilize
});

// Initialize
createDots();