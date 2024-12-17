const menuData = {
    pizzas: [
        {
            name: "Pizza n°1",
            description: "Sauce tomate, mozzarella, basilic frais",
            price: "12€",
            image: "images/pizza-menu-1.jpg"
        },
        {
            name: "Pizza n°2",
            description: "Sauce tomate, mozzarella, basilic frais",
            price: "12€",
            image: "images/pizza-menu-2.jpg"
        },
        {
            name: "Pizza n°3",
            description: "Sauce tomate, mozzarella, pepperoni",
            price: "13€",
            image: "images/pizza-menu-3.jpg"
        },
        {
            name: "Pizza n°4",
            description: "Sauce tomate, mozzarella, basilic frais",
            price: "12€",
            image: "images/pizza-menu-4.jpg"
        }
    ]
};

let currentSlide = 0;

function renderMenu() {
    const menuContainer = document.querySelector('.menu-grid');
    let menuHTML = '';

    menuData.pizzas.forEach(pizza => {
        menuHTML += `
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="${pizza.image}" alt="${pizza.name}">
                </div>
                <div class="menu-item-content">
                    <h3>${pizza.name}</h3>
                    <p>${pizza.description}</p>
                    <span class="price">${pizza.price}</span>
                </div>
            </div>
        `;
    });

    menuContainer.innerHTML = menuHTML;
}

function moveCarousel(direction) {
    const carousel = document.querySelector('.menu-grid');
    const items = document.querySelectorAll('.menu-item');
    const itemWidth = items[0].offsetWidth + 32; // Including margin
    const maxSlide = 1;
    
    if (direction === 'next' && currentSlide < maxSlide) {
        currentSlide++;
    } else if (direction === 'prev' && currentSlide > 0) {
        currentSlide--;
    }
    
    // Update button states
    document.querySelector('.prev').disabled = currentSlide === 0;
    document.querySelector('.next').disabled = currentSlide === maxSlide;
    
    carousel.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    
    // Add event listeners for carousel buttons
    document.querySelector('.prev').addEventListener('click', () => moveCarousel('prev'));
    document.querySelector('.next').addEventListener('click', () => moveCarousel('next'));
});