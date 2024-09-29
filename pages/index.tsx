

import Homepage from './landing-page-5';
import { useContext, useEffect, useState } from 'react';
import I18nContext from '@/context/i18nContext';

const HomePage = () => {
  

  
  const restoreScroll = () => {
    window.scrollTo(0, Number(localStorage.getItem("scrollPosition")));
  }
  const handleScroll = () => {
    const scrollY = window.scrollY;
    localStorage.setItem("scrollPosition", scrollY.toString())
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    setTimeout(() => {
      restoreScroll()
    }, 1000);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])


  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;

  return (
    <div dir={language == "ar"? 'rtl' : 'ltr'}>
        {isClient && <Homepage />}
    </div>
  );
};
export default HomePage;
