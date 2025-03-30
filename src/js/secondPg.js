import { ProductCard } from './card.js';

const newCard = new ProductCard(
  'img/product.jpg',
  'Навушники TWS Samsung Galaxy Buds3 Pro Silver',
  '$100'
);

newCard.createCard();

const formWrapper = document.querySelector('.form-wrapper');
const productCard = document.querySelector('.product-card');

const discountChecBox = document.getElementById('discount');
const newChecBox = document.getElementById('new');
const popularChecBox = document.getElementById('popular');

const addDiscountToCard = e => {
  productCard.classList.toggle('discounted');
};

const addNewToCard = e => {
  productCard.classList.toggle('new-product');
};

const addPopularToCard = e => {
  productCard.classList.toggle('popular');
};

discountChecBox.addEventListener('click', addDiscountToCard);
newChecBox.addEventListener('click', addNewToCard);
popularChecBox.addEventListener('click', addPopularToCard);
