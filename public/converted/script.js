
// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Share functionality
const shareButtons = document.querySelectorAll('.share-button');
shareButtons.forEach(button => {
  button.addEventListener('click', () => {
    const platform = button.getAttribute('data-platform');
    shareContent(platform);
  });
});

function shareContent(platform) {
  let shareUrl = '';
  const currentUrl = window.location.href;
  const pageTitle = document.title;
  
  switch (platform) {
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
      break;
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`;
      break;
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
      break;
  }
  
  if (shareUrl) {
    window.open(shareUrl, '_blank');
    showToast(`Shared on ${platform}!`);
  }
}

// Toast notification
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (email) {
      // In a real application, you would send this to your backend
      showToast('Thank you for subscribing!');
      emailInput.value = '';
    }
  });
}

// Add responsive menu toggle for mobile
function setupResponsiveMenu() {
  const headerElement = document.querySelector('header');
  const navElement = document.querySelector('nav');
  
  // Create mobile menu button
  const menuButton = document.createElement('button');
  menuButton.classList.add('mobile-menu-button');
  menuButton.innerHTML = '☰';
  menuButton.style.display = 'none';
  
  // Add button to header
  headerElement.appendChild(menuButton);
  
  // Toggle menu functionality
  menuButton.addEventListener('click', () => {
    navElement.classList.toggle('active');
  });
  
  // Handle responsive display
  function handleResponsiveMenu() {
    if (window.innerWidth < 768) {
      menuButton.style.display = 'block';
      navElement.style.display = 'none';
      
      if (navElement.classList.contains('active')) {
        navElement.style.display = 'block';
      }
    } else {
      menuButton.style.display = 'none';
      navElement.style.display = 'block';
      navElement.classList.remove('active');
    }
  }
  
  // Initial setup
  handleResponsiveMenu();
  
  // Listen for window resize
  window.addEventListener('resize', handleResponsiveMenu);
}

// Initialize mobile menu if we're on a page with a header
if (document.querySelector('header')) {
  setupResponsiveMenu();
}

// Add simple lightbox for images in blog content
function setupImageLightbox() {
  const blogContent = document.querySelector('.blog-content');
  if (!blogContent) return;
  
  const images = blogContent.querySelectorAll('img');
  
  images.forEach(img => {
    img.style.cursor = 'pointer';
    
    img.addEventListener('click', () => {
      // Create lightbox elements
      const lightbox = document.createElement('div');
      lightbox.classList.add('lightbox');
      lightbox.style.position = 'fixed';
      lightbox.style.top = '0';
      lightbox.style.left = '0';
      lightbox.style.width = '100%';
      lightbox.style.height = '100%';
      lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
      lightbox.style.display = 'flex';
      lightbox.style.alignItems = 'center';
      lightbox.style.justifyContent = 'center';
      lightbox.style.zIndex = '1000';
      
      const imgClone = document.createElement('img');
      imgClone.src = img.src;
      imgClone.style.maxHeight = '90%';
      imgClone.style.maxWidth = '90%';
      
      lightbox.appendChild(imgClone);
      document.body.appendChild(lightbox);
      
      // Close on click
      lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
      });
    });
  });
}

// Initialize lightbox
setupImageLightbox();

// Create a zip file for download
function createDownloadableZip() {
  // This would typically be handled by a server-side script
  // For this demo, we'll show how it could be structured if using a library like JSZip
  /*
  const zip = new JSZip();
  
  // Add files to the zip
  zip.file("index.html", document.documentElement.outerHTML);
  zip.file("styles.css", "/* CSS content would go here *\/");
  zip.file("script.js", "// JS content would go here");
  
  // Generate the zip file
  zip.generateAsync({type:"blob"})
    .then(function(content) {
      // Create download link
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = "blog-template.zip";
      link.click();
    });
  */
  
  // Since we can't actually create a zip file in this demo,
  // we'll just show a message explaining how to download the files
  showToast('Download individual files from the GitHub repository');
}

// Initialize download button if it exists
const downloadButton = document.querySelector('.download-button');
if (downloadButton) {
  downloadButton.addEventListener('click', createDownloadableZip);
}
