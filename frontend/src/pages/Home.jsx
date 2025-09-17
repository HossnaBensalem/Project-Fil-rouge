import { useState, useEffect } from 'react';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import toast from 'react-hot-toast';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 animate-fade-in">
            ATELIER
          </h1>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Discover minimalist design products curated for modern aesthetics and exceptional functionality.
          </p>
          <div className="w-24 h-px bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-primary mb-4">
              Featured Products
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Explore our carefully selected collection of design products that embody minimalist principles and timeless appeal.
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7m16 0l-8 4-8-4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">No Products Yet</h3>
              <p className="text-secondary">
                Our collection is being curated. Check back soon for beautiful design products.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-primary mb-4">
            Join Our Community
          </h2>
          <p className="text-secondary mb-8">
            Create an account to stay updated on new products and design inspiration.
          </p>
          <a
            href="/register"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-secondary transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;