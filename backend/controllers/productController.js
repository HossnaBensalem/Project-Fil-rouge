import Product from '../models/Product.js';

export const getAllProducts = async (req, res) => {
  try {
    console.log('Fetching all products');
    
    const products = await Product.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: products.length,
      products
    });
    
  } catch (error) {
    console.error(' Get products error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error.message
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    console.log(' Create product request:', req.body);
    
    const { name, description, price, image } = req.body;

    if (!name || price === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Name and price are required'
      });
    }

    const product = new Product({
      name,
      description: description || '',
      price: Number(price),
      image: image || 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg'
    });

    await product.save();
    console.log(' Product created:', product.name);

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product
    });

  } catch (error) {
    console.error(' Create product error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: error.message
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    console.log(' Update product request:', req.params.id, req.body);
    
    const { id } = req.params;
    const { name, description, price, image } = req.body;

    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price: Number(price),
        image
      },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    console.log(' Product updated:', product.name);

    res.json({
      success: true,
      message: 'Product updated successfully',
      product
    });

  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update product',
      error: error.message
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    console.log(' Delete product request:', req.params.id);
    
    const { id } = req.params;
    
    const product = await Product.findByIdAndDelete(id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    console.log(' Product deleted:', product.name);

    res.json({
      success: true,
      message: 'Product deleted successfully'
    });

  } catch (error) {
    console.error(' Delete product error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete product',
      error: error.message
    });
  }
};