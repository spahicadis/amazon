import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
//import '../data/backend-practice.js'
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";



async function loadOnPage() {

  try {

    //throw('error1');

    await loadProductsFetch();

  const value = await new Promise((resolve, reject) => {
    loadCart(() => {
      //reject('error3');
      resolve();
      
    });
  })

  } catch (error) {
    console.log('Unexpected error. Please try again later.', error)
  }
  

  

  renderOrderSummary();
  renderPaymentSummary();
  
}

loadOnPage();


/*
Promise.all([
 loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then( () => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolove) => { //allows javascript to do multiple things at the same time
  console.log('start promise')
  loadProducts(() => {
    resolve('value1'); //control when to go to the next step
  });//ono sto damo resolvu bit ce spremljeno u parametar kod then

}).then((value) => {
  console.log(value)
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
}) //promisi nam pomazu da izbjegnemo callback hell
*/

/*
loadProducts(() => {
  loadCart(() => { //callback hell
    renderOrderSummary();
    renderPaymentSummary();
  }) //anonymus function
})
*/

