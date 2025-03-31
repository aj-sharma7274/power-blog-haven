
# Power Blog Haven - HTML Template

This is a standalone HTML, CSS, and JavaScript version of the Power Blog Haven template. It's designed to be easy to deploy on any web server without requiring a build process or JavaScript framework.

## Files Included

- `index.html` - The main HTML file containing the blog post layout
- `styles.css` - All styling for the template
- `script.js` - JavaScript for interactive elements like sharing and notifications

## How to Use

1. Download all files to your local machine
2. Open `index.html` in your browser to see the template
3. Customize the content to match your blog's needs
4. Upload the files to your web hosting provider

## Customization

### Modifying Colors

The color scheme is defined using CSS variables at the top of the `styles.css` file. You can change these values to match your brand:

```css
:root {
  --power-500: #5f6cf2; /* Primary color */
  --power-600: #444ae6; /* Darker primary */
  --blog-100: #ebe5ff;  /* Light accent */
  --blog-800: #5a03d5;  /* Dark accent */
  /* ... other color variables */
}
```

### Changing Fonts

The template uses Google Fonts (Inter and Merriweather). To change fonts:

1. Update the link in the `<head>` section of `index.html`
2. Modify the font-family properties in `styles.css`

### Adding Blog Posts

To add a new blog post:

1. Create a new HTML file based on `index.html`
2. Update the content in the `.blog-content` div with your post content
3. Update metadata (title, author, date, featured image, etc.)

## Browser Compatibility

This template works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This template is free to use for both personal and commercial projects.

## Credits

- Icons from Lucide Icons
- Font from Google Fonts (Inter and Merriweather)
- Demo images from Unsplash
