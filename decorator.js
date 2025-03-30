var n=Object.defineProperty;var u=(o,e,t)=>e in o?n(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>u(o,typeof e!="symbol"?e+"":e,t);import"./assets/modulepreload-polyfill-B5Qt9EMX.js";class d{constructor(e,t,c){this.productImage=e,this.productTitle=t,this.price=c}createCard(){const e=document.querySelector(".products-list");e.innerHTML=`
        <div class="product-card">
            <img src="${this.productImage}" alt="Product" />
            <h3>${this.productTitle}</h3>
            <p class="price">${this.price}</p>
        </div>
        `}}class a extends d{constructor(t){super(t);r(this,"toogleDiscountToCard",t=>{document.querySelector(".product-card").classList.toggle("discounted")})}}class l extends d{constructor(t){super(t);r(this,"toggleNewToCard",t=>{document.querySelector(".product-card").classList.toggle("new-product")})}}class p extends d{constructor(t){super(t);r(this,"tooglePopularToCard",t=>{document.querySelector(".product-card").classList.toggle("popular")})}}const s=new d("img/product.jpg","Навушники TWS Samsung Galaxy Buds3 Pro Silver","$100");s.createCard();document.querySelector(".product-card");const i=document.getElementById("discount"),g=document.getElementById("new"),C=document.getElementById("popular"),T=o=>{new a(s).toogleDiscountToCard()},w=o=>{new l(s).toggleNewToCard()},m=o=>{new p(s).tooglePopularToCard()};i.addEventListener("click",T);g.addEventListener("click",w);C.addEventListener("click",m);
//# sourceMappingURL=decorator.js.map
