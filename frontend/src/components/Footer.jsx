const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-light text-primary mb-4 md:mb-0">
            ATELIER
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <p className="text-sm text-secondary">
              Minimal design platform
            </p>
            <p className="text-sm text-secondary">
              © 2025 ATELIER. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-center text-xs text-secondary">
            Inspired by minimalist design principles and modern aesthetics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;