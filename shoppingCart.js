console.log('Exporting module');

// block code
// console.log('start fetching users');
//
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('finish fetch users')
const cart = [];
const addCard = function (product, quantity, price) {
  cart.push({product, quantity, price});
  console.log(product, quantity, price)
};
// addCard('com', 2, 300);
// addCard('coffee', 12, 3);
// addCard('mouse', 3, 11);
const totalPrice = function (){
  return cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
}
const totalQuantity = function () {
  return cart.reduce((acc, cur) => acc + cur.quantity, 0);
}
const avgPrice = function (){
  return cart.reduce((acc, cur, _,arr) => acc + cur.quantity / arr.length,0)}

// console.log(totalQuantity, totalPrice, avg)


export { totalPrice, totalQuantity as tq, addCard, avgPrice , cart};
// export default function () {
//   return cart.reduce((acc, cur) => acc + cur.quantity, 0);
// }