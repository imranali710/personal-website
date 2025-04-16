import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/name.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo/Brand */}
        <div>
          <Link to="/">
            <img 
              src={logo}
              alt="Imran Ali Logo" 
              className="h-10 w-auto" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400 transition-colors">
            About
          </Link>
          <Link to="/projects" className="hover:text-gray-400 transition-colors">
            Projects
          </Link>
          <Link to="/blog" className="hover:text-gray-400 transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-gray-400 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link 
              to="/" 
              onClick={toggleMenu}
              className="block py-2 hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={toggleMenu}
              className="block py-2 hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/projects" 
              onClick={toggleMenu}
              className="block py-2 hover:text-blue-400 transition-colors"
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              onClick={toggleMenu}
              className="block py-2 hover:text-blue-400 transition-colors"
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              onClick={toggleMenu}
              className="block py-2 hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;