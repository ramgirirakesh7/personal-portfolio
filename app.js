// Portfolio JavaScript - Interactive Features

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Expandable Experience Sections
function toggleExperience(header) {
  const experienceItem = header.closest('.experience-item');
  const isCollapsed = experienceItem.classList.contains('collapsed');
  
  // Toggle collapsed state
  if (isCollapsed) {
    experienceItem.classList.remove('collapsed');
    // Animate content expansion
    const content = experienceItem.querySelector('.experience-content');
    content.style.maxHeight = content.scrollHeight + 'px';
    setTimeout(() => {
      content.style.maxHeight = 'none';
    }, 300);
  } else {
    experienceItem.classList.add('collapsed');
    const content = experienceItem.querySelector('.experience-content');
    content.style.maxHeight = content.scrollHeight + 'px';
    setTimeout(() => {
      content.style.maxHeight = '0';
    }, 10);
  }
}

// Initialize experience sections as collapsed by default
document.addEventListener('DOMContentLoaded', function() {
  const experienceItems = document.querySelectorAll('.experience-item');
  experienceItems.forEach(item => {
    item.classList.add('collapsed');
    const content = item.querySelector('.experience-content');
    content.style.maxHeight = '0';
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Project filtering functionality
const filterButtons = document.querySelectorAll('.project-filter button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    const filter = button.getAttribute('data-filter');
    
    // Filter projects
    projectCards.forEach(card => {
      const cardTypes = card.getAttribute('data-type').split(' ');
      
      if (filter === 'all' || cardTypes.includes(filter)) {
        card.style.display = 'block';
        card.style.animation = 'fadeInUp 0.5s ease-out';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      // Show success message
      showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      
      // Reset form
      this.reset();
      
      // Reset button
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 2000);
  });
}

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : '#3b82f6'};
    color: white;
    padding: 16px 20px;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 400px;
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Close button functionality
  const closeButton = notification.querySelector('.notification-close');
  closeButton.addEventListener('click', () => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  });
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const nav = document.querySelector('nav');

if (mobileMenuBtn && nav) {
  mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
    mobileMenuBtn.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
      mobileMenuBtn.classList.remove('active');
    });
  });
}

// Add mobile menu styles
const mobileMenuStyles = `
  @media (max-width: 768px) {
    nav {
      position: fixed;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(10, 15, 28, 0.95);
      backdrop-filter: blur(12px);
      flex-direction: column;
      padding: 24px;
      gap: 16px;
      transform: translateY(-100%);
      transition: transform 0.3s ease;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    nav.mobile-open {
      transform: translateY(0);
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
      opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  }
`;

// Inject mobile menu styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileMenuStyles;
document.head.appendChild(styleSheet);

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-group, .project-card, .section').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero-content h1');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
  }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  const profileCard = document.querySelector('.profile-card');
  
  if (hero && profileCard) {
    const rate = scrolled * -0.5;
    profileCard.style.transform = `translateY(${rate}px)`;
  }
});

// Add hover effects to skill pills
document.querySelectorAll('.skill-pill').forEach(pill => {
  pill.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px) scale(1.05)';
  });
  
  pill.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add click-to-copy functionality for email
document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
  emailLink.addEventListener('click', function(e) {
    const email = this.href.replace('mailto:', '');
    navigator.clipboard.writeText(email).then(() => {
      showNotification('Email copied to clipboard!', 'success');
    }).catch(() => {
      // Fallback for older browsers
      showNotification('Email: ' + email, 'info');
    });
  });
});

// Add loading animation for images (if any are added later)
function preloadImages() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
  });
}

// Initialize image loading
preloadImages();

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  // Escape key closes mobile menu
  if (e.key === 'Escape') {
    const nav = document.querySelector('nav');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (nav && nav.classList.contains('mobile-open')) {
      nav.classList.remove('mobile-open');
      mobileMenuBtn.classList.remove('active');
    }
  }
  
  // Tab key navigation improvements
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

// Remove keyboard navigation class on mouse use
document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-navigation');
});

// Add keyboard navigation styles
const keyboardStyles = `
  .keyboard-navigation *:focus {
    outline: 2px solid var(--accent) !important;
    outline-offset: 2px !important;
  }
`;

const keyboardStyleSheet = document.createElement('style');
keyboardStyleSheet.textContent = keyboardStyles;
document.head.appendChild(keyboardStyleSheet);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
  // Any scroll-based functionality can go here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Resume Request Modal Functions
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus on first input for accessibility
    const firstInput = modal.querySelector('input');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  }
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('resume-modal');
  if (modal && e.target === modal) {
    closeResumeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('resume-modal');
    if (modal && modal.classList.contains('show')) {
      closeResumeModal();
    }
  }
});

// Handle resume request form submission
document.addEventListener('DOMContentLoaded', function() {
  const resumeForm = document.getElementById('resume-request-form');
  if (resumeForm) {
    resumeForm.addEventListener('submit', function(e) {
      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Form will be submitted via FormSubmit.co
      // Show success message after a short delay
      setTimeout(() => {
        showNotification('Resume request sent successfully! I\'ll get back to you soon.', 'success');
        closeResumeModal();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        this.reset();
      }, 1000);
    });
  }
});

// Add console message for developers
console.log(`
🚀 Portfolio Website Loaded Successfully!

👨‍💻 Developer: Rakesh Ramgiri
🎨 Design: Modern & Responsive
⚡ Performance: Optimized
📱 Mobile: Fully Responsive

Built with HTML5, CSS3, and Vanilla JavaScript
`);

// Export functions for potential external use
window.PortfolioApp = {
  showNotification,
  typeWriter,
  filterProjects: (filter) => {
    const button = document.querySelector(`[data-filter="${filter}"]`);
    if (button) button.click();
  }
};
