 // Enhanced responsive detection and optimization
function handleResize() {
    const width = window.innerWidth;
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    // Reset mobile menu on screen size change
    if (width > 768) {
        navMenu.classList.remove('active');
        if (mobileBtn) {
            mobileBtn.innerHTML = '☰';
            mobileBtn.style.fontSize = '24px';
        }
    }
    
    // Optimize animations based on screen size
    const floatingIcons = document.querySelectorAll('.floating-icon');
    const chatBubbles = document.querySelectorAll('.chat-bubble');
    
    if (width <= 768) {
        // Disable heavy animations on mobile
        floatingIcons.forEach(icon => {
            icon.style.display = 'none';
        });
        chatBubbles.forEach(bubble => {
            bubble.style.display = 'none';
        });
    } else {
        // Enable animations on desktop
        floatingIcons.forEach(icon => {
            icon.style.display = 'flex';
        });
        chatBubbles.forEach(bubble => {
            bubble.style.display = 'block';
        });
    }
}

// Call on load and resize
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);

// Touch-friendly improvements for mobile
if ('ontouchstart' in window) {
    // Add touch-friendly styles
    document.body.style.webkitTouchCallout = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.userSelect = 'none';
    
    // Improve button touch targets
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.style.minHeight = '44px';
        btn.style.minWidth = '44px';
    });
}

// Mobile Menu Toggle Function
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    
    navMenu.classList.toggle('active');
    
    // Change hamburger to X and vice versa
    if (navMenu.classList.contains('active')) {
        mobileBtn.innerHTML = '✕';
        mobileBtn.style.fontSize = '20px';
    } else {
        mobileBtn.innerHTML = '☰';
        mobileBtn.style.fontSize = '24px';
    }
}

// Close mobile menu when clicking on nav links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.getElementById('navMenu');
            const mobileBtn = document.getElementById('mobileMenuBtn');
            
            navMenu.classList.remove('active');
            mobileBtn.innerHTML = '☰';
            mobileBtn.style.fontSize = '24px';
        });
    });
});

// Logo Animation
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    const logoCircle = document.getElementById('logoCircle');
    const logoShine = document.getElementById('logoShine');
    const logoText = document.getElementById('logoText');
    const companyName = document.getElementById('companyName');

    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logoCircle.style.transform = 'rotate(360deg) scale(1.1)';
            logoCircle.style.borderColor = '#ffffff';
            logoCircle.style.boxShadow = '0 0 20px rgba(255,255,255,0.5)';
            logoText.style.color = '#000000';
            logoText.style.textShadow = '0 0 10px rgba(255,255,255,0.8)';
            companyName.style.textShadow = '0 0 10px rgba(255,255,255,0.5)';
            logoShine.style.left = '100%';
            
            // Background color animation
            logoCircle.style.background = 'linear-gradient(45deg, #ffffff, #cccccc)';
        });

        logo.addEventListener('mouseleave', () => {
            logoCircle.style.transform = 'rotate(0deg) scale(1)';
            logoCircle.style.borderColor = 'white';
            logoCircle.style.boxShadow = 'none';
            logoText.style.color = 'white';
            logoText.style.textShadow = 'none';
            companyName.style.textShadow = 'none';
            logoShine.style.left = '-100%';
            logoCircle.style.background = 'transparent';
        });
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Hero button animations
document.addEventListener('DOMContentLoaded', function() {
    const heroBtn = document.getElementById('heroBtn');
    const heroBtn2 = document.getElementById('heroBtn2');

    if (heroBtn) {
        heroBtn.addEventListener('mouseenter', () => {
            heroBtn.style.background = 'white';
            heroBtn.style.color = 'black';
            heroBtn.style.transform = 'translateY(-3px)';
            heroBtn.style.boxShadow = '0 10px 25px rgba(255,255,255,0.3)';
        });

        heroBtn.addEventListener('mouseleave', () => {
            heroBtn.style.background = 'transparent';
            heroBtn.style.color = 'white';
            heroBtn.style.transform = 'translateY(0)';
            heroBtn.style.boxShadow = 'none';
        });
    }

    if (heroBtn2) {
        heroBtn2.addEventListener('mouseenter', () => {
            heroBtn2.style.background = 'transparent';
            heroBtn2.style.color = 'white';
            heroBtn2.style.transform = 'translateY(-3px)';
            heroBtn2.style.boxShadow = '0 10px 25px rgba(255,255,255,0.2)';
        });

        heroBtn2.addEventListener('mouseleave', () => {
            heroBtn2.style.background = 'rgba(255,255,255,0.95)';
            heroBtn2.style.color = '#333';
            heroBtn2.style.transform = 'translateY(0)';
            heroBtn2.style.boxShadow = 'none';
        });
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
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

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
});

// Logo continuous subtle animation
document.addEventListener('DOMContentLoaded', function() {
    const logoText = document.getElementById('logoText');
    
    if (logoText) {
        setInterval(() => {
            logoText.style.animation = 'pulse 2s ease-in-out';
            setTimeout(() => {
                logoText.style.animation = '';
            }, 2000);
        }, 5000);
    }
});

// Handle orientation change for mobile
window.addEventListener('orientationchange', function() {
    setTimeout(function() {
        window.scrollTo(0, 1);
    }, 500);
});

// Improve touch scroll performance
document.addEventListener('touchstart', function(){}, {passive: true});
document.addEventListener('touchmove', function(){}, {passive: true});