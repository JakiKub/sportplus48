import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Menu from "./Menu"

const Navbar = ({ openLogin, user, openRegister }) => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <section id='navbar'>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navigate={navigate} user={user} openLogin={openLogin} openRegister={openRegister}/>
      <div id='navbarTop'>
        <div id='navbarTextLeft'>
          <p className='navbar-pogrubienie'>Sport +48</p>
          <img src='/content/navbar/navbar_kropka.png'/>
          <p className='navbar-opis-projektu'>Projekt realizowany w ramach ogólnopolskiej Olimpiady "Zwolnieni z Teorii"</p>
        </div>
        <div id="navbarMobileLeft">
          <img src="/content/mobile/main/mobilna_main_pl.png"/>
          <details>
            <summary>Polish <img src="/content/mobile/main/mobilna_main_wybierz.png"/></summary>
            <ul id="langListMobile">
              <li><a className="link-a-mobile">still under construction</a></li>
            </ul>
          </details>
        </div>
        <div id='navbarTextRight'>
          {!user ? (<a className='navbar-pogrubienie' id='navbarLogin' onClick={openLogin}>LOG IN</a>) : (<a className='navbar-pogrubienie' id='navbarLogin' onClick={() => navigate("/dashboard")}>{user.username}</a>)}
          <button id='navbarUserBttn'/>
        </div>
      </div>
      <div id='navbarBottom'>
        <button id='navbarLogoBttn' onClick={() => navigate("/")}/>
        <div id='navbarLinks'>
          <a className="link-a" onClick={() => navigate("onas")}>O nas</a>
          <a className="link-a" onClick={() => navigate("stats")}>Statystyki</a>
          <details>
            <summary>Akcje</summary>
            <ul id='akcjeList'>
              <li><a onClick={(e) => {e.target.closest('details').open = false; navigate("/events/arena")}}>Arena 48</a></li>
              <li><a onClick={(e) => {e.target.closest('details').open = false; navigate("/events/sc")}}>48 Sport Challenge</a></li>
              <li><a onClick={(e) => {e.target.closest('details').open = false; window.alert("still under construction")}}>48 Sport Run</a></li>
            </ul>
          </details>
          <a className="link-a" onClick={() => navigate("panstwa")}>Państwa</a>
          <a className="link-a" onClick={() => navigate("kontakt")}>Kontakt</a>
          <details>
            <summary>Więcej</summary>
            <ul id='wiecejList'>
              
            </ul>
          </details>
          <button id='szukajBttn'/>
          <details>
            <summary className='lang-summary'>PL</summary>
            <ul id='langList'>
              <li><a>Still under construction</a></li>
            </ul>
          </details>
        </div>
      </div>
      <div id="navbarBottomMobile">
        <div>
          <img src="/content/mobile/main/mobilna_main_logo.png"/>
          <p>Zwolnieni z Teorii 2025-26</p>
        </div>
        <button onClick={toggleMenu}></button>
      </div>
    </section>
  )
}

export default Navbar