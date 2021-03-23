'use strict';

function Product(name,price,imgPath){
    this.name=name;
    this.price=price;
    this.imgPath=`./img/${imgPath}.jpg`;
}

let bts = new Product('betwee the seas',35,'between_the_seas');
