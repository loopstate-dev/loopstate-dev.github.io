/**
 * Main JavaScript for loopstate.dev
 */

// Add js-enabled class immediately to avoid FOUC (Flash of Unstyled Content)
document.body.classList.add('js-enabled');

document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme based on user preference
  initTheme();
  
  // Mobile menu toggle
  initMobileMenu();
  
  // Initialize animations
  initAnimations();
  
  // Handle scroll effects
  initScrollEffects();
  
  // Initialize blog tag filters
  initTagFilters();
  
  // Initialize image lightbox functionality
  initImageLightbox();
});

/**
 * Initialize theme (light/dark)
 */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check for saved theme preference or use OS preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Initial theme setting
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
  }
  
  // Theme toggle click event
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      // Save preference to localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }
}

/**
 * Mobile menu functionality
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navMenu.contains(event.target) && !menuToggle.contains(event.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
    
    // Close menu when pressing escape
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }
}

/**
 * Scroll animations and effects
 */
function initScrollEffects() {
  // Create scroll observer for revealing elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Observe elements with animation classes
  document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
    observer.observe(el);
  });
  
  // Header scroll effects
  const header = document.querySelector('.site-header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}

/**
 * Initialize animations for staggered elements
 */
function initAnimations() {
  // Staggered animation for items
  const staggerItems = document.querySelectorAll('.stagger-item');
  
  if (staggerItems.length > 0) {
    staggerItems.forEach((item, index) => {
      // Stagger effect with increasing delay
      setTimeout(() => {
        item.classList.add('fade-in');
      }, 100 * index);
    });
  }
  
  // Enable code highlighting if present
  if (typeof hljs !== 'undefined') {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
}

/**
 * Handle form submissions
 */
function handleForm(form) {
  if (!form) return;
  
  form.addEventListener('submit', function(event) {
    // Check if it's a contact form that needs special handling
    if (form.classList.contains('contact-form') && !form.classList.contains('formspree')) {
      event.preventDefault();
      
      // Example form validation
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });
      
      if (isValid) {
        // Show success message
        const formWrapper = form.closest('.contact-wrapper');
        if (formWrapper) {
          formWrapper.innerHTML = '<div class="form-success"><h3>Thank you!</h3><p>Your message has been sent successfully.</p></div>';
        }
      }
    }
  });
}

/**
 * Initialize tag filtering functionality for the blog
 */
function initTagFilters() {
  const tagFilters = document.querySelectorAll('.tag-filter');
  const postItems = document.querySelectorAll('.post-item');
  
  if (tagFilters.length > 0 && postItems.length > 0) {
    tagFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        const selectedTag = this.getAttribute('data-tag');
        
        // Update active state on buttons
        tagFilters.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter posts
        postItems.forEach(post => {
          const postTags = post.getAttribute('data-tags');
          
          if (selectedTag === 'all' || (postTags && postTags.split(',').includes(selectedTag))) {
            post.style.display = '';
            post.classList.add('fade-in');
          } else {
            post.style.display = 'none';
            post.classList.remove('fade-in');
          }
        });
      });
    });
  }
}

/**
 * Initialize lightbox functionality for images
 */
function initImageLightbox() {
  // Create lightbox elements
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close">&times;</button>
      <img class="lightbox-image" src="" alt="">
    </div>
  `;
  document.body.appendChild(lightbox);

  // Get lightbox elements
  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const lightboxClose = lightbox.querySelector('.lightbox-close');
  
  // Add click event to all image-popup links
  document.querySelectorAll('.image-popup').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Set the image source and show the lightbox
      const imgSrc = this.getAttribute('href');
      const imgTitle = this.getAttribute('title') || '';
      
      lightboxImage.src = imgSrc;
      lightboxImage.alt = imgTitle;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling while lightbox is open
    });
  });
  
  // Close lightbox when clicking the close button
  lightboxClose.addEventListener('click', closeLightbox);
  
  // Also close when clicking the background
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
  
  // Function to close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    
    // Clear the image src after transition
    setTimeout(() => {
      lightboxImage.src = '';
    }, 300);
  }
}