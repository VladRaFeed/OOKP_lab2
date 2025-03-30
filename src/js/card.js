export class ProductCard {
  constructor(productImage, productTitle, price) {
    this.productImage = productImage;
    this.productTitle = productTitle;
    this.price = price;
  }

  createCard() {
    const list = document.querySelector('.products-list');
    list.innerHTML = `
        <div class="product-card">
            <img src="${this.productImage}" alt="Product" />
            <h3>${this.productTitle}</h3>
            <p class="price">${this.price}</p>
        </div>
        `;
  }
}

export class ProductCardDiscount extends ProductCard {
  constructor(card) {
    super(card);
  }

  toogleDiscountToCard = e => {
    const productCard = document.querySelector('.product-card');
    productCard.classList.toggle('discounted');
  }
}

export class ProductCardNew extends ProductCard {
  constructor(card) {
    super(card);
  }

  toggleNewToCard = e => {
    const productCard = document.querySelector('.product-card');
    productCard.classList.toggle('new-product');
  }
}

export class ProductCardPopular extends ProductCard {
  constructor(card) {
    super(card);
  }

  tooglePopularToCard = e => {
    const productCard = document.querySelector('.product-card');
    productCard.classList.toggle('popular');
  }
}