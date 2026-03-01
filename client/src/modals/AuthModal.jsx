import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthModal = ({ mode, onClose, setUser }) => {
  if (!mode) return null;
  const navigate = useNavigate();

  const isLogin = mode === "login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [nation, setNation] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = async () => {
    const consent = JSON.parse(localStorage.getItem("cookieConsent"));

    if (!consent?.analytics) {
      window.alert(
        "Rejestrując się akceptujesz wszystkie pliki cookie, w tym analityczne."
      );

      localStorage.setItem(
        "cookieConsent",
        JSON.stringify({
          necessary: true,
          analytics: true
        })
      );

      // doładuj GA
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
      script.async = true;
      document.head.appendChild(script);
    }

    if (isLogin) {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password })
      })

      if (!res.ok) {
        alert("blad logowania");
        return
      }

      const data = await res.json();
      console.log(data.username);
      setUser({ username: data.username });
      onClose();
      navigate("dashboard");
    } else {
      if (!accepted) return alert("zaakceptuj regulamin");

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username, nationality: nation })
      })

      if (!res.ok) {
        alert("blad rejestracji");
        return;
      }

      alert("pomyslnie zarejestrowano");
      onClose();
    }
  };

  const closeModal = () => {
    setEmail("");
    setPassword("");
    setUsername("");
    setNation("");
    setAccepted(false);
    onClose();
  }

  return (
    <div className='modal-backdrop' onClick={closeModal}>
      <div className='modal' onClick={e => e.stopPropagation()}>
        <button className='modal-close' onClick={closeModal}></button>
        <h2 className='modal-title'>{isLogin ? "ZALOGUJ SIĘ DO SWOJEGO KONTA" : "ZAŁÓŻ SWOJE WŁASNE KONTO"}</h2>
        <div className='modal-grid'>
          <div className='modal-email'>
            <p className='modal-p'>Podaj swój adres e-mail</p>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className='modal-pass'>
            <p className="modal-p">Podaj swoje hasło</p>
            <div>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
              {isLogin && (
                <a className='modal-osw-a' onClick={() => window.alert("to masz problem")}>Zapomniałeś hasła?</a>
              )}
            </div>
          </div>
          {!isLogin && (
            <div className='modal-username'>
              <p className="modal-p">Podaj swoją nazwę użytkownika</p>
              <input type='text' value={username} onChange={e => setUsername(e.target.value)}/>
            </div>
          )}
          {!isLogin && (
            <div className='modal-nation'>
              <p className="modal-p">Podaj swoją narodowość</p>
              <select value={nation} onChange={e => setNation(e.target.value)}>
                <option value=""></option>
                <option value="POL">Polska</option>
                <option value="ESP">Hiszpania</option>
                <option value="NED">Holadnia</option>
                <option value="USA">Stany Zjednoczone</option>
                <option value="SWE">Szwecja</option>
                <option value="IRL">Irlandia</option>
                <option value="GER">Niemcy</option>
                <option value="NOR">Norwegia</option>
                <option value="FRA">Francja</option>
                <option value="FIN">Finlandia</option>
                <option value="ITA">Włochy</option>
                <option value="ENG">Anglia</option>
                <option value="ISL">Islandia</option>
                <option value="LUX">Luksemburg</option>
                <option value="UKR">Ukraina</option>
                <option value="HUN">Węgry</option>
                <option value="GBR">Wielka Brytania</option>
                <option value="POR">Portugalia</option>
                <option value="LTU">Litwa</option>
                <option value="EST">Estonia</option>
                <option value="CZE">Czechy</option>
                <option value="SVK">Słowacja</option>
                <option value="SVN">Słowenia</option>
                <option value="SCO">Szkocja</option>
                <option value="SUI">Szwajcaria</option>
                <option value="TUR">Turcja</option>
                <option value="SRB">Serbia</option>
                <option value="RUS">Rosja</option>
                <option value="ROU">Rumunia</option>
                <option value="CAN">Kanada</option>
                <option value="IND">Indie</option>
                <option value="DEN">Dania</option>
                <option value="CRO">Chorwacja</option>
                <option value="JPN">Japonia</option>
              </select>
            </div>
          )}
        </div>
        {!isLogin && (
          <div className='osw-div'>
            <label className="checkbox-wrapper">
              <input type='checkbox' checked={accepted} onChange={e => setAccepted(e.target.checked)}/>
              <span className='custom-checkbox'></span>
            </label>
            <p className='modal-p'>Oświadczam, że akceptuję <a className='modal-osw-a'>Regulamin Platformy</a> i zobowiązuję się go przestrzegać</p>
          </div>
        )}
        <button className='modal-actions-bttn' onClick={handleSubmit}>{isLogin ? "ZALOGUJ SIĘ" : "ZAREJESTRUJ SIĘ"}</button>
      </div>
    </div>
  )
}

export default AuthModal