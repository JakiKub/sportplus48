import { useNavigate } from "react-router-dom"

const Footer = () => {
  const navigate = useNavigate()

  return (
    <section id='footer'>
      <div className='footer-top'>
        <img src='/content/footer/stopka_logo.png'/>
        <div className="footer-top-div">
          <h3 className='footer-top-title'>O PROJEKCIE</h3>
          <a className="footer-top-linki" onClick={() => navigate("onas")}>O nas</a>
          <a className="footer-top-linki" onClick={() => navigate("stats")}>Statystyki</a>
          <a className="footer-top-linki" onClick={() => navigate("panstwa")}>Państwa</a>
        </div>
        <div className="footer-top-div">
          <h3 className='footer-top-title'>NASZE DZIAŁANIA</h3>
          <a className="footer-top-linki" onClick={() => navigate("/events/arena")}>Arena 48</a>
          <a className="footer-top-linki" onClick={() => navigate("/events/sc")}>48 Sport Challenge</a>
          <a className="footer-top-linki">Podcast</a>
          <a className="footer-top-linki" onClick={() => window.open("https://discord.gg/6WeJ7xjSav")}>Społeczność</a>
        </div>
        <div className="footer-top-div">
          <h3 className='footer-top-title'>PARTNERZY</h3>
          <a className="footer-top-linki" onClick={() => window.open("https://www.1lo.torun.pl/1lo/")}>I LO Toruń</a>
          <a className="footer-top-linki" onClick={() => window.open("https://brandelite.pl")}>Brandelite</a>
        </div>
        <div className="footer-top-div">
          <h3 className='footer-top-title'>KONTAKT</h3>
          <a className="footer-top-linki" onClick={() => navigate("kontakt")}>Kontakt</a>
          <a className="footer-top-linki" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd6iJaXt1Z4XbLSsq3ulT3Ao2tMzWO1vRQ3MZlPcK7LJaSoXg/viewform")}>Formularz kontaktowy</a>
        </div>
      </div>
      <div className='footer-under'>
        <div className='footer-mid'>
          <p className='footer-projekt-realizowany'>PROJEKT REALIZOWANY W RAMACH XII EDYCJI OGÓLNOPOLSKIEJ OLIMPIADY "ZWOLNIENI Z TEORII"</p>
          <a className='link-do-zwol' onClick={() => window.open("https://zwolnienizteorii.pl")}>zwolnienizteorii.pl</a>
        </div>
        <div className='footer-bottom'>
          <div className='footer-inside'>
            <a className="footer-linki">POLITYKA PRYWATNOŚCI I PLIKÓW COOKIES</a>
            <a className="footer-linki">REGULAMIN PLATFORMY</a>
            <a className="footer-linki">WZORY DOKUMENTÓW</a>
          </div>
          <p className='footer-linki'>© SPORT +48, 2026</p>
        </div>
      </div>
    </section>
  )
}

export default Footer