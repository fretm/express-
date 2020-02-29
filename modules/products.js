let data =[];

class Product {
  constructor(name,product,price){
      this.name = name;
      this.product = product;
      this.price = price;
  }
save(){
    data.push(this)
}
static findall(){
   return data
}
}
module.exports = Product;