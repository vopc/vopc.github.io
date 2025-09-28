// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link Highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            alert('Thank you for subscribing to our newsletter!');
            this.querySelector('input[type="email"]').value = '';
        });
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .event-card, .stat');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .service-card,
    .event-card,
    .stat {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .service-card.animate-in,
    .event-card.animate-in,
    .stat.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #fff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        gap: 1rem;
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #a82212;
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Loading Animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);

// Glide.js Slider
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.glide')) {
    new Glide('.glide', {
      perView: 1,
      rewind: false
    }).mount();
  }

});

// Event Poster Modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('eventPosterModal');
    const modalImage = document.getElementById('eventPosterModalImage');
    const closeButton = document.querySelector('.event-poster-close-button');

    document.querySelectorAll('.event-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const posterSrc = this.getAttribute('data-poster');
            if (posterSrc) {
                modal.style.display = 'flex'; // Use flex to show and center
                modalImage.src = posterSrc;
            }
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Gallery Modal
document.addEventListener('DOMContentLoaded', function() {
    const galleryModal = document.getElementById('galleryModal');
    if (!galleryModal) return;

    const galleryModalImage = document.getElementById('galleryModalImage');
    const prevArrow = document.querySelector('.gallery-prev-arrow');
    const nextArrow = document.querySelector('.gallery-next-arrow');
    const closeButton = document.querySelector('.gallery-close-button');
    const galleryGrid = document.querySelector('.gallery-grid');

    let galleryImages = [];
    let currentIndex = 0;

    // --- New Client-Side Randomization Logic ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    function displayRandomImages() {
        if (window.allGalleryImages && window.allGalleryImages.length > 0) {
            // Use a copy to avoid re-shuffling the original array used by the lightbox
            let imagesToShuffle = [...window.allGalleryImages];
            shuffleArray(imagesToShuffle);
            const imagesToDisplay = imagesToShuffle.slice(0, 3);
            
            galleryGrid.innerHTML = ''; // Clear placeholder

            imagesToDisplay.forEach(src => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.innerHTML = `<img src="${src}" alt="Gallery image">`;
                galleryGrid.appendChild(galleryItem);
            });
        }
    }

    function updateGalleryImages() {
        if (window.allGalleryImages && window.allGalleryImages.length > 0) {
            galleryImages = window.allGalleryImages;
        } else {
            galleryImages = Array.from(galleryGrid.querySelectorAll('.gallery-item img')).map(img => new URL(img.src).pathname);
        }
    }

    function showImage(index) {
        if (index >= 0 && index < galleryImages.length) {
            galleryModalImage.src = galleryImages[index];
            currentIndex = index;
        }
    }

    function showNextImage() {
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        showImage(nextIndex);
    }

    function showPrevImage() {
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(prevIndex);
    }

    function closeGalleryModal() {
        galleryModal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }

    if (galleryGrid) {
        displayRandomImages(); // Display random images on page load
        updateGalleryImages();

        galleryGrid.addEventListener('click', function(e) {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                const img = galleryItem.querySelector('img');
                if (img) {
                    const clickedPath = new URL(img.src).pathname;
                    const clickedIndex = galleryImages.indexOf(clickedPath);
                    galleryModal.style.display = 'flex';
                    document.body.classList.add('no-scroll');
                    showImage(clickedIndex);
                }
            }
        });
    }

    nextArrow.addEventListener('click', showNextImage);
    prevArrow.addEventListener('click', showPrevImage);

    closeButton.addEventListener('click', closeGalleryModal);

    window.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            closeGalleryModal();
        }
    });

    // Swipe functionality
    let touchstartX = 0;
    let touchendX = 0;

    galleryModal.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    }, false);

    galleryModal.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        handleSwipe();
    }, false); 

    function handleSwipe() {
        if (touchendX < touchstartX - 50) { // Swiped left
            showNextImage();
        }
        if (touchendX > touchstartX + 50) { // Swiped right
            showPrevImage();
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (galleryModal.style.display === 'flex') {
            if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'Escape') {
                closeGalleryModal();
            }
        }
    });
});
