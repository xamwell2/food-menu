/**
 * Create a flight element.
 *
 * @param {object} flight - Flight object.
 * @returns {HTMLElement} - Flight element.
 */

import dom from '../dom.js';
import filterMenuItems from '../utils/filterMenuItems.js';
import createCard from './createCard.js';

const createButton = (tagName, className, id, innerText) => {
    const button = document.createElement(tagName);
    button.classList.add(className);
    button.id = id;
    button.innerText = innerText;

    button.addEventListener('click', () => {
        const card = filterMenuItems(button.id);
        dom.cardContainer.innerHTML = '';
        card.forEach((item) => {
            const createDom = createCard(item);
            dom.cardContainer.append(createDom);
        });
    });
    return button;
};
export default createButton;