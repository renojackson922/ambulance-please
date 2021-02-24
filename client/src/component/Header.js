import React, {useEffect} from 'react'

function Header(){

    useEffect(() => {
      const linkBootstrap = document.createElement('link');
      linkBootstrap.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css';
      linkBootstrap.rel = 'stylesheet';
      linkBootstrap.integrity = 'sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl';
      linkBootstrap.crossOrigin = 'anonymous';
  
      const scriptFontAwesome = document.createElement('script');
      scriptFontAwesome.src = 'https://kit.fontawesome.com/368fe9516c.js';
      scriptFontAwesome.crossOrigin = 'anonymous';

      const scriptBootstrap = document.createElement('script');
      scriptBootstrap.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js";
      scriptBootstrap.integrity = "sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0";
      scriptBootstrap.crossOrigin ="anonymous";
  
      document.head.appendChild(linkBootstrap);
      document.body.appendChild(scriptFontAwesome);
      document.body.appendChild(scriptBootstrap);
      return () => {
        document.head.removeChild(linkBootstrap);
        document.body.removeChild(scriptFontAwesome);
        document.body.removeChild(scriptBootstrap);
      }
    }, []);
  
    return(
        <>
        </>
    )

  }

  export default Header;
