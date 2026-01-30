import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageBackground = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const setBackground = () => {
      const isMobile = window.innerWidth < 768 || window.innerHeight > window.innerWidth;
      const body = document.body;

      const map = {
        "/": {
          img: "/content/main/main_tlo.png",
          imgMobile: "/content/mobile/main/mobilna_main_tlo.png", 
          height: "4096px",
          heightMobile: "2000px",
          overflow: "visible",
          size: "100% 80%",
          att: "scroll",
          title: "Home",
        },
        "/onas": {
          img: "/content/about-us/onas_tlo.png",
          imgMobile: "/content/mobile/onas/onas_tlo.png", 
          height: "4096px",
          overflow: "visible",
          size: "100% 80%",
          att: "scroll",
          title: "O Nas",
        },
        "/kontakt": {
          img: "/content/contact/kontakt_tlo.png",
          imgMobile: "/content/mobile/kontakt/kontakt_tlo.png", 
          height: "1926px",
          heightMobile: "100vh",
          overflow: "visible",
          overflowMobile: "hidden",
          size: "100% 80%",
          att: "scroll",
          title: "Kontakt",
        },
        "/panstwa": {
          img: "/content/countries/panstwa_tlo_v2.png",
          imgMobile: "/content/mobile/panstwa/kraje_tlo.png", 
          height: "3006px",
          overflow: "visible",
          size: "100% 80%",
          att: "scroll",
          title: "Państwa",
        },
        "/stats": {
          img: "/content/stats/tlo_statystyki.png",
          imgMobile: "/content/mobile/stats/statystyki_tlo.png", 
          height: "3006px",
          heightMobile: "1000px",
          overflow: "visible",
          size: "100% 80%",
          att: "scroll",
          title: "Statystyki",
        },
        "/events/arena": {
          img: "/content/arena/tlo_arena48.png",
          imgMobile: "/content/mobile/main/mobilna_main_tlo.png", 
          height: "1080px",
          overflow: "visible",
          size: "100% 100%",
          att: "fixed",
          title: "Arena 48",
        },
        "/events/sc": {
          img: "/content/48sc/48sc_tlo.png",
          imgMobile: "/content/mobile/main/mobilna_main_tlo.png", 
          height: "1080px",
          overflow: "visible",
          size: "100% 100%",
          att: "fixed",
          title: "48 Sport Challenge",
        },
      };
    
      let cfg = map[pathname];
      let bgImage = "";
      let bgSize = "";
      let bgHeight = "";
      let bgOverflow = "";

      if (pathname.startsWith("/dashboard")) {
        cfg = {
            img: "/content/dashboard/dashboard_tlo.png",
            height: "1080px",
            overflow: "hidden",
            size: "100% 100%",
            att: "fixed",
            title: "Dashboard"
        };
      }

      if (!cfg) return;

      bgImage = (isMobile && cfg.imgMobile) ? cfg.imgMobile : cfg.img;
      bgSize = (isMobile && cfg.imgMobile) ? "cover" : cfg.size;
      bgHeight = (isMobile && cfg.heightMobile) ? cfg.heightMobile : cfg.height;
      bgOverflow = (isMobile && cfg.overflowMobile) ? cfg.overflowMobile : cfg.overflow;

      console.log(`Path: ${pathname}, Mobile: ${isMobile}, Image: ${bgImage}`);

      body.style.backgroundImage = `url("${bgImage}")`;
      body.style.height = bgHeight;
      body.style.overflow = bgOverflow;
      body.style.backgroundSize = bgSize;
      body.style.backgroundAttachment = cfg.att;
      document.title = `Sport +48 - ${cfg.title}`;
    };

    window.scrollTo({ top: 0, left: 0 });

    setBackground();

    window.addEventListener("resize", setBackground);

    return () => {
      window.removeEventListener("resize", setBackground);
    };

  }, [pathname]);
};

export default pageBackground;