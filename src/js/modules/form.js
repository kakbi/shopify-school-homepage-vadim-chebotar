export function initHelpForm() {
    const form = document.querySelector('.help__form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you!');
        form.reset();
    });
}
