import { memo, useState, useCallback } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Chip, IconButton } from "./ui";
import { CATEGORIES } from "../constants";

const Header = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCategoryClick = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleMobileCategoryClick = useCallback((category) => {
    setActiveCategory(category);
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-surface-50/90 backdrop-blur-m3 px-6 py-4 border-b border-surface-200/50">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="AOIN" className="h-10 w-auto" />
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex gap-2">
            {CATEGORIES.map((category) => (
              <Chip
                key={category}
                label={category}
                isActive={activeCategory === category}
                onClick={() => handleCategoryClick(category)}
              />
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <IconButton icon={Search} aria-label="Search" />
            <IconButton
              icon={ShoppingCart}
              badge={2}
              aria-label="Shopping Cart"
            />
            <IconButton icon={User} isFilled aria-label="User Account" />

            {/* Mobile menu toggle */}
            <button
              onClick={handleMobileMenuToggle}
              className="md:hidden icon-btn icon-btn-standard"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2 animate-in slide-in-from-top">
            {CATEGORIES.map((category) => (
              <Chip
                key={category}
                label={category}
                isActive={activeCategory === category}
                onClick={() => handleMobileCategoryClick(category)}
              />
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
