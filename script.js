// Create ULTIMATE starfield with multiple sizes and colors
const starfield = document.getElementById('starfield');
if (starfield) {
    const starTypes = [
        { class: 'small', count: 150 },
        { class: 'medium', count: 60 },
        { class: 'large', count: 20 }
    ];
    
    starTypes.forEach(({ class: type, count }) => {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = `star ${type}`;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 6 + 's';
            star.style.animationDuration = (3 + Math.random() * 4) + 's';
            starfield.appendChild(star);
        }
    });
}

// Create MEGA particle effect system
function createMegaParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    const colors = [
        'rgba(255, 107, 157, 0.7)',
        'rgba(167, 139, 250, 0.7)',
        'rgba(56, 189, 248, 0.7)',
        'rgba(251, 191, 36, 0.7)',
        'rgba(244, 114, 182, 0.7)'
    ];
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 10 + 6;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 ${size * 3}px ${colors[Math.floor(Math.random() * colors.length)]}`;
        particle.style.animationDuration = (12 + Math.random() * 12) + 's';
        particle.style.animationDelay = Math.random() * 3 + 's';
        
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 25000);
    }, 600);
}

createMegaParticles();

// Enhanced mobile menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (navbar && window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else if (navbar) {
        navbar.classList.remove('scrolled');
    }
});

// Set active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Smooth scroll
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

// MEGA scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 150);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.welcome-card, .photo-item, .cosmos-card, .ocean-depths, .sweet-card, .fact-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(60px) scale(0.95)';
        card.style.transition = 'opacity 1s ease, transform 1s ease';
        observer.observe(card);
    });
});

// Enhanced parallax effect
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.6}px)`;
                hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.7;
            }
            
            ticking = false;
        });
        ticking = true;
    }
});

// MEGA cursor trail effect
let cursorTrail = [];
const maxTrailLength = 25;
let lastSparkleTime = 0;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        
        if (cursorTrail.length > maxTrailLength) {
            cursorTrail.shift();
        }
        
        const now = Date.now();
        if (now - lastSparkleTime > 100 && Math.random() < 0.08) {
            createMegaSparkle(e.clientX, e.clientY);
            lastSparkleTime = now;
        }
    }
});

function createMegaSparkle(x, y) {
    const colors = ['#FF6B9D', '#a78bfa', '#38bdf8', '#fbbf24', '#f472b6'];
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '8px';
    sparkle.style.height = '8px';
    sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.boxShadow = `0 0 15px ${colors[Math.floor(Math.random() * colors.length)]}, 0 0 25px ${colors[Math.floor(Math.random() * colors.length)]}`;
    sparkle.style.animation = 'megaSparkleAnim 0.8s ease-out forwards';
    
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
}

// Add mega sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes megaSparkleAnim {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(2) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(4) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add hover sound effect simulation (visual feedback)
document.querySelectorAll('.welcome-card, .hero-btn, .game-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
});

// Add click ripple effect
document.querySelectorAll('.hero-btn, .game-btn, .start-btn, .close-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

console.log('✨ ULTIMATE Premium Effects Loaded! ✨');