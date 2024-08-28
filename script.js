
document.getElementById('menuButton').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active'); // Hide the menu
    } else {
        navbar.classList.add('active'); // Show the menu
    }
});
document.getElementById('themeToggle').addEventListener('click', function() {
    var body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        this.textContent = "Switch to Light Mode";
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        this.textContent = "Switch to Dark Mode";
    }
});
function toggleMenu() {
    var menu = document.getElementById('sideMenu');
    menu.classList.toggle('open');
}
document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;

            // Toggle active class for button
            this.classList.toggle("active");

            // Toggle visibility of the content
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from actually submitting
  
  // Trigger fireworks animation
  showFireworks();
});

function showFireworks() {
  const fireworksContainer = document.createElement('div');
  fireworksContainer.id = 'fireworks';
  
  // Increase the loop count to create more fireworks
  for (let i = 0; i < 100; i++) {  // Changed from 10 to 30
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.top = Math.random() * window.innerHeight + 'px';
    firework.style.left = Math.random() * window.innerWidth + 'px';
    
    fireworksContainer.appendChild(firework);
  }
  
  document.body.appendChild(fireworksContainer);
  
  fireworksContainer.style.display = 'block';
  
  // Remove the fireworks after a short delay
  setTimeout(() => {
    fireworksContainer.remove();
  }, 5000);
}

