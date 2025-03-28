// Loading Screen
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    // Ensure loading screen is removed after a maximum of 3 seconds
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 3000);
});

window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
});

// Booking Popup
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('booking-popup');
    const closeBtn = document.querySelector('.popup-close');
    const bookButtons = document.querySelectorAll('a[href="#booking"]');
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
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Mobile menu functionality
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
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