document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image Gallery Lightbox functionality
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox img');
    const closeBtn = document.querySelector('.lightbox.close');
    const prevBtn = document.querySelector('.lightbox.prev');
    const nextBtn = document.querySelector('.lightbox.next');

    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = galleryImages[currentIndex].src;
        lightbox.style.display = 'flex';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentIndex].src;
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentIndex].src;
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Close lightbox on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});
