import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Icon name="Smartphone" size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">RuSIM</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Как работает
            </button>
            <button
              onClick={() => scrollToSection("purchase")}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Тарифы
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("purchase")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover-scale"
            >
              <Icon name="ShoppingCart" className="mr-2" size={16} />
              Купить eSIM
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium rounded-lg"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium rounded-lg"
              >
                Как работает
              </button>
              <button
                onClick={() => scrollToSection("purchase")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium rounded-lg"
              >
                Тарифы
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium rounded-lg"
              >
                FAQ
              </button>
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("purchase")}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold py-2 rounded-full transition-all duration-300"
                >
                  <Icon name="ShoppingCart" className="mr-2" size={16} />
                  Купить eSIM
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
