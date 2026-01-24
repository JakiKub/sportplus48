import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const MainT = () => {
  const navigate = useNavigate();

  const targetDateSC = new Date(2026, 1, 1);
  const targetDateAr = new Date(2026, 1, 26);

  const calcTimeSC = () => {
    const now = new Date();
    const diff = targetDateSC.getTime() - now.getTime();

    if (diff <= 0) {
      return 0
    }

    return Math.floor(diff / (1000 * 60 * 60 * 24))
  }

  const calcTimeAr = () => {
    const now = new Date();
    const diff = targetDateAr.getTime() - now.getTime();

    if (diff <= 0) {
      return 0
    }

    return Math.floor(diff / (1000 * 60 * 60 * 24))
  }

  const [timeSC, setTimeSC] = useState(calcTimeSC());
  const [timeAr, setTimeAr] = useState(calcTimeAr());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSC(calcTimeSC());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAr(calcTimeAr());
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <section id='mainT'>
      <h1 className='main-t-title'>AKCJE I WYDARZENIA</h1>
      <div className='akc-wrapper'>
        <div className="akcje-div" id='sportCDiv'>
          <div className='akc-title-wrapper'>
            <h3 className='akc-title-h3'>48 SPORT CHALLENGE</h3>
            <h6 className='akc-title-h6'>Pokonajmy jak najwięcej kilometrów w ciągu 48 dni</h6>
          </div>
          <div className='akc-right-wrapper'>
            <div className='akc-time-wrapper'>
              <h5 className='akc-time-ogl'>1 Luty - 21 Marzec 2026</h5>
              <div className='akc-time-2'>
                <p className='akc-time-text'>ZA</p>
                <p className='akc-time-text'>{timeSC}</p>
                <p className='akc-time-text'>DNI</p>
              </div>
            </div>
            <button className='dowiedz-sie-wiecej-akc' onClick={() => navigate("/events/sc")}>DOWIEDZ SIĘ WIĘCEJ</button>
          </div>
        </div>
        <div className="akcje-div" id='arenaDiv'>
          <div className='akc-title-wrapper'>
            <h3 className='akc-title-h3'>ARENA 48</h3>
            <h6 className='akc-title-h6'>Wielka gala promująca sport w samym sercu Torunia</h6>
          </div>
          <div className='akc-right-wrapper'>
            <div className='akc-time-wrapper'>
              <h5 className='akc-time-ogl'>26 Luty 2026</h5>
              <div className='akc-time-2'>
                <p className='akc-time-text'>ZA</p>
                <p className='akc-time-text'>{timeAr}</p>
                <p className='akc-time-text'>DNI</p>
              </div>
            </div>
            <button className='dowiedz-sie-wiecej-akc' onClick={() => navigate("/events/arena")}>DOWIEDZ SIĘ WIĘCEJ</button>
          </div>
        </div>
        <div className="akcje-div" id='sportRDiv'>
          <div className='akc-title-wrapper'>
            <h3 className='akc-title-h3'>48 SPORT RUN</h3>
            <h6 className='akc-title-h6'>Bieg po coś więcej niż marzenia</h6>
          </div>
          <div className='akc-right-wrapper'>
            <div className='akc-time-wrapper'>
              <h5 className='akc-time-ogl'>Styczeń/Luty 2026</h5>
              <p className='akc-time-text'>TBD</p>
            </div>
            {/* potem zamienic na () => navigate("/events/sc");;; to samo w navbarze w tej liscie */}
            <button className='dowiedz-sie-wiecej-akc' onClick={() => window.alert("still under construction")}>DOWIEDZ SIĘ WIĘCEJ</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainT