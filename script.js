// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileLinks = document.querySelectorAll('.mobile-nav-list a');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// Sticky Header (Optional)
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImages = document.querySelectorAll('.gallery-img');
const lightboxClose = document.querySelector('.lightbox-close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
    });
});

if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
}

// Close lightbox when clicking outside the image
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

// Appointment Modal
const appointmentBtns = document.querySelectorAll('a[href="#contact"]');
const appointmentModal = document.getElementById('appointment-modal');
const modalClose = document.querySelector('.modal-close');

appointmentBtns.forEach(btn => {
    if (btn.classList.contains('btn')) { // Target only the buttons, not the nav link
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            appointmentModal.classList.add('active');
        });
    }
});

if (modalClose) {
    modalClose.addEventListener('click', () => {
        appointmentModal.classList.remove('active');
    });
}

if (appointmentModal) {
    appointmentModal.addEventListener('click', (e) => {
        if (e.target === appointmentModal) {
            appointmentModal.classList.remove('active');
        }
    });
}
