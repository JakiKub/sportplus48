import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageBackground = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

    const body = document.body;

    const map = {
      "/": {
        img: "/content/main/main_tlo.png",
        height: "4096px",
        overflow: "visible",
        size: "100% 80%",
        att: "scroll",
        title: "Home"
      },
      "/onas": {
        img: "/content/about-us/onas_tlo.png",
        height: "4096px",
        overflow: "visible",
        size: "100% 80%",
        att: "scroll",
        title: "O Nas"
      },
      "/kontakt": {
        img: "/content/contact/kontakt_tlo.png",
        height: "1926px",
        overflow: "visible",
        size: "100% 80%",
        att: "scroll",
        title: "Kontakt"
      },
      "/panstwa": {
        img: "/content/countries/panstwa_tlo_v2.png",
        height: "3006px",
        overflow: "visible",
        size: "100% 80%",
        att: "scroll",
        title: "Państwa"
      },
      "/stats": {
        img: "/content/stats/tlo_statystyki.png",
        height: "3006px",
        overflow: "visible",
        size: "100% 80%",
        att: "scroll",
        title: "Statystyki"
      },
      "/events/arena": {
        img: "/content/arena/tlo_arena48.png",
        height: "1080px",
        overflow: "visible",
        size: "100% 100%",
        att: "fixed",
        title: "Arena 48"
      },
      "/events/sc": {
        img: "/content/48sc/48sc_tlo.png",
        height: "1080px",
        overflow: "visible",
        size: "100% 100%",
        att: "fixed",
        title: "48 Sport Challenge"
      }
    };

    if (pathname.startsWith("/dashboard")) {
      body.style.backgroundImage = 'url("/content/dashboard/dashboard_tlo.png")';
      body.style.height = "1080px";
      body.style.overflow = "hidden";
      body.style.backgroundSize = "100% 100%";
      body.style.backgroundAttachment = "fixed";
      document.title = "Sport +48 - Dashboard"
      return;
    }

    const cfg = map[pathname];
    if (!cfg) return;

    body.style.backgroundImage = `url("${cfg.img}")`;
    body.style.height = cfg.height;
    body.style.overflow = cfg.overflow;
    body.style.backgroundSize = cfg.size;
    body.style.backgroundAttachment = cfg.att;
    document.title = `Sport +48 - ${cfg.title}`

  }, [pathname]);
}

export default pageBackground