import { useEffect } from 'react';

const ScriptLoader = () => {
  useEffect(() => {
    const showBrand = import.meta.env.VITE_APP_SHOW_BRAND === "true";
    const width = document.body.clientWidth;
    if (width > 768 && showBrand) {
      const script = document.createElement('script');
      script.src =
        'https://assets.salesmartly.com/js/project_177_61_1649762323.js';
      document.body.appendChild(script);
    }
  }, []);

  return null;
};

export default ScriptLoader;