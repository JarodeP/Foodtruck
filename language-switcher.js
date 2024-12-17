const translations = {
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-menu": "Menu",
        "nav-location": "Où nous trouver",
        "nav-contact": "Contact",
        "hero-title": "Des pizzas artisanales, où que vous soyez !",
        "hero-subtitle": "Découvrez nos délicieuses pizzas préparées avec des ingrédients frais et locaux",
        "btn-locate": "Localisez-nous",
        "btn-order": "Commander",
        "about-title": "Notre Histoire",
        "about-text": "Je suis Marco, passionné de pizza et de voyages. Avec mon Pizz'Truck, j'ai voulu réunir mes deux amours : la cuisine italienne authentique et la liberté de parcourir les routes. Chaque jour, je prépare des pizzas avec des ingrédients frais et des saveurs inspirées de mes aventures. Mon objectif ? Apporter un peu d'Italie et beaucoup de convivialité directement jusqu'à vous.",
        "menu-title": "Nos Menus",
        "location-title": "Où nous trouver",
        "contact-title": "Contactez-nous",
        "contact-name": "Nom:",
        "contact-email": "Email:",
        "contact-message": "Message:",
        "contact-send": "Envoyer",
        "footer-text": "© 2024 Pizza Food Truck. Tous droits réservés."
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-menu": "Menu",
        "nav-location": "Find Us",
        "nav-contact": "Contact",
        "hero-title": "Artisanal pizzas, wherever you are!",
        "hero-subtitle": "Discover our delicious pizzas made with fresh, local ingredients",
        "btn-locate": "Find Us",
        "btn-order": "Order Now",
        "about-title": "Our Story",
        "about-text": "I'm Marco, passionate about pizza and travel. With my Pizz'Truck, I wanted to combine my two loves: authentic Italian cuisine and the freedom to travel the roads. Every day, I prepare pizzas with fresh ingredients and flavors inspired by my adventures. My goal? To bring a bit of Italy and lots of conviviality directly to you.",
        "menu-title": "Our Menus",
        "location-title": "Find Us",
        "contact-title": "Contact Us",
        "contact-name": "Name:",
        "contact-email": "Email:",
        "contact-message": "Message:",
        "contact-send": "Send",
        "footer-text": "© 2024 Pizza Food Truck. All rights reserved."
    }
};

let currentLang = 'fr';

function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    updateLanguage();
    updateButtonText();
}

function updateLanguage() {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

function updateButtonText() {
    const button = document.getElementById('langToggle');
    if (currentLang === 'fr') {
        button.textContent = '🇬🇧 EN';
    } else {
        button.textContent = '🇫🇷 FR';
    }
}
