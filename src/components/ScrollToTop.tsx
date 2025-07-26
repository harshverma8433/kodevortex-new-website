// components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Debug: log when pathname changes
    console.log("Route changed:", pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
