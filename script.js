// Global variables
let celebrationActive = false;
let confettiInterval;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setCurrentDate();
    setupScrollAnimations();
    startHeartAnimation();
});

 document.addEventListener("DOMContentLoaded", () => {
      const audio = document.getElementById("birthdayAudio");
      const audioBtn = document.getElementById("audioBtn");
      const audioIcon = audioBtn.querySelector(".audio-icon");

      // Düyməni aktiv et
      audioBtn.disabled = false;

      window.toggleAudio = function () {
        if (audio.paused) {
          audio.play();
          audioIcon.textContent = "🔊";
        } else {
          audio.pause();
          audioIcon.textContent = "🔇";
        }
      };
    });

// Initialize website functions
function initializeWebsite() {
    // Add floating balloons periodically
    setInterval(createRandomBalloon, 3000);
    
    // Add sparkle effects on scroll
    window.addEventListener('scroll', addSparkleEffect);
    
    // Add click effects to cards
    setupCardClickEffects();
    
    // Setup intersection observer for animations
    setupIntersectionObserver();
}

// Set current date
function setCurrentDate() {
    const today = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    const dateString = today.toLocaleDateString('az-AZ', options);
    document.getElementById('current-date').textContent = dateString;
}

// Main celebration function
function startCelebration() {
    if (celebrationActive) return;
    
    celebrationActive = true;
    document.body.classList.add('celebration-active');
    
    // Start confetti
    createConfetti();
    
    // Add celebration sound effect (placeholder for future audio)
    console.log('🎉 Celebration started! Audio will be added here.');
    
    // Change button text
    const btn = document.querySelector('.celebrate-btn');
    btn.textContent = '🎉 Bayram Başladı!';
    btn.style.background = 'linear-gradient(45deg, #4CAF50, #8BC34A)';
    
    // Create burst of hearts
    createHeartBurst();
    
    // Create extra balloons
    for (let i = 0; i < 10; i++) {
        setTimeout(() => createRandomBalloon(), i * 100);
    }
    
    // Reset after 5 seconds
    setTimeout(() => {
        celebrationActive = false;
        document.body.classList.remove('celebration-active');
        btn.textContent = 'Bayramı Başlat! 🎊';
        btn.style.background = 'linear-gradient(45deg, #ff6b9d, #ffc3a0)';
        clearConfetti();
    }, 5000);
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b9d', '#ffc3a0', '#a8edea', '#fed6e3', '#ffecd2', '#fcb69f'];
    const confettiContainer = document.getElementById('confetti');
    
    confettiInterval = setInterval(() => {
        for (let i = 0; i < 3; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
            
            confettiContainer.appendChild(confetti);
            
            // Remove after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }
    }, 100);
}

// Clear confetti
function clearConfetti() {
    if (confettiInterval) {
        clearInterval(confettiInterval);
    }
    document.getElementById('confetti').innerHTML = '';
}

// Create random balloons
function createRandomBalloon() {
    const colors = [
        'linear-gradient(45deg, #ff6b9d, #ffc3a0)',
        'linear-gradient(45deg, #a8edea, #fed6e3)',
        'linear-gradient(45deg, #ffecd2, #fcb69f)',
        'linear-gradient(45deg, #fbc2eb, #a6c1ee)',
        'linear-gradient(45deg, #fdbb2d, #22c1c3)'
    ];
    
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.animationDuration = (Math.random() * 3 + 6) + 's';
    balloon.style.animationDelay = '0s';
    
    document.querySelector('.balloons-container').appendChild(balloon);
    
    // Remove after animation
    setTimeout(() => {
        if (balloon.parentNode) {
            balloon.parentNode.removeChild(balloon);
        }
    }, 10000);
}


// Şamları söndürmə funksiyası
function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    const cake = document.querySelector('.cake');
    const button = document.querySelector('.blow-candles-btn');
    
    // Şamları söndür
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.classList.add('blow-out');
        }, index * 200);
    });
    
    // Tort təbrik animasiyası
    setTimeout(() => {
        cake.classList.add('celebration-burst');
        confettiBurst();
        launchFireworks();

        
        // Düyməni dəyiş
        button.textContent = '🎉 Təbriklər! 🎉';
        button.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';
    }, 800);
    
    // Reset funksiyası
    setTimeout(() => {
        flames.forEach(flame => {
            flame.classList.remove('blow-out');
        });
        cake.classList.remove('celebration-burst');
        button.textContent = 'Şamları Üfür 💨';
        button.style.background = 'linear-gradient(45deg, #ff6b6b, #feca57)';
    }, 4000);
}



function confettiBurst() {
    // Mövcud konfeti effekti varsa burada qala bilər...

    // Əlavə: Fireworks effekti
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFirework();
        }, i * 100);
    }
}

function createFirework() {
    const colors = ['#ff5252', '#ffd740', '#40c4ff', '#69f0ae', '#ff4081'];
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * window.innerWidth + 'px';
    firework.style.top = Math.random() * window.innerHeight / 2 + 'px'; // Yuxarıda çıxsın
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById('fireworks-container').appendChild(firework);

    setTimeout(() => {
        if (firework.parentNode) {
            firework.parentNode.removeChild(firework);
        }
    }, 1000);
}

function createFireworkBurst(x, y) {
    const particleCount = 30;
    const colors = ['#ff5252', '#ffd740', '#40c4ff', '#69f0ae', '#ff4081', '#ffffff'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';

        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 100;
        const dx = Math.cos(angle) * radius + 'px';
        const dy = Math.sin(angle) * radius + 'px';

        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.setProperty('--dx', dx);
        particle.style.setProperty('--dy', dy);

        document.body.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
}

function launchFireworks() {
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight / 2;
            createFireworkBurst(x, y);
        }, i * 400);
    }
}



// Create heart burst effect
function createHeartBurst() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heartEmojis = ['💖', '💕', '💝', '💗', '💓', '❤️', '💜', '💙'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        heart.style.animationDelay = (Math.random() * 2) + 's';
        
        heartsContainer.appendChild(heart);
        
        // Remove after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 5000);
    }
}

// Start heart animation
function startHeartAnimation() {
    setInterval(() => {
        if (!celebrationActive) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '💕';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 4 + 8) + 's';
            
            document.querySelector('.hearts-container').appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 12000);
        }
    }, 4000);
}

// Add sparkle effect on scroll
function addSparkleEffect() {
    if (Math.random() > 0.95) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkle 2s ease-out forwards';
        sparkle.style.zIndex = '1000';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
    }
}

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Setup card click effects
function setupCardClickEffects() {
    const cards = document.querySelectorAll('.wish-card, .photo-frame');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Create click ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });
}

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

// Setup scroll animations
function setupScrollAnimations() {
    // Simple intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    // Observe all elements with data-aos
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// Setup intersection observer
function setupIntersectionObserver() {
    setupScrollAnimations();
}

// Audio toggle function (placeholder for future implementation)
function toggleAudio() {
    // This function will be implemented when audio is added
    console.log('🎵 Audio toggle - will be implemented when audio file is added');
}


// Smooth scroll for navigation
function smoothScrollTo(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.balloon, .heart');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add interactive hover effects
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.98) {
        const trail = document.createElement('div');
        trail.innerHTML = '⭐';
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.fontSize = '12px';
        trail.style.pointerEvents = 'none';
        trail.style.animation = 'starTrail 1s ease-out forwards';
        trail.style.zIndex = '999';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 1000);
    }
});

// Add star trail animation
const starStyle = document.createElement('style');
starStyle.textContent = `
    @keyframes starTrail {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0) translateY(-20px);
        }
    }
`;
document.head.appendChild(starStyle);

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        e.preventDefault();
        startCelebration();
    }
});

// Add mobile touch effects
document.addEventListener('touchstart', (e) => {
    if (Math.random() > 0.9) {
        const touch = e.touches[0];
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '💫';
        sparkle.style.position = 'fixed';
        sparkle.style.left = touch.clientX + 'px';
        sparkle.style.top = touch.clientY + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkle 1.5s ease-out forwards';
        sparkle.style.zIndex = '999';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1500);
    }
});

// Performance optimization
let ticking = false;

function updateAnimations() {
    // Update any animations that need to be synchronized
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

// Optimize scroll performance
window.addEventListener('scroll', requestTick);

console.log('🎂 Günəl üçün ad günü saytı hazırdır! 🎉');
console.log('🎵 Audio əlavə etmək üçün audio-section bölməsini istifadə edin.');
console.log('📝 Şəxsi mesajı personal-message bölməsində dəyişdirin.');
console.log('📸 Şəkilləri gallery-section-da əlavə edin.');

