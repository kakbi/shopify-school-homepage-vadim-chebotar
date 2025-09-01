export function initFooterAccordion() {
    document.querySelectorAll('.footer__title').forEach((title) => {
        title.addEventListener('click', () => {
            const column = title.parentElement;
            column.classList.toggle('active');
        });
    });
}
