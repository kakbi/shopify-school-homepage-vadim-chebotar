import products from '../../data/products.js';

export function initSpotlight() {
    const miniaturesContainer = document.querySelector(
        '.spotlight__miniatures'
    );
    const mainImage = document.querySelector('.spotlight__image');
    const models = document.querySelectorAll('.spotlight__model');
    const price = document.querySelector('.spotlight__price');
    const sizes = document.querySelectorAll('.spotlight__size');

    function renderMiniatures(miniatures) {
        miniaturesContainer.innerHTML = '';
        miniatures.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Miniature ${index + 1}`;
            img.classList.add('spotlight__miniature');
            if (index === 0) img.classList.add('active');
            miniaturesContainer.appendChild(img);

            img.addEventListener('click', () => {
                document
                    .querySelectorAll('.spotlight__miniature')
                    .forEach((t) => t.classList.remove('active'));
                img.classList.add('active');
                mainImage.src = src;
            });
        });
    }

    models.forEach((btn) => {
        btn.addEventListener('click', () => {
            models.forEach((m) => m.classList.remove('active'));
            btn.classList.add('active');

            const color = btn.dataset.color;
            const product = products[color];

            mainImage.src = product.main;
            price.textContent = product.price;

            renderMiniatures(product.miniatures);
        });
    });

    sizes.forEach((btn) => {
        btn.addEventListener('click', () => {
            sizes.forEach((s) => s.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    renderMiniatures(products['purple'].miniatures);
}
