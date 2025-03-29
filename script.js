// Loading Screen
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        // Hide loading screen after a short delay to ensure content is ready
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 300);
        }, 500);
    }
});

// Booking Popup
document.addEventListener('DOMContentLoaded', () => {
    const bookingPopup = document.getElementById('booking-popup');
    const yelpPopup = document.getElementById('yelp-popup');
    const closeButtons = document.querySelectorAll('.popup-close');
    const bookButtons = document.querySelectorAll('a[href="#booking"], .nav-links .btn');
    const yelpButtons = document.querySelectorAll('a[href="#yelp"]');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Booking popup functionality
    bookButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            bookingPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Yelp popup functionality
    yelpButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            yelpPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Close popup functionality
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            bookingPopup.style.display = 'none';
            yelpPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Close popup when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === bookingPopup) {
            bookingPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === yelpPopup) {
            yelpPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Mobile menu functionality
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Gallery Carousel
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.gallery-dot');
    let currentIndex = 0;
    let isTransitioning = false;

    function showSlide(index) {