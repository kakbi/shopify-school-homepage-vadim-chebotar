export function initModal() {
    const modal = document.getElementById('discountModal');
    const closeBtn = document.getElementById('modalClose');
    const form = document.getElementById('modalForm');

    setTimeout(() => {
        modal.classList.add('active');
    }, 1000);

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.classList.remove('active');
        alert('Thank You!');
    });

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__overlay')) {
            modal.classList.remove('active');
        }
    });
}
