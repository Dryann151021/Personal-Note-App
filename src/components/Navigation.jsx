import React from "react";
import content from "../contexts/content";
import { MdGTranslate } from 'react-icons/md';
import { FaMoon, FaSun } from 'react-icons/fa';

function Navigation() {
  const {theme, toggleLocale, toggleTheme, } = React.useContext(content);
  
  return(
    <>
      <button className='toggle-locale' onClick={toggleLocale}>
        {<MdGTranslate />}
      </button>
      <button className='toggle-theme' onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </>
  );
}

export default Navigation;