import { useState, useEffect } from 'react'

const RegisterActiv = ({ user }) => {
  const [activity, setActivity] = useState("");
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [file, setFile] = useState(null);

  if (!user) return null

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("activity", activity);
    formData.append("distance", distance);
    formData.append("time", time);
    formData.append("evidence", file);

    const res = await fetch("/api/activity", {
      method: "POST",
      credentials: "include",
      body: formData
    });

    if (!res.ok) {
      alert("Błąd wysyłania aktywności");
      return;
    } 

    alert("Aktywność wysłana do weryfikacji");

    setActivity("");
    setDistance("");
    setTime("");
    setFile(null);
  };

  return (
    <section id='registerActiv'>
      <div>
        <h1>Twój kolejny krok na szczyt</h1>
        <p>Jesteś bliżej niż myślisz. Pracuj dalej. Efekty przyjdą same!</p>
      </div>
      <form onSubmit={handleSubmit} id='activSubmitForm'>
        <div className='select-activity'>
          <h1>WYBIERZ AKTYWNOŚĆ</h1>
          <select value={activity} onChange={e => setActivity(e.target.value)} required>
            <option value="">Wybierz rodzaj aktywności</option>
            <option value="Bieganie">Bieganie</option>
            <option value="Chodzenie">Chodzenie</option>
            <option value="Jazda na rowerze">Jazda na rowerze</option>
            <option value="Jazda na rolkach">Jazda na rolkach</option>
            <option value="Jazda na hulajnodze">Jazda na hulajnodze (nieelektrycznej)</option>
            <option value="Pływanie">Pływanie</option>
            <option value="Kajakarstwo">Kajakarstwo</option>
            <option value="Wioślarstwo">Wioślarstwo</option>
            <option value="Bieg narciarski">Bieg narciarski</option>
            <option value="Jazda na deskorolce">Jazda na deskorolce</option>
            <option value="Kalistenika">Kalistenika</option>
            <option value="Siłownia">Siłownia</option>
            <option value="Fitness">Fitness</option>
            <option value="Crossfit">Crossfit</option>
            <option value="Zumba">Zumba</option>
            <option value="Aerobik">Aerobik</option>
            <option value="Joga">Joga</option>
            <option value="Rozciąganie">Rozciąganie</option>
            <option value="Taniec">Taniec</option>
            <option value="Sztuki walki">Sztuki walki</option>
            <option value="Gimnastyka sportowa">Gimnastyka sportowa</option>
            <option value="Piłka nożna">Piłka nożna</option>
            <option value="Siatkówka">Siatkówka</option>
            <option value="Koszykówka">Koszykówka</option>
            <option value="Piłka ręczna">Piłka ręczna</option>
            <option value="Hokej">Hokej</option>
            <option value="Hokej na lodzie">Hokej na lodzie</option>
            <option value="Rugby">Rugby</option>
            <option value="Unihokej">Unihokej</option>
            <option value="Tenis">Tenis</option>
            <option value="Squash">Squash</option>
            <option value="Padel">Padel</option>
            <option value="Badminton">Badminton</option>
            <option value="Wspinaczka">Wspinaczka</option>
            <option value="Skakanka">Skakanka</option>
            <option value="Łyżwiarstwo">Łyżwiartswo</option>
            <option value="Parkour">Parkour</option>
            <option value="Freerun">Freerun</option>
          </select>
        </div>
        <div className='dist-time-activity'>
          <div className='dist-activity'>
            <h1>DYSTANS [KM]</h1>
            <input type='number' step='0.001' placeholder='0.00' value={distance} onChange={e => setDistance(e.target.value)} required></input>
          </div>
          <div className='time-activity'>
            <h1>CZAS [HRS:MIN]</h1>
            <input type='time' value={time} placeholder='00:00' onChange={e => setTime(e.target.value)} required></input>
          </div>
        </div>
        <div className='dowod-activity'>
          <h1>ZAŁĄCZ DOWÓD</h1>
          <label className='file-upload'> {file ? `Załączony dowód: ${file.name}` : (<>
            <img src={'/content/register-activity/rejestracja_akt_zalaczdowod.png'}/>
            <span>Załącz dowód</span>
          </>)}
            <input type='file' accept='image/*' onChange={e => setFile(e.target.files[0])} hidden></input>
          </label>
        </div>
        <div className='wyslij-activity'>
          <h1>WYŚLIJ DO AKCEPTACJI</h1>
          <button type='submit'>Wyślij aktywność do akceptacji</button>
        </div>
      </form>
      <p>Mamy 72 godziny na weryfikację Twojej aktywności od momentu jej zgłoszenia. Nasz zespół pracuje na najwyższych obrotach, aby zapewnić możliwie szybką odpowiedź.</p>
    </section>
  )
}

export default RegisterActiv