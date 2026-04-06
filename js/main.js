/**
 * Brainik Educational Platform - Main JavaScript
 * Interactive features, animations, and responsive functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHeader();
    initAnimations();
    initSmoothScroll();
    initCounters();
    initTooltips();
    initModals();
    initTabs();
    initAccordions();
});

/**
 * Header functionality - scroll effect and mobile menu
 */
function initHeader() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

/**
 * Scroll animations using Intersection Observer
 */
function initAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    if (animatedElements.length === 0) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

/**
 * Animated counters for statistics
 */
function initCounters() {
    const counters = document.querySelectorAll('.hero-stat-value, .stat-card-value');
    
    if (counters.length === 0) return;
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const text = counter.textContent;
                const numericValue = parseInt(text.replace(/[^0-9]/g, ''));
                const suffix = text.replace(/[0-9]/g, '');
                
                if (!isNaN(numericValue)) {
                    animateCounter(counter, numericValue, suffix);
                }
                
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target, suffix) {
    let current = 0;
    const increment = target / 50;
    const duration = 1500;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, stepTime);
}

/**
 * Tooltip system
 */
function initTooltips() {
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
    
    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'brainik-tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: var(--text-primary);
                color: white;
                padding: 8px 12px;
                border-radius: 8px;
                font-size: 14px;
                z-index: 1000;
                white-space: nowrap;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.2s;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
            
            requestAnimationFrame(() => {
                tooltip.style.opacity = '1';
            });
            
            this._tooltip = tooltip;
        });
        
        trigger.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
                this._tooltip = null;
            }
        });
    });
}

/**
 * Modal system
 */
function initModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    document.querySelectorAll('.modal-close, [data-close-modal]').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal, .exercise-modal, .success-modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    document.querySelectorAll('.modal, .exercise-modal, .success-modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

/**
 * Tab system
 */
function initTabs() {
    const tabContainers = document.querySelectorAll('[data-tabs]');
    
    tabContainers.forEach(container => {
        const tabs = container.querySelectorAll('[data-tab]');
        const panels = container.querySelectorAll('[data-panel]');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetPanel = this.getAttribute('data-tab');
                
                tabs.forEach(t => t.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));
                
                this.classList.add('active');
                container.querySelector(`[data-panel="${targetPanel}"]`)?.classList.add('active');
            });
        });
    });
}

/**
 * Accordion system
 */
function initAccordions() {
    const accordions = document.querySelectorAll('[data-accordion]');
    
    accordions.forEach(accordion => {
        const header = accordion.querySelector('[data-accordion-header]');
        const content = accordion.querySelector('[data-accordion-content]');
        
        if (header && content) {
            header.addEventListener('click', function() {
                const isOpen = accordion.classList.contains('open');
                
                document.querySelectorAll('[data-accordion]').forEach(acc => {
                    acc.classList.remove('open');
                });
                
                if (!isOpen) {
                    accordion.classList.add('open');
                }
            });
        }
    });
}

/**
 * Confetti effect for celebrations
 */
function createConfetti(options = {}) {
    const colors = options.colors || ['#667eea', '#764ba2', '#ffd93d', '#6bcb77', '#f093fb', '#f5576c'];
    const count = options.count || 50;
    const duration = options.duration || 3000;
    
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}

/**
 * Parallax effect for floating elements
 */
function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero-float-card, .blob');
    
    if (parallaxElements.length === 0 || window.matchMedia('(pointer: coarse)').matches) return;
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        parallaxElements.forEach((el, index) => {
            const speed = (index + 1) * 10;
            const x = (window.innerWidth / 2 - e.clientX) / speed;
            const y = (window.innerHeight / 2 - e.clientY) / speed;
            
            el.style.transform = `translate(${x}px, ${y}px)`;
        });
    }, { passive: true });
}

/**
 * Toast notification system
 */
function showToast(message, type = 'info') {
    const existingToast = document.querySelector('.brainik-toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'brainik-toast';
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#6bcb77' : type === 'error' ? '#ff6b6b' : type === 'warning' ? '#ffd93d' : '#667eea'};
        color: ${type === 'warning' ? '#333' : 'white'};
        border-radius: 12px;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
        word-wrap: break-word;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Form validation helper
 */
function validateForm(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return false;
    
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ff6b6b';
            input.classList.add('error');
        } else {
            input.style.borderColor = '';
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

/**
 * Lazy loading for images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * Ripple effect for buttons
 */
function initRippleEffect() {
    document.querySelectorAll('.btn, .exercise-btn, .modal-btn-primary, .card, .hero-card-full').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('hero-card-full') && !this.classList.contains('flipped')) return;
            
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
                background: rgba(255,255,255,0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Add animations to CSS via JS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to { transform: scale(2); opacity: 0; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.1); opacity: 0.8; }
    }
`;
document.head.appendChild(style);

// Initialize features
if (!window.matchMedia('(pointer: coarse)').matches) {
    initParallax();
}

initLazyLoading();
initRippleEffect();

// Export functions for global access
window.Brainik = {
    showToast,
    createConfetti,
    validateForm,
    animateCounter,
    initAnimations
};
