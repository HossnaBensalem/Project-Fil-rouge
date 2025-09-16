import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative']
  },
 image: {
  type: String,
  default: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg',
  validate: {
    validator: function(v) {
      return !v || /^https?:\/\/.+/i.test(v);  
    },
    message: 'Image must be a valid URL'
  }
}

}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);
export default Product;