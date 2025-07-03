// Particle Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const delay = Math.random() * 6;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animationDelay = delay + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animation elements
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
    observer.observe(el);
});

// Smooth scrolling for navigation links
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

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'md:hidden bg-dark-card border-t border-dark-border hidden';
mobileMenu.innerHTML = `
    <div class="px-4 py-4 space-y-4">
        <a href="#home" class="block text-dark-subtle hover:text-primary">Home</a>
        <a href="#projects" class="block text-dark-subtle hover:text-primary">Projects</a>
        <a href="#about" class="block text-dark-subtle hover:text-primary">About</a>
        <a href="#contact" class="block text-dark-subtle hover:text-primary">Contact</a>
    </div>
`;

document.querySelector('nav').appendChild(mobileMenu);

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.particle');
    
    parallaxElements.forEach((element, index) => {
        const speed = (index % 3 + 1) * 0.5;
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Initialize particles when page loads
window.addEventListener('load', () => {
    createParticles();
});

// Typing animation for hero text
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

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add glowing effect to buttons on hover
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.5)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.boxShadow = '0 10px 20px rgba(139, 92, 246, 0.3)';
    });
});

// Stagger animation for tech cards
const techCards = document.querySelectorAll('.tech-card');
techCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});



// Rainbow cloud cursor trail
const cloudColors = [
    'rgba(139,92,246,0.45)', // primary
    'rgba(168,85,247,0.45)', // secondary
    'rgba(236,72,153,0.45)'  // accent
];
function createCloudTrail(x, y) {
    const cloud = document.createElement('div');
    const colorIndex = Math.floor(Math.random() * cloudColors.length);
    cloud.style.position = 'fixed';
    cloud.style.left = (x - 40) + 'px';
    cloud.style.top = (y - 40) + 'px';
    cloud.style.width = '80px';
    cloud.style.height = '80px';
    cloud.style.pointerEvents = 'none';
    cloud.style.borderRadius = '50%';
    cloud.style.background = `radial-gradient(circle at 60% 40%, ${cloudColors[colorIndex]}, transparent 70%)`;
    cloud.style.filter = 'blur(18px)';
    cloud.style.zIndex = 9999;
    cloud.style.opacity = '1';
    cloud.style.transition = 'opacity 1.1s cubic-bezier(.4,2,.6,1)';
    document.body.appendChild(cloud);
    setTimeout(() => {
        cloud.style.opacity = '0';
        setTimeout(() => cloud.remove(), 1100);
    }, 10);
}

let lastCloudTime = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastCloudTime > 4) { // denser, smoother trail
        createCloudTrail(e.clientX, e.clientY);
        lastCloudTime = now;
    }
});