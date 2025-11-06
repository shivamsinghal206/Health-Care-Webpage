// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for your message, ' + name + '! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Appointment form handler
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Appointment request submitted! We will confirm your booking soon.');
            appointmentForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Accessibility features
    // Font size controls
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    let currentFontSize = 100; // percentage

    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', function() {
            currentFontSize += 20;
            document.body.style.fontSize = currentFontSize + '%';
        });
    }

    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener('click', function() {
            currentFontSize -= 20;
            if (currentFontSize < 80) currentFontSize = 80; // minimum 80%
            document.body.style.fontSize = currentFontSize + '%';
        });
    }

    // Contrast toggle with persistence
    const highContrastBtn = document.getElementById('high-contrast');
    const normalContrastBtn = document.getElementById('normal-contrast');

    // Load saved contrast mode on page load
    const savedContrast = localStorage.getItem('contrastMode');
    if (savedContrast === 'high-contrast') {
        document.body.classList.add('high-contrast');
    }

    if (highContrastBtn) {
        highContrastBtn.addEventListener('click', function() {
            document.body.classList.add('high-contrast');
            localStorage.setItem('contrastMode', 'high-contrast');
        });
    }

    if (normalContrastBtn) {
        normalContrastBtn.addEventListener('click', function() {
            document.body.classList.remove('high-contrast');
            localStorage.setItem('contrastMode', 'normal');
        });
    }

    // Language selection
    const languageSelect = document.getElementById('language-select');
    const translations = {
        en: {
            heroTitle: "Compassionate Care for Every Step",
            heroDesc: "Gentle, compassionate care for pediatric health and mental wellness. Creating a safe space for healing and growth.",
            servicesTitle: "Our Caring Services",
            teamTitle: "Meet Our Compassionate Team",
            testimonialsTitle: "Patient Testimonials",
            pediatricTitle: "Pediatric Corner",
            resourcesTitle: "Mental Wellness Resources",
            blogTitle: "Health Blog & Articles",
            howItWorksTitle: "How It Works: Your Care Journey",
            videoTitle: "Video Introduction",
            safetyTitle: "Safety & Hygiene Protocols",
            accessibilityTitle: "Accessibility & Language Support",
            appointmentTitle: "Book Your Appointment"
        },
        hi: {
            heroTitle: "हर कदम के लिए सहानुभूतिपूर्ण देखभाल",
            heroDesc: "बाल चिकित्सा स्वास्थ्य और मानसिक कल्याण के लिए कोमल, सहानुभूतिपूर्ण देखभाल। उपचार और विकास के लिए एक सुरक्षित स्थान बनाना।",
            servicesTitle: "हमारी देखभाल सेवाएं",
            teamTitle: "हमारी सहानुभूतिपूर्ण टीम से मिलें",
            testimonialsTitle: "मरीज़ों की प्रशंसाएं",
            pediatricTitle: "बाल चिकित्सा कोना",
            resourcesTitle: "मानसिक कल्याण संसाधन",
            blogTitle: "स्वास्थ्य ब्लॉग और लेख",
            howItWorksTitle: "यह कैसे काम करता है: आपकी देखभाल यात्रा",
            videoTitle: "वीडियो परिचय",
            safetyTitle: "सुरक्षा और स्वच्छता प्रोटोकॉल",
            accessibilityTitle: "पहुंच और भाषा समर्थन",
            appointmentTitle: "अपॉइंटमेंट बुक करें"
        }
    };

    function translatePage(lang) {
        const trans = translations[lang];
        if (!trans) return;

        // Update headings
        const heroH2 = document.querySelector('#hero h2');
        if (heroH2) heroH2.textContent = trans.heroTitle;

        const heroP = document.querySelector('#hero p');
        if (heroP) heroP.textContent = trans.heroDesc;

        const servicesH2 = document.querySelector('#services h2');
        if (servicesH2) servicesH2.textContent = trans.servicesTitle;

        const teamH2 = document.querySelector('#team h2');
        if (teamH2) teamH2.textContent = trans.teamTitle;

        const testimonialsH2 = document.querySelector('#testimonials h2');
        if (testimonialsH2) testimonialsH2.textContent = trans.testimonialsTitle;

        const pediatricH2 = document.querySelector('#pediatric h2');
        if (pediatricH2) pediatricH2.textContent = trans.pediatricTitle;

        const resourcesH2 = document.querySelector('#resources h2');
        if (resourcesH2) resourcesH2.textContent = trans.resourcesTitle;

        const blogH2 = document.querySelector('#blog h2');
        if (blogH2) blogH2.textContent = trans.blogTitle;

        const howItWorksH2 = document.querySelector('#how-it-works h2');
        if (howItWorksH2) howItWorksH2.textContent = trans.howItWorksTitle;

        const videoH2 = document.querySelector('#video h2');
        if (videoH2) videoH2.textContent = trans.videoTitle;

        const safetyH2 = document.querySelector('#safety h2');
        if (safetyH2) safetyH2.textContent = trans.safetyTitle;

        const accessibilityH2 = document.querySelector('#accessibility h2');
        if (accessibilityH2) accessibilityH2.textContent = trans.accessibilityTitle;

        const appointmentH2 = document.querySelector('#appointment h2');
        if (appointmentH2) appointmentH2.textContent = trans.appointmentTitle;

        // Update for services page
        const servicesHeroH2 = document.querySelector('.hero h2');
        if (servicesHeroH2 && servicesHeroH2.textContent === 'Our Comprehensive Services') {
            servicesHeroH2.textContent = trans.servicesTitle;
        }

        // Update for contact page
        const contactHeroH2 = document.querySelector('.hero h2');
        if (contactHeroH2 && contactHeroH2.textContent === 'Get in Touch') {
            contactHeroH2.textContent = 'संपर्क करें'; // Hindi for Get in Touch
        }
    }

    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const selectedLang = this.value;
            localStorage.setItem('selectedLanguage', selectedLang);
            translatePage(selectedLang);
        });

        // Load saved language on page load
        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
        languageSelect.value = savedLang;
        translatePage(savedLang);
    }
});
