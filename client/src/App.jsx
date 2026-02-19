import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Routes, Route, useNavigate } from 'react-router-dom';

import pageBackground from './hooks/pageBackground';

import AuthModal from "./modals/AuthModal";

import Kontakt from "./pages/kontakt/Kontakt";
import ONas from "./pages/o-nas/ONas";
import Panstwa  from './pages/countries/Panstwa';
import Statystyki from './pages/stats/Statystyki';
import Main from './pages/main/Main';

import Dashboard from './pages/dashboard/Dashboard';
import RegisterActiv from './pages/dashboard/RegisterActiv';
import Progress from './pages/dashboard/Progress';
import Ranking from './pages/dashboard/Ranking';
import Records from './pages/dashboard/Records';
import Points from './pages/dashboard/Points';

import Arena from './pages/events/Arena';
import SC from './pages/events/SC';
import SR from './pages/events/SR';

import ArenaTA from './pages/messages/ArenaTA';

import PublicLayout from './layout/PublicLayout';
import DashboardLayout from './layout/DashboardLayout';
import ReqAuth from './router/ReqAuth';

const App = () => {
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) return;

    //
    //probably the worst way of scaling a website, but works "if something's stupid but works, it ain't stupid"
    //
    const handleDpiZoom = () => {
      const ratio = window.devicePixelRatio || 1;
      const html = document.documentElement;
      const body = document.body;

      if (ratio > 1) {
        const zoomValue = 1 / ratio;
        body.style.zoom = zoomValue;
        body.style.minHeight = `${100 * ratio}vh`;
        html.style.height = 'auto'; 
      } else {
        body.style.zoom = "1";
        body.style.minHeight = "100vh";
      }
    };

    handleDpiZoom();
    window.addEventListener('resize', handleDpiZoom);
    return () => window.removeEventListener('resize', handleDpiZoom);
  }, []);

  pageBackground();

  const [authModal, setAuthModal] = useState(null);
  const [user, setUser] = useState(null);
  const openLogin = () => setAuthModal("login");
  const openRegister = () => setAuthModal("register");
  const closeAuthModal = () => setAuthModal(null);
  const nodeRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    fetch("/api/check-session", { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        if (data.isLogged) {
          fetch("/api/me", { credentials: "include" })
            .then(res => res.ok ? res.json() : null)
            .then(userData => {
              if (userData?.isLogged) setUser({ username: userData.username });
            });
        }
      });
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST", credentials: "include" });
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <Routes>
        <Route element={<PublicLayout user={user} openLogin={openLogin} openRegister={openRegister}/>}>
          <Route index element={<Main openLogin={openLogin} openRegister={openRegister}/>}/>
          <Route path="onas" element={<ONas/>}/>
          <Route path="kontakt" element={<Kontakt/>}/>
          <Route path="panstwa" element={<Panstwa/>}/>
          <Route path="stats" element={<Statystyki/>}/>
          <Route path="test" element={<h1>ROUTER DZIAŁA</h1>}/>
        </Route>

        <Route path='/events'>
          <Route path='arena' element={<Arena/>}/>
          <Route path='sc' element={<SC/>}/>
          <Route path='sr' element={<SR/>}/>
          <Route path='arena/messages/theme-art' element={<ArenaTA/>}/>
        </Route>

        <Route element={<ReqAuth />}>
          <Route path='/dashboard' element={<DashboardLayout user={user} onLogout={handleLogout}/>}>
            <Route index element={<Dashboard user={user}/>}/>
            <Route path="activity" element={<RegisterActiv user={user}/>}/>
            <Route path="progress" element={<Progress user={user}/>}/>
            <Route path="records" element={<Records user={user}/>}/>
            <Route path="points" element={<Points user={user}/>}/>
            <Route path="ranking" element={<Ranking/>}/>
          </Route>
        </Route>
      </Routes>
      <CSSTransition in={!!authModal} timeout={300} classNames="fade" unmountOnExit nodeRef={nodeRef}>
        <AuthModal mode={authModal} onClose={closeAuthModal} setUser={setUser}/>
      </CSSTransition>
      </>
    )
}

export default App