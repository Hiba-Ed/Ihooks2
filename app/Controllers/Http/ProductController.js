'use strict'

const Product = use('App/Models/Product')

class ProductController { 
  async index({ view }) {
    const products = await Product.all();
    return view.render('product', {
      products: products.toJSON()
    })
  }
}

module.exports = ProductController 