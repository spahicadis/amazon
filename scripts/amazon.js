import { cart, addToCart } from "../data/cart.js" //moze i npr as customerCart, pa koristimo onda naziv cart za nesto drugo
import { products } from "../data/products.js";
import { formatCurrency } from "../utils/money.js";




let productsHTML = '';
products.forEach((product) => {
  productsHTML += `  <div class="product-container"> 
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getStarsUrl()}">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            "${product.getPrice()}" 
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>


          ${product.extraInfoHTML()}


          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}"> 
            Add to Cart
          </button>
        </div>`
  ;
});

console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML

function updateCartQuantity() {
  let totalQuantity = 0;
  cart.forEach((item) => {
  totalQuantity+=item.quantity;
})

document.querySelector('.js-cart-quantity').innerHTML = totalQuantity

console.log(totalQuantity)
  
}

const buttons = document.querySelectorAll('.js-add-to-cart')
buttons.forEach((button, index) => {
  button.addEventListener('click',() => {
    console.log(`Added product ${index}`)
    /*cart.push({
      image: products[index].image
    })*/ //Ovako bi ja napravio, ali u projektu koristimo dataset za dohvacanje pojedinog elementa pa cu primjer i ideju pustiti samo zakomentiranu
  const productId = button.dataset.productId; //kebabCase to camelCase convert
  addToCart(productId);
  updateCartQuantity();

  console.log(cart)
  }) 
})

