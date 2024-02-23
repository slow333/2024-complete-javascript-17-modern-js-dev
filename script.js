//////////////////////////
// import 하는 방식
import {totalPrice as tPrice, totalQuantity, addCard, avgPrice, cart} from "./shoppingCart.js";
// import * as ShoppingCard from "./shoppingCart.js";
// import quantity, {cart, addCard} from './shoppingCart.js'; // default export
////////////////////////////////
// console.log('Import module')
////////////////////////////
// 첫번째 import 방식 사용시
// addCard('new com', 2, 300);
// addCard('new coffee', 12, 3);
//////////////////////////////////
// 2번째 import 방식 사용시
// ShoppingCard.addCard('mouse', 3, 11);
//
// const total = ShoppingCard.tq(ShoppingCard.cart)
// const price = ShoppingCard.totalPrice(ShoppingCard.cart);
// const avg = +ShoppingCard.avgPrice(ShoppingCard.cart).toFixed(2);
//
// console.log(ShoppingCard.cart, total, price, avg)
// 3번째 import 사용 시
// console.log(quantity())
// console.log(cart)
// cart.forEach(c => console.log(c));
/////////////////////////////////
// async 처리 순서
// console.log('start')
// fetch 하면 전체 프로우 측면에서 sync로 동작
// module에서만 사용 가능
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data[3]);
// console.log('end')
// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return {title: data.at(-1).title, body:data.at(-1).body}
// }
// import getPost from './asyncOutside.js'

// const lastPost = await getPost();
// console.log('from outside await', lastPost)
/////////////////////
// 이게 모듈에서 사용하는 방식과 같음
/*const shoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const tPrice = 239;
  const totalQt = 23;
  const addCart = function (product, quantity) {
    cart.push({product, quantity});
    console.log('cart ====> ', product, quantity, 'shipping cost ', shippingCost)
  };
  const orderStock = function (product, quantity) {
    cart.push({product, quantity});
    console.log('order ====> ', product, quantity)
  };
  return {
    addCart, orderStock, cart, tPrice, totalQt
  };
})();
shoppingCart.addCart('apples', 5);
shoppingCart.addCart('pizza', 4);
console.log(shoppingCart.cart)
console.log(shoppingCart.shippingCost)*/
/////////////////
// 이전에 사용하던 방식 => es 6에서 모두 대체함
// export.addCart = function (product, quantity) {
//   cart.push({product, quantity});
//   console.log('cart ====> ', product, quantity, 'shipping cost ', shippingCost)
// };
// const {addCart} = require('shoppingCart.js')
/////////////////////////////////////////
// npm install lodash-es
// array를 편리하게 사용할 수 있는 moudule
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const arrDeep = {
  etc: 'abc',
  cart2: [
    { p: 'aa', b: 'cc' },
    { d: 'dd', e: 'ee' }],
  user: { log: true, name: 'ok it is me ~'}
};

const copy = Object.assign({}, arrDeep)
const copyArr = Object.entries(arrDeep)
const copyArrDeep = cloneDeep(arrDeep); // 완전해 새로운 객체를 생성함

arrDeep.user.log = false;

console.log(copy);
console.log(copyArr);
console.log(copyArrDeep);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'hello';

  constructor(name, greeting) {
    this.name = name;
    this.greeting = greeting;
    console.log(`${this.greeting} ${this.name}`);
  }
}

const byName = new Person('Rebecca', 'Hey');

console.log(cart.find(el => console.log(el)));
Promise.resolve('ok test').then(d => console.log(d));

import 'core-js/stable';
