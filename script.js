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

// ===== MUSIC PLAYER WITH REAL TRACKS =====
(function () {
    const TRACKS = [
        { title: "Blue",             artist: "Yung Kai (Slowed)",         src: "assets/music/blue.mp3" },
        { title: "Can't Help Falling in Love", artist: "Elvis Presley",   src: "assets/music/cant_help_falling_in_love.mp3" },
        { title: "I Wanna Be Yours", artist: "Arctic Monkeys",            src: "assets/music/i_wanna_be_yours.mp3" },
        { title: "My Everything",    artist: "Owl City",                  src: "assets/music/my_everything.mp3" },
        { title: "You Are My Sunshine", artist: "Christina Perri",                src: "assets/music/you_are_my_sunshine.mp3" },
    ];

    let currentIndex = 0;
    let isPlaying = false;
    let isMuted = false;
    let currentVolume = 0.5;

    // ── Build HTML ──────────────────────────────────────────────────
    const playerHTML = `
    <div class="music-player" id="musicPlayer">
        <button class="music-nav-btn" id="prevBtn" title="Previous">&#9664;</button>
        <button class="music-toggle" id="musicToggle" title="Play / Pause">&#9654;</button>
        <button class="music-nav-btn" id="nextBtn" title="Next">&#9654;&#9654;</button>
        <div class="music-bars" id="musicBars">
            <div class="music-bar"></div>
            <div class="music-bar"></div>
            <div class="music-bar"></div>
            <div class="music-bar"></div>
        </div>
        <div class="music-info">
            <span class="music-title" id="musicTitle">${TRACKS[0].title}</span>
            <span class="music-artist" id="musicArtist">${TRACKS[0].artist}</span>
        </div>
        <div class="music-track-dots" id="trackDots"></div>
        <div class="volume-control">
            <span class="volume-icon" id="volumeIcon" title="Mute / Unmute">&#128266;</span>
            <input type="range" class="volume-slider" id="volumeSlider" min="0" max="1" step="0.05" value="0.5">
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', playerHTML);

    // ── DOM refs ─────────────────────────────────────────────────────
    const toggleBtn    = document.getElementById('musicToggle');
    const prevBtn      = document.getElementById('prevBtn');
    const nextBtn      = document.getElementById('nextBtn');
    const musicTitle   = document.getElementById('musicTitle');
    const musicArtist  = document.getElementById('musicArtist');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeIcon   = document.getElementById('volumeIcon');
    const musicBars    = document.getElementById('musicBars');
    const trackDots    = document.getElementById('trackDots');

    // ── Create audio element ─────────────────────────────────────────
    const audio = new Audio();
    audio.volume = currentVolume;
    audio.preload = 'none';

    // ── Track dots ───────────────────────────────────────────────────
    function buildDots() {
        trackDots.innerHTML = '';
        TRACKS.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = 'track-dot' + (i === currentIndex ? ' active' : '');
            dot.dataset.index = i;
            dot.title = TRACKS[i].title;
            dot.addEventListener('click', () => loadTrack(i, true));
            trackDots.appendChild(dot);
        });
    }
    buildDots();

    function updateDots() {
        trackDots.querySelectorAll('.track-dot').forEach((d, i) => {
            d.classList.toggle('active', i === currentIndex);
        });
    }

    // ── Load & play ───────────────────────────────────────────────────
    function loadTrack(index, autoPlay) {
        currentIndex = (index + TRACKS.length) % TRACKS.length;
        const track = TRACKS[currentIndex];
        audio.src = track.src;
        musicTitle.textContent  = track.title;
        musicArtist.textContent = track.artist;
        updateDots();

        // Animate title
        musicTitle.style.animation = 'none';
        void musicTitle.offsetWidth;
        musicTitle.style.animation = 'trackSlideIn 0.4s ease-out';

        if (autoPlay) {
            audio.play().then(() => {
                setPlayingState(true);
            }).catch(() => setPlayingState(false));
        }
    }

    function setPlayingState(playing) {
        isPlaying = playing;
        if (playing) {
            toggleBtn.innerHTML = '&#9646;&#9646;';
            toggleBtn.classList.add('playing');
            musicBars.classList.add('active');
        } else {
            toggleBtn.innerHTML = '&#9654;';
            toggleBtn.classList.remove('playing');
            musicBars.classList.remove('active');
        }
    }

    // ── Controls ──────────────────────────────────────────────────────
    toggleBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            setPlayingState(false);
        } else {
            if (!audio.src || audio.src === window.location.href) {
                loadTrack(currentIndex, true);
            } else {
                audio.play().then(() => setPlayingState(true)).catch(() => {});
            }
        }
    });

    prevBtn.addEventListener('click', () => loadTrack(currentIndex - 1, isPlaying));
    nextBtn.addEventListener('click', () => loadTrack(currentIndex + 1, isPlaying));

    // Auto-advance
    audio.addEventListener('ended', () => loadTrack(currentIndex + 1, true));

    // ── Volume ────────────────────────────────────────────────────────
    volumeSlider.addEventListener('input', (e) => {
        currentVolume = parseFloat(e.target.value);
        audio.volume = isMuted ? 0 : currentVolume;
        updateVolumeIcon();
    });

    volumeIcon.addEventListener('click', () => {
        isMuted = !isMuted;
        audio.volume = isMuted ? 0 : currentVolume;
        updateVolumeIcon();
    });

    function updateVolumeIcon() {
        if (isMuted || currentVolume === 0) volumeIcon.innerHTML = '&#128263;';
        else if (currentVolume < 0.5)       volumeIcon.innerHTML = '&#128265;';
        else                                 volumeIcon.innerHTML = '&#128266;';
    }

    // Pre-load first track path (no autoplay)
    audio.src = TRACKS[0].src;

    console.log('🎵 Music Player with 5 tracks loaded!');
})();
