import { initFooterAccordion } from './modules/footer.js';
import { initHelpForm } from './modules/form.js';
import { initMenu } from './modules/menu.js';
import { initModal } from './modules/modal.js';
import { initFeaturedSlider, initHeroSlider } from './modules/sliders.js';
import { initSpotlight } from './modules/spotlight.js';

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initFeaturedSlider();
    initSpotlight();
    initHelpForm();
    initFooterAccordion();
    initMenu();
    initModal();
});
