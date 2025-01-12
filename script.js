
    document.querySelector('.hamburger').addEventListener('click', function () {
        document.querySelector('nav').classList.toggle('active');
    });



    let startY = 0; // Track the start of the touch
    let currentY = 0; // Track the current drag distance
    let isAtEdge = false; // Flag to check if we're at the scroll bounds

    document.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', (e) => {
      const deltaY = e.touches[0].clientY - startY;

      // Check if scrolling is at the top or bottom edge
      const atTop = window.scrollY === 0 && deltaY > 0;
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight && deltaY < 0;

      if (atTop || atBottom) {
        e.preventDefault(); // Prevent native scrolling
        isAtEdge = true;
        currentY = deltaY * 0.3; // Smoothly reduce the movement for the rubber band effect
        document.body.style.transform = `translateY(${currentY}px)`;
      }
    });

    document.addEventListener('touchend', () => {
      if (isAtEdge) {
        // Animate back to the original position
        document.body.style.transition = 'transform 0.3s ease';
        document.body.style.transform = 'translateY(0)';

        // Reset variables after the transition
        document.body.addEventListener(
          'transitionend',
          () => {
            document.body.style.transition = '';
            currentY = 0;
            isAtEdge = false;
          },
          { once: true }
        );
      }
    });

    // Helper function to check if an element is in the viewport
// function isInViewport(element) {
// const rect = element.getBoundingClientRect();
// return (
// rect.top >= 0 &&
// rect.left >= 0 &&
// rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
// rect.right <= (window.innerWidth || document.documentElement.clientWidth)
// );
// }

// // Add event listener for scroll
// document.addEventListener("scroll", () => {
// // Select all items inside the container
// const items = document.querySelectorAll(".container .education-item, .container .skill-category");
// items.forEach((item) => {
// if (isInViewport(item)) {
//   item.classList.add("slide");
// }
// });
// });

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
                }
                });
                });
                const items = document.querySelectorAll(".education-item, .skill-category");
                items.forEach((item) => {
                    observer.observe(item);
                    });





                    