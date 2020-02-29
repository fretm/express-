const Product = require('../modules/products')

exports.getproductform=(req, res, next) => {
    res.render('addproduct',{name:"frey"})
}
 
exports.postproducts=(req, res, next) => {
    console.log(req.body);
    const name = req.body.name
    const product = req.body.product
    const price= req.body.price;

const prod= new Product(name,product,price);
prod.save();
console.log(Product.findall())
    res.send('submited sucessfully');
  }