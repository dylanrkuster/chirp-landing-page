// ===================================
// SMOOTH SCROLL WITH OFFSET FOR FIXED NAVBAR
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            // Skip if it's just a placeholder link
            if (targetId === '#' || targetId === '#privacy' || targetId === '#terms' || targetId === '#contact') {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // NAVBAR SCROLL EFFECT
    // ===================================

    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
    // ===================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply fade-in animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Apply fade-in to screenshots
    const screenshots = document.querySelectorAll('.screenshot-wrapper');
    screenshots.forEach((screenshot, index) => {
        screenshot.style.opacity = '0';
        screenshot.style.transform = 'translateY(30px)';
        screenshot.style.transition = `all 0.6s ease ${index * 0.15}s`;
        observer.observe(screenshot);
    });

    // ===================================
    // MOBILE MENU TOGGLE (for future enhancement)
    // ===================================

    // This is a placeholder for future mobile menu functionality
    // You can expand this if you want to add a hamburger menu for mobile

    const createMobileMenu = () => {
        const navLinks = document.querySelector('.nav-links');
        const mobileToggle = document.createElement('button');
        mobileToggle.classList.add('mobile-menu-toggle');
        mobileToggle.innerHTML = `
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        `;

        // Only show on mobile
        if (window.innerWidth <= 768) {
            document.querySelector('.navbar .container').appendChild(mobileToggle);

            mobileToggle.addEventListener('click', () => {
                navLinks.classList.toggle('show');
            });
        }
    };

    // ===================================
    // TRACK EXTERNAL LINK CLICKS (for analytics)
    // ===================================

    const trackDownloadClicks = () => {
        const downloadButtons = document.querySelectorAll('a[href*="apps.apple.com"]');

        downloadButtons.forEach(button => {
            button.addEventListener('click', function() {
                // You can add analytics tracking here
                // Example: gtag('event', 'click', { event_category: 'Download', event_label: 'App Store' });
                console.log('App Store download button clicked');
            });
        });
    };

    trackDownloadClicks();

    // ===================================
    // CAROUSEL FUNCTIONALITY
    // ===================================

    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        let currentSlide = 0;
        let autoplayInterval = null;
        let autoplayTimeout = null;

        function showSlide(index) {
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Wrap around if index is out of bounds
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            // Add active class to current slide and dot
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startAutoplay() {
            // Clear any existing intervals to prevent stacking
            stopAutoplay();
            autoplayInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoplay() {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
                autoplayInterval = null;
            }
            if (autoplayTimeout) {
                clearTimeout(autoplayTimeout);
                autoplayTimeout = null;
            }
        }

        function restartAutoplayWithDelay() {
            stopAutoplay();
            autoplayTimeout = setTimeout(startAutoplay, 3000);
        }

        // Event listeners for buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                restartAutoplayWithDelay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                restartAutoplayWithDelay();
            });
        }

        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                restartAutoplayWithDelay();
            });
        });

        // Pause autoplay on hover
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);

        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe left
                nextSlide();
                restartAutoplayWithDelay();
            }
            if (touchEndX > touchStartX + 50) {
                // Swipe right
                prevSlide();
                restartAutoplayWithDelay();
            }
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                restartAutoplayWithDelay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                restartAutoplayWithDelay();
            }
        });

        // Start autoplay
        startAutoplay();
    }

    // ===================================
    // LAZY LOADING IMAGES (for screenshots)
    // ===================================

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});