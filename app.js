// Highland Padel & More - Interactive JavaScript

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn && nav) {
  mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');

    // animazione delle tre linee
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans[0].style.transform = nav.classList.contains('open') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
    spans[1].style.opacity = nav.classList.contains('open') ? '0' : '1';
    spans[2].style.transform = nav.classList.contains('open') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
  });
}

    });
  }
});
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    let isMenuOpen = false;

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            
            // Toggle menu visibility
            if (isMenuOpen) {
                nav.style.display = 'block';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'rgba(15, 23, 42, 0.98)';
                nav.style.padding = '20px';
                nav.style.borderTop = '1px solid rgba(0, 188, 212, 0.3)';
                
                // Animate menu button
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                nav.style.display = 'none';
                
                // Reset menu button
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an internal link
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (isMenuOpen) {
                        isMenuOpen = false;
                        nav.style.display = 'none';
                        const spans = mobileMenuBtn.querySelectorAll('span');
                        spans[0].style.transform = 'none';
                        spans[1].style.opacity = '1';
                        spans[2].style.transform = 'none';
                    }
                }
            }
        });
    });

    // Header Background on Scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        if (scrolled > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }
    });

    // Facility Cards Animation on Scroll
    const facilityCards = document.querySelectorAll('.facility-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initialize card animations
    facilityCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        cardObserver.observe(card);
    });

    // Facility Card Hover Effects
    facilityCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.zIndex = '1';
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const activity = formData.get('activity');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email) {
                showNotification('Per favore compila tutti i campi obbligatori.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Per favore inserisci un indirizzo email valido.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.form__submit');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Invio in corso...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Grazie! La tua richiesta è stata inviata con successo. Ti contatteremo presto!', 'success');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                
                // Log form data (in real app, this would be sent to server)
                console.log('Form submitted:', {
                    name,
                    email,
                    phone,
                    activity,
                    message,
                    timestamp: new Date().toISOString()
                });
                
            }, 2000);
        });
    }

    // Form Field Enhancements
    const formControls = document.querySelectorAll('.form-control');
    
    formControls.forEach(control => {
        // Add focus effects
        control.addEventListener('focus', function() {
            this.parentElement.classList.add('form-group--focused');
            this.style.boxShadow = '0 0 0 3px rgba(0, 188, 212, 0.3), 0 0 15px rgba(0, 188, 212, 0.2)';
        });
        
        control.addEventListener('blur', function() {
            this.parentElement.classList.remove('form-group--focused');
            this.style.boxShadow = '';
        });
        
        // Real-time validation feedback
        control.addEventListener('input', function() {
            const value = this.value.trim();
            
            if (this.type === 'email' && value) {
                if (isValidEmail(value)) {
                    this.style.borderColor = 'var(--highland-accent)';
                } else {
                    this.style.borderColor = '#ff4444';
                }
            } else if (this.required && value) {
                this.style.borderColor = 'var(--highland-accent)';
            } else {
                this.style.borderColor = 'rgba(0, 188, 212, 0.3)';
            }
        });
    });

    // Hero CTA Button Enhancement
    const heroCta = document.querySelector('.hero__cta');
    
    if (heroCta) {
        heroCta.addEventListener('click', function(e) {
            // Create ripple effect
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    // Scroll Progress Indicator
    const createScrollIndicator = () => {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-progress';
        indicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--highland-secondary), var(--highland-accent));
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(indicator);
        
        window.addEventListener('scroll', () => {
            const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            indicator.style.width = scrolled + '%';
        });
    };
    
    createScrollIndicator();

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero__background');
        
        if (heroBackground && scrolled < window.innerHeight) {
            const speed = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${speed}px)`;
        }
    });

    // Utility Functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        
        const colors = {
            success: 'var(--highland-accent)',
            error: '#ff4444',
            info: 'var(--highland-secondary)'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: rgba(30, 41, 59, 0.95);
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            border-left: 4px solid ${colors[type]};
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            backdrop-filter: blur(10px);
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }

    // Add ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .btn {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    // Initialize any additional animations when page loads
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.3s ease';
    }, 100);

    console.log('Highland Padel & More website initialized successfully!');
});
