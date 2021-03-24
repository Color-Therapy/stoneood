'use strict';

let checkoutList=document.getElementById('cart');
let pay=document.getElementById('pay');
let items=[]
function getCart(){
  let data=JSON.parse(localStorage.getItem('cart'));
  for(let i=0;i<data.length;i++){
    let item=data[i];
    items.push(item); 
  }
  return items
}

getCart();

function paymentTotal(){
  let items=getCart();
  let total=0;
  for (let i=0;i<items.length;i++){
    let totalPrice=items[i].price * items[i].qty;
    total+=totalPrice;
  }
  return total;
}

function createCheckoutList(){
  let total=0;
  let totalItems=document.createElement('h3');
  let totalPayment=document.createElement('h3');

  for(let i=0; i<items.length;i++){
    total+=items[i].qty;
    let itemdata=document.createElement('h5');
    itemdata.textContent=`${items[i].title} (${items[i].qty}) PCS`;
    checkoutList.appendChild(itemdata);
  }
  totalItems.textContent='total items: '+total;
  totalPayment.textContent='total: '+paymentTotal()+' JD';
  checkoutList.appendChild(totalItems);
  checkoutList.appendChild(totalPayment);
}
pay.addEventListener('click',function(){
  alert('Thank you for buying from our shop');
});
createCheckoutList();
