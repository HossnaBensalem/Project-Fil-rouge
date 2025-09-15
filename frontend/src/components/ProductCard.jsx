const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="bg-card rounded-lg shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image || 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg'}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg';
          }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-medium text-primary mb-2 group-hover:text-secondary transition-colors duration-200">
          {product.name}
        </h3>
        
        {product.description && (
          <p className="text-secondary text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-primary">
            {formatPrice(product.price)}
          </span>
          
          <button className="bg-primary text-white px-4 py-2 text-sm rounded-md hover:bg-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;