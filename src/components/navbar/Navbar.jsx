import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BsMoonStarsFill } from 'react-icons/bs';
import { IoIosSunny } from 'react-icons/io';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import 'i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved == null ? true : JSON.parse(saved);
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleMode = () => setDarkMode(prev => !prev);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  const toggleLanguage = () => {
    const newLang = ['fr', 'fr-FR'].includes(currentLang.trim()) ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/"> <p className="portfolio-title">{t('nav.title')}</p></NavLink>
      </div>

      {/*
      <div className={`navbar-center ${menuOpen ? 'show' : ''}`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
          {t('nav.home')}
        </NavLink>
        
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
          {t('nav.about')}
        </NavLink>
      </div>*/}

      <div className="navbar-right">
        <button className="lang-toggle" onClick={toggleLanguage}>
          {['fr', 'fr-FR'].includes(currentLang.trim()) ? 'FR' : 'EN'}
        </button>
        <button className="mode-toggle" onClick={toggleMode}>
          {darkMode ? <BsMoonStarsFill size={18} /> : <IoIosSunny size={20} />}
        </button>
        {/*
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>*/}
      </div>
    </nav>
  );
}

export default Navbar;
