import React, { useState } from 'react';
import {BiUpArrowAlt} from 'react-icons/bi'
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // При монтировании компонента добавляем слушатель прокрутки
  // и устанавливаем видимость кнопки в зависимости от положения прокрутки.
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
    
      className={`scroll-to-top-button flex justify-center items-center ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      
    >
      <BiUpArrowAlt className='text-3xl'/>
    </button>
  );
};

export default ScrollToTopButton;
