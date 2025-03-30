import"./assets/modulepreload-polyfill-B5Qt9EMX.js";class r{constructor(e,o,d){this.productImage=e,this.productTitle=o,this.price=d}createCard(){const e=document.querySelector(".products-list");e.innerHTML=`
        <div class="product-card">
            <img src="${this.productImage}" alt="Product" />
            <h3>${this.productTitle}</h3>
            <p class="price">${this.price}</p>
        </div>
        `}}const s=new r("img/product.jpg","Навушники TWS Samsung Galaxy Buds3 Pro Silver","$100");s.createCard();document.querySelector(".form-wrapper");const c=document.querySelector(".product-card"),n=document.getElementById("discount"),a=document.getElementById("new"),i=document.getElementById("popular"),u=t=>{c.classList.toggle("discounted")},l=t=>{c.classList.toggle("new-product")},p=t=>{c.classList.toggle("popular")};n.addEventListener("click",u);a.addEventListener("click",l);i.addEventListener("click",p);
//# sourceMappingURL=decorator.js.map
