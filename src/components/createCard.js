import createButton from './createButton.js';

const createCard = (item) => {
    // card div
    const cardDivEle = document.createElement('div');
    cardDivEle.classList.add('card');

    // card img
    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img');
    cardImg.src = item.src;
    cardImg.alt = 'card-image';

    // continent
    const continentDivEle = document.createElement('div');
    continentDivEle.classList.add('continent');

    // title-price container
    const titlePriceContainerEle = document.createElement('div');
    titlePriceContainerEle.classList.add('title-price');

    const cardTitleEle = document.createElement('h3');
    cardTitleEle.classList.add('card-title');
    cardTitleEle.innerText = item.title;

    const priceEle = document.createElement('h4');
    priceEle.innerText = item.price;
    titlePriceContainerEle.append(cardTitleEle, priceEle);

    // info container
    const cardContinentEle = document.createElement('p');
    cardContinentEle.classList.add('card-continent');
    cardContinentEle.innerText = item.desc;

    // card button
    const btnContainerEle = document.createElement('div');
    btnContainerEle.classList.add('order-btn');

    const takeAwayBtn = createButton('button', 'btn', 'takeaway', 'TakeAway');
    const OrderBtn = createButton('button', 'btn', 'order', 'Order');
    btnContainerEle.append(takeAwayBtn, OrderBtn);

    continentDivEle.append(titlePriceContainerEle, cardContinentEle, btnContainerEle);
    cardDivEle.append(cardImg, continentDivEle);
    return cardDivEle;
};

export default createCard;