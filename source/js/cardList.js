const CARDS_DATA = [
    {
        title: 'Декаф Флэт Уайт',
        description: 'Кофе без кофеина из Эфиопии с натуральным фермерским молоком',
        picture: 1,
        price: 225,
    },
    {
        title: 'Декаф Флэт Уайт',
        description: 'Кофе без кофеина из Эфиопии с натуральным фермерским молоком',
        picture: 2,
        price: 225,
    },
    {
        title: 'Декаф Флэт Уайт',
        description: 'Кофе без кофеина из Эфиопии с натуральным фермерским молоком',
        picture: 3,
        price: 225,
    },
    {
        title: 'Декаф Флэт Уайт',
        description: 'Кофе без кофеина из Эфиопии с натуральным фермерским молоком',
        picture: 4,
        price: 225,
    },
    {
        title: 'Декаф Флэт Уайт',
        description: 'Кофе без кофеина из Эфиопии с натуральным фермерским молоком',
        picture: 5,
        price: 225,
    },
    {
        title: 'Декаф Флэт Уайт',
        description: 'Кофе без кофеина из Эфиопии с натуральным фермерским молоком',
        picture: 6,
        price: 225,
    },
    {
        title: 'Декаф Флэт Уайт',
        description: 'Кофе без кофеина из Эфиопии с натуральным фермерским молоком',
        picture: 7,
        price: 225,
    },
    {
        title: 'Декаф Флэт Уайт',
        description: 'Кофе без кофеина из Эфиопии с натуральным фермерским молоком',
        picture: 8,
        price: 225,
    },
    {
        title: 'Декаф Флэт Уайт',
        description: 'Кофе без кофеина из Эфиопии с натуральным фермерским молоком',
        picture: 9,
        price: 225,
    }
];

const cardTemplate = document.querySelector('#template-card')
    .content
    .querySelector('li');
const cardsFragment = document.createDocumentFragment();
const cardsContainer = document.querySelector('.catalog-list');

function setIdPicture (id) {
    const imgId = id
    return `
        <source srcset="./img/card-img/coffee-can-${imgId}.webp 1x, ./img/card-img/coffee-can-${imgId}@2x.webp 2x" type="image/webp">
        <img class="card__img" src="./img/card-img/coffee-can-${imgId}.png" srcset="./img/card-img/coffee-can-${imgId}@2x.png 2x" width="130" height="188" alt="Декаф Флэт Уайт.">
`;
}

function createCard (elementData) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.card__picture').innerHTML = setIdPicture(elementData.picture);
    cardElement.querySelector('.card__title').textContent = elementData.title;
    cardElement.querySelector('.card__description').textContent = elementData.description;
    cardElement.querySelector('.card__price-text').textContent = elementData.price;
    console.log(cardElement);
    return cardElement;
}
function generateCards (data) {
    for (let i = 0; i < data.length; i++) {
        const element = createCard(data[i]);
        cardsFragment.appendChild(element);
    }
    cardsContainer.appendChild(cardsFragment);
}

export default function generateCard () {
    generateCards(CARDS_DATA);
}
