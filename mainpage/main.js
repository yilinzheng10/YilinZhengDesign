 // Navigation menu circle hover effect
 navItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        const rect = item.getBoundingClientRect();
        const navRect = item.closest('nav').getBoundingClientRect();
        
        const circle = item.querySelector('::before');
        if (circle) {
            circle.style.opacity = '1';
            circle.style.top = `${rect.top - navRect.top + rect.height / 2 - 5}px`;
            circle.style.left = '-15px'; // Adjust this value as needed
        }
    });

    item.addEventListener('mouseleave', () => {
        updateActiveSection(currentSection); // Reset circle to active section
    });
});

// Mouse-following circle that is semi-transparent by default
const mouseCircle = document.createElement("div");
mouseCircle.style.position = "absolute";
mouseCircle.style.width = "20px"; // Adjust size as needed
mouseCircle.style.height = "20px"; // Adjust size as needed
mouseCircle.style.borderRadius = "50%";
mouseCircle.style.backgroundColor = "white";
mouseCircle.style.opacity = "0.5"; // Set to semi-transparent by default
mouseCircle.style.pointerEvents = "none"; // Allows elements below to be clickable
mouseCircle.style.transition = "background-color 0.3s ease, opacity 0.3s ease, transform 0.1s ease";
document.body.appendChild(mouseCircle);

// Track mouse movement to move the circle
document.addEventListener("mousemove", function (e) {
    mouseCircle.style.left = e.pageX - 10 + "px"; // Adjust positioning to center the circle
    mouseCircle.style.top = e.pageY - 10 + "px"; // Adjust positioning to center the circle
});

// Change color when hovering over clickable elements
document.querySelectorAll("a, button, .clickable").forEach(function (element) {
    element.addEventListener("mouseover", function () {
        mouseCircle.style.backgroundColor = "red"; // Change to desired hover color for clickable items
        mouseCircle.style.transform = "scale(1.5)"; // Optional: enlarge the circle on hover
        mouseCircle.style.opacity = "0.5"; // Maintain semi-transparent opacity
    });

    element.addEventListener("mouseout", function () {
        mouseCircle.style.backgroundColor = "black"; // Revert to original color
        mouseCircle.style.transform = "scale(1)"; // Revert to original size
        mouseCircle.style.opacity = "0.5"; // Maintain semi-transparent opacity
    });
});