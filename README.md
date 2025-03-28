# Tay's Barbershop Website

A modern, responsive website for Tay's Barbershop featuring a clean design with black, white, and red color scheme.

## Setup Instructions

1. Create an `images` folder in the root directory and add the following images:
   - `hero-bg.jpg` - A high-quality image of a barber in action for the hero section
   - `tay-west.jpg` - A professional photo of Tay West for the About section
   - Any additional images for the gallery section

2. Replace the Google Maps API Key:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Maps JavaScript API
   - Create credentials (API key)
   - Replace `YOUR_API_KEY` in `script.js` with your actual API key

3. Customize the content:
   - Update the phone number in the contact section
   - Add your actual business hours
   - Update the Instagram handle if different from @taywest_
   - Add your own images to the gallery section

## File Structure

```
tays-barbershop/
├── index.html      # Main HTML file
├── styles.css      # CSS styles
├── script.js       # JavaScript functionality
├── README.md       # This file
└── images/         # Image assets
    ├── hero-bg.jpg
    ├── tay-west.jpg
    └── gallery/    # Optional gallery images
```

## Features

- Responsive design that works on all devices
- Modern, clean interface with black, white, and red color scheme
- Smooth scrolling navigation
- Interactive service cards with hover effects
- Google Maps integration for both locations
- Social media integration
- Mobile-friendly navigation

## Customization

### Colors
The website uses CSS variables for easy color customization. You can modify the colors in `styles.css`:

```css
:root {
    --primary-color: #ff0000;    /* Red */
    --secondary-color: #000000;  /* Black */
    --text-color: #333333;       /* Dark Gray */
    --light-gray: #f5f5f5;       /* Light Gray */
    --white: #ffffff;            /* White */
}
```

### Images
- Hero background: Recommended size 1920x1080px
- Profile images: Recommended size 600x600px
- Gallery images: Recommended size 800x600px

### Text Content
You can easily update all text content by editing the `index.html` file. The structure is semantic and well-commented for easy navigation.

## Browser Support

The website is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Getting Help

If you need help customizing the website or have questions about the setup process, please contact the developer who created this template. 