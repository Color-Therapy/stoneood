'use strict';

let productsList=document.getElementById('products');

function Cart(itemsList){
    this.itemsList=itemsList;
}

function Product(title,price,imagePath,description){
    this.title=title;
    this.price=price;
    this.imagePath=`../img/${imagePath}.jpg`;
    this.description=description;
    Product.all.push(this);
}

Product.all=[];
let itemsList=[];

function CartItem(title,price,qty){
  this.title=title;
  this.price=price;
  this.qty=qty;
  itemsList.push(this);
  localStorage.setItem('cart',JSON.stringify(itemsList));
  console.log('here',itemsList)
}

Product.prototype.createProductComponent=function(){
  let productObject=this;
  let productCard=document.createElement('div');
  let imgDiv=createImageDiv(productObject);
  let descDiv=createDescriptionDiv(productObject);
  let button=createAddToCartButton();
  button.addEventListener('click',function(){
    let input=document.getElementsByName('input-'+productObject.title);
    let qty=parseInt(input[0].value);
    new CartItem(productObject.title,productObject.price,qty);
    renderCartItems();
  });
  descDiv.appendChild(button);
  productCard.appendChild(imgDiv);
  productCard.appendChild(descDiv);
  productsList.appendChild(productCard);
}

function createAddToCartButton(){
  let button=document.createElement('button');
  button.setAttribute('class','add-to-cart-btn');
  button.textContent='Add to cart +';
  return button;
}

function createQtyField(inpuName){
  let qty=document.createElement('input');
  qty.setAttribute('type','number');
  qty.setAttribute('value',0);
  qty.setAttribute('class','qty-field');
  qty.setAttribute('name',inpuName);
  return qty
}

function createProduct(){
  let product=new Product('100% Pure love',45,'Purelove','Enjoy The Experience To The Fullest');
  let product2=new Product('In Between The Seas',35,'in_between_the_seas','Dive right in');
  let product3=new Product('Into The Cave',25,'into_the_cave','feel free to get lost');
  let product4=new Product('Volcano',3.20,'volcano','It Melts Your Heart Just like A Lava');
  let product5=new Product('Reddish Purple Rose',3.20,'reddish_purple_rose','bloome your soul just like a rose');
  let product6=new Product('Sea Lava',3.20,'sea_lava','Unleash the cold volcano inside of you');
  let product7=new Product('The Explosion Of Souls',45,'the_explosion_of_souls','Sets Your Soul free');
  let product8=new Product('The Ocean',25,'the_ocean','waves of love');
  let product9=new Product('Making Love',35,'making_love','when love is all you need');
  let product10=new Product('The Phoenix Bird',35,'the_phoenix_bird','sharp eyes never sleep');

  product.createProductComponent();
  product2.createProductComponent();
  product3.createProductComponent();
  product4.createProductComponent();
  product5.createProductComponent();
  product6.createProductComponent();
  product7.createProductComponent();
  product8.createProductComponent();
  product9.createProductComponent();
  product10.createProductComponent();
}

function createImageDiv(productObject){
  let img=document.createElement('img');
  img.setAttribute('src',productObject.imagePath);
  img.setAttribute('class','product-img')
  let imgDiv=document.createElement('div');
  imgDiv.setAttribute('class','img-column');
  imgDiv.appendChild(img);

  return imgDiv
}
function createDescriptionDiv(productObject){
  let title=document.createElement('h4');
  title.setAttribute('class','item-title')
  title.textContent='product name: '+productObject.title;
  let description=document.createElement('p');
  description.textContent='description: '+productObject.description;
  let descDiv=document.createElement('div');
  descDiv.setAttribute('class','desc-column');
  descDiv.appendChild(title)
  descDiv.appendChild(description);
  let price=document.createElement('span');
  price.textContent='price: '+productObject.price;
  descDiv.appendChild(price);
  let qty=createQtyField('input-'+productObject.title);
  let qtyLabel=document.createElement('label');
  qtyLabel.textContent='QTY: ';
  descDiv.appendChild(qtyLabel);
  descDiv.appendChild(qty);
  return descDiv
}
createProduct();

let space=document.getElementById('cartItems');
function renderCartItems(){
  space.innerHTML=''
  let localItem=localStorage.getItem('cart')
  let productArray = JSON.parse(localItem)
  if(productArray){
  for(let i=0 ;i< productArray.length; i++){
    let items=document.createElement('li');
    space.appendChild(items);
      items.innerText=`${productArray[i].title} ${productArray[i].qty} ${productArray[i].price}`;
    }
  }
}

