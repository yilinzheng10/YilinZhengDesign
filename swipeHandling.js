document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('nav li a');
    const footer = document.querySelector('.footer');
    let currentSection = 0;

    // Typing Effect
    const typingText = "by no means anything technological";
    const typingElement = document.getElementById('typing');
    let index = 0;
    const typingSpeed = 100;

    function typeWriter() {
        if (index < typingText.length) {
            typingElement.textContent += typingText.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(() => {
                typingElement.textContent = "the essence of technology is ";
                index = 0;
                typeWriter();
            }, 2000);
        }
    }
    typeWriter();

    // Mouse-Following Circle
    const mouseCircle = document.createElement('div');
    mouseCircle.classList.add('mouse-circle');
    document.body.appendChild(mouseCircle);

    document.addEventListener('mousemove', function (e) {
        mouseCircle.style.left = `${e.pageX - 5}px`; /* Adjusted for smaller circle */
        mouseCircle.style.top = `${e.pageY - 5}px`;
    });

    // Draggable Navigation Menu
    const draggableNav = document.getElementById('draggable-nav');
    if (draggableNav) {
        let isDragging = false;
        let offsetX = 0, offsetY = 0;
        draggableNav.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - draggableNav.getBoundingClientRect().left;
        offsetY = e.clientY - draggableNav.getBoundingClientRect().top;
        draggableNav.style.cursor = 'grabbing';
        });
        document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            draggableNav.style.left = (e.clientX - offsetX) + 'px';
            draggableNav.style.top = (e.clientY - offsetY) + 'px';
        }
        });
        document.addEventListener('mouseup', () => {
        isDragging = false;
        draggableNav.style.cursor = 'grab';
        });
    }

    // Show footer when scrolled to the bottom
    window.addEventListener('scroll', function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    });

    const links = document.querySelectorAll("a"); // Select all <a> elements
    links.forEach(link => {
        if (link.hostname !== window.location.hostname) {
            // Apply only to external links
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        }
    });
    
});