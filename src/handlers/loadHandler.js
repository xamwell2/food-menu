import createButton from '../components/createButton.js';
import createCard from '../components/createCard.js';
import data from '../data.js';
import dom from '../dom.js';

const loadHandler = () => {
    data.buttons.forEach((btnData) => {
        const { id, text } = btnData;
        const button = createButton('button', 'btn', id, text);
        dom.btnContainer.append(button);
    });

    data.menu.forEach((item) => {
        const createDom = createCard(item);
        dom.cardContainer.append(createDom);
    });
};

export default loadHandler;