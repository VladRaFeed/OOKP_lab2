import { ProductCard, ProductCardDiscount, ProductCardNew, ProductCardPopular } from './card.js';

const newCard = new ProductCard(
  'img/product.jpg',
  'Навушники TWS Samsung Galaxy Buds3 Pro Silver',
  '$100'
);

newCard.createCard();

const productCard = document.querySelector('.product-card');

const discountChecBox = document.getElementById('discount');
const newChecBox = document.getElementById('new');
const popularChecBox = document.getElementById('popular');

const addDiscountToCard = e => {
  const newToggle = new ProductCardDiscount(newCard);
  newToggle.toogleDiscountToCard();
};

const addNewToCard = e => {
  const newToggle = new ProductCardNew(newCard);
  newToggle.toggleNewToCard();
};

const addPopularToCard = e => {
  const newToggle = new ProductCardPopular(newCard);
  newToggle.tooglePopularToCard();
};

discountChecBox.addEventListener('click', addDiscountToCard);
newChecBox.addEventListener('click', addNewToCard);
popularChecBox.addEventListener('click', addPopularToCard);
