
document.addEventListener('DOMContentLoaded', function() {


const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        // First, hide all answers
        questions.forEach((item) => {
            item.querySelector(".answer").classList.add("hidden");
        });

        // Then, show the clicked question's answer
        const answer = question.querySelector(".answer");
        answer.classList.remove("hidden");
    });
});



    // const mobileMenu = document.getElementById('mobile-menu');
    // const navLinks = document.querySelector('.nav-links');

    // mobileMenu.addEventListener('click', () => {
    //     navLinks.classList.toggle('active');
    // });


    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

///////carousel//////////////////////
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Set up event listeners for navigation buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto-slide functionality
setInterval(nextSlide, 5000); // Change slides every 5 seconds

// Initialize the first slide as active
showSlide(currentIndex);








});


document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.mini-G-img img');
    const paginationLink = document.querySelector('.pagination a');
    let currentImageIndex = 0;
    const autoplayInterval = 3000; // 3 seconds

    // Handle image click
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            viewImage(image.src);
        });
    });

    // Handle view all click
    paginationLink.addEventListener('click', (event) => {
        event.preventDefault();
        viewAllImages();
    });

    function viewImage(src) {
        // Display the image in a larger view
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <img src="${src}" alt="Full size image">
            </div>
        `;
        document.body.appendChild(modal);

        // Close modal
        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.remove();
        });

        // Close modal when clicking outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    function viewAllImages() {
        // Navigate to the full gallery page
        window.location.href = 'full-gallery.html';
    }

    function autoplayGallery() {
        galleryImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        galleryImages[currentImageIndex].classList.add('active');
    }

    // Start autoplay
    setInterval(autoplayGallery, autoplayInterval);

    // Set the first image as active initially
    galleryImages[currentImageIndex].classList.add('active');
});

