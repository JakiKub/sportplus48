import { useNavigate } from "react-router-dom"

const MainJ = () => {
  const navigate = useNavigate();

  return (
    <section id='mainJ'>
        <h1 className='main-j-title'>WITAJ W GRZE</h1>
        <div className='main-j-text-org'>
          <p className='main-j-text'>Wszystko zaczęło się od marzenia - że sport może łączyć ludzi ponad granice, religie i przekonania. </p>
          <p className='main-j-text'>Pewnego dnia 10 młodych osób z Polski postanowiło zamienić te marzenia w rzeczywistość. Tak powstał projekt SPORT +48.</p>
        </div>
        <div className='main-j-bttn-org'>
          <button className="main-j-bttn" onClick={() => document.getElementById("mainD").scrollIntoView({ behavior: "smooth" })}>CENTRUM GRY</button>
          <button className="main-j-bttn" onClick={() => navigate("onas")}>WIECĘJ O NAS</button>
          <button className="main-j-bttn" onClick={() => navigate("/events/arena")}>ARENA 48</button>
        </div>
    </section>
  )
}

export default MainJ