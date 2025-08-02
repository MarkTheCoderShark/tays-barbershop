// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    // Loading Screen
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }

    // Initialize all other functionality
    initializeNavigation();
});

// Navigation and Popup functionality
function initializeNavigation() {
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
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Location-specific booking buttons
    const locationBookButtons = document.querySelectorAll('.location-book-btn');
    locationBookButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent the parent link from triggering
            
            const location = button.getAttribute('data-location');
            const phone = button.getAttribute('data-phone');
            
            // Navigate to the appropriate location page
            if (location === 'sacramento') {
                window.location.href = 'locations/sacramento.html';
            } else if (location === 'rancho-cordova') {
                window.location.href = 'locations/rancho-cordova.html';
            }
        });
    });

    // Yelp popup functionality
    yelpButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            yelpPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
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
        if (e.target === bookingPopup || e.target === yelpPopup) {
            bookingPopup.style.display = 'none';
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
}

// Initialize Google Maps
function initMap() {
    const mapStyles = [
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [{"color": "#242f3e"}]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{"lightness": -80}]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#746855"}]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{"color": "#38414e"}]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#212a37"}]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#9ca5b3"}]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{"color": "#17263c"}]
        }
    ];

    // Tahoe Park location
    const tahoePark = { lat: 38.5502, lng: -121.4474 };
    const tahoeParkMap = new google.maps.Map(document.getElementById('tahoe-park-map'), {
        zoom: 15,
        center: tahoePark,
        styles: mapStyles
    });

    new google.maps.Marker({
        position: tahoePark,
        map: tahoeParkMap,
        title: "Tay's Barbershop - Tahoe Park"
    });

    // Rancho Cordova location
    const ranchoCordova = { lat: 38.5897, lng: -121.3027 };
    const ranchoCordovaMap = new google.maps.Map(document.getElementById('rancho-cordova-map'), {
        zoom: 15,
        center: ranchoCordova,
        styles: mapStyles
    });

    new google.maps.Marker({
        position: ranchoCordova,
        map: ranchoCordovaMap,
        title: "Tay's Barbershop - Rancho Cordova"
    });
}

// Add Google Maps script
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
script.async = true;
document.head.appendChild(script); 
document.head.appendChild(script); 
