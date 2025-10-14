'use client';
import { useState, useEffect } from 'react';

/*
 *  Custom hook that controls the visibility of a "Back to Top" button
 *  based on the user's current scroll position.
 *
 *  - Shows the button when the scroll position exceeds 400px.
 *  - Hides the button when the scroll position is less than or equal to 400px.
*/
const useBackToTop = () => {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowBackToTopBtn(true);
      } else {
        setShowBackToTopBtn(false);
      }
    });
  }, []);

  return showBackToTopBtn;
};

export default useBackToTop;