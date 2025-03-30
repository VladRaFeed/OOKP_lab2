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
