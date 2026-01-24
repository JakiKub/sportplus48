import { useState, useEffect } from 'react'

const Dashboard = ({ user }) => {
  const targetdateAr2 = new Date(2026, 1, 26, 14, 0);
  const [streak, setStreak] = useState(0);
  const [lastClick, setLastClick] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [visible, setVisible] = useState(true);
  const [goals, setGoals] = useState({
    short: { name: "", active: false },
    long: { name: "", active: false }
  });

  const quoteList = [
    { quote: "Pudłujesz 100% strzałów, których nie oddajesz.", person: "Wayne Gretzky" },
    { quote: "Mistrzowie nie rodzą się na siłowniach. Mistrzowie rodzą się z czegoś, co mają głęboko w sobie – z pragnienia, marzenia, wizji.", person: "Muhammad Ali" },
    { quote: "Ciężka praca pokonuje talent, gdy talent nie pracuje ciężko.", person: "Kevin Durant" },
    { quote: "Nie chodzi o to, czy upadniesz, lecz o to, czy się podniesiesz.", person: "Vince Lombardi" },
    { quote: "Ból, który czujesz dziś, stanie się siłą, którą poczujesz jutro.", person: "Kobe Bryant" },
    { quote: "Jeśli boisz się porażki, nie zasługujesz na sukces.", person: "Charles Barkley" },
    { quote: "Mistrz boi się przegranej. Wszyscy inni boją się wygranej.", person: "Billie Jean King" },
    { quote: "Porażałem się raz za razem w swoim życiu. I właśnie dlatego odniosłem sukces.", person: "Michael Jordan" },
    { quote: "Musisz oczekiwać od siebie rzeczy, zanim będziesz w stanie je osiągnąć.", person: "Michael Jordan" },
    { quote: "Marzenia nie działają, jeśli ty nie działasz.", person: "John C. Maxwell" },
    { quote: "Sukces nie jest przypadkiem. To ciężka praca, wytrwałość, nauka i poświęcenie.", person: "Pelé" },
    { quote: "To, co czyni coś wyjątkowym, to nie tylko to, co możesz zyskać, ale także to, co czujesz, że możesz stracić.", person: "Andre Agassi" },
    { quote: "Nigdy nie myślałem o konsekwencjach nieudanego rzutu… kiedy myślisz o konsekwencjach, zawsze myślisz o negatywnym wyniku.", person: "Michael Jordan" },
    { quote: "Chodzi o robienie czegoś w taki sposób, aby nie dało się tego zrobić lepiej. To jest cel na każdy dzień.", person: "Geno Auriemma" },
    { quote: "Masz marzenie i sięgasz po gwiazdy, a jeśli nie trafisz w gwiazdę, chwytasz garść chmur.", person: "Mike Tyson" },
    { quote: "Jedyną osobą, która naprawdę może cię zmotywować, jesteś ty sam.", person: "Shaquille O'Neal" },
    { quote: "Jeśli nie upadniesz, skąd będziesz wiedział, jak to jest się podnieść?", person: "Stephen Curry" },
    { quote: "Wygrywanie oznacza, że jesteś gotów iść dalej, pracować ciężej i dać z siebie więcej niż ktokolwiek inny.", person: "Vince Lombardi" },
    { quote: "Stawiaj sobie wysokie cele i nie zatrzymuj się, dopóki ich nie osiągniesz.", person: "Bo Jackson" },
    { quote: "Pokaż mi człowieka, który boi się źle wypaść, a pokażę ci człowieka, którego możesz pokonać za każdym razem.", person: "Lou Brock" },
    { quote: "To nie koniec, dopóki się nie skończy.", person: "Yogi Berra" },
    { quote: "Trudno pokonać kogoś, kto nigdy się nie poddaje.", person: "Babe Ruth" },
    { quote: "Jeśli nie masz czasu zrobić czegoś dobrze, to kiedy będziesz mieć czas, żeby robić to od nowa?", person: "John Wooden" },
    { quote: "Uczyń każdy dzień swoim arcydziełem.", person: "John Wooden" },
    { quote: "Nic nie zadziała, jeśli ty nie będziesz działać.", person: "John Wooden" },
    { quote: "Cokolwiek robisz w życiu, otaczaj się mądrymi ludźmi, którzy będą z tobą dyskutować.", person: "John Wooden" },
    { quote: "Najlepszą konkurencją, jaką mam, jest konkurencja ze sobą, by stać się lepszym.", person: "John Wooden" },
    { quote: "Nie pozwól, by wczoraj zabrało ci za dużo dzisiaj.", person: "John Wooden" },
    { quote: "Zdyscyplinuj siebie, a inni nie będą musieli tego robić.", person: "John Wooden" },
    { quote: "Szczęście zaczyna się tam, gdzie kończy się egoizm.", person: "John Wooden" }
  ];

  const [randomQuote, setRandomQuote] = useState(quoteList[Math.floor(Math.random() * quoteList.length)]);

  const calcTimeAr2 = () => {
    const now = new Date();
    const diff = targetdateAr2.getTime() - now.getTime();

    if (diff <= 0) return 0

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    }
  }

  const [timeAr2, setTimeAr2] = useState(calcTimeAr2());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAr2(calcTimeAr2());
    }, 1000)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("/api/streak", {credentials: "include"}).then(res => res.json()).then(data => { 
        setStreak(data.streak);
        setLastClick(data.lastClick);
      });
  }, []);

  useEffect(() => {
    fetch("/api/goals", { credentials: "include" }).then(res => res.json()).then(data => {if (data) setGoals(data)})
  }, [])

  const handleStreakAdd = async () => {
    const res = await fetch("/api/streak/click", {
      method: "POST",
      credentials: "include"
    });

    const data = await res.json();

    if (!res.ok) {
      if (data.error === "already") {
        alert("juz bylo otoz klikniete dzis");
      } else {
        alert("blad serwera");
      } 
      return;
    }

    setStreak(data.streak);
    setLastClick(data.lastClick);
  };

  const handleStreakReset = async () => {
    const res = await fetch("/api/streak/reset", {
      method: "POST",
      credentials: "include"
    });

    const data = await res.json();
    setStreak(data.streak);
    setLastClick(null);
  };

  const quoteRandomizer = () => {
    setRotation(prev => prev + 180);
    setVisible(false);

    setTimeout(() => {
      const newQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
      setRandomQuote(newQuote);
      setVisible(true);
    }, 300)
  }

  const setGoal = async (type, name) => {
    const res = await fetch(" /api/goals/set", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, name })
    });

    const data = await res.json();
    setGoals(prev => ({ ...prev, [type]: data }));
  };

  const resolveGoal = async (type, success) => {
    await fetch("/api/goals/resolve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ type, success })
    });

    setGoals(prev => ({
      ...prev,
      [type]: { name: "", active: false }
    }));
  }

  if (!user) return null;

  return (
    <section id='dashboard'>
      <div className='dsh-low'>
        <div className='dsh-title-wrapper'>
          <h1 className='dsh-title'>Z powrotem w grze!</h1>
          <h3 className='dsh-title-2'>Każdy dzień walki to ogromny sukces. Super widzieć Ciętu ponownie!</h3>
        </div>
        <div className='dsh-main'>
          <div className='arena-odl'>
            <h1>ARENA 48</h1>
            <p className='arena-odl-1'>- 26 Luty 2026, 14:00 -</p>
            <p className='arena-odl-2'>{timeAr2.days} dni : {timeAr2.hours} godzin : {timeAr2.minutes} minut : {timeAr2.seconds} sekund</p>
          </div>
          <div className='dsh-main-wrapper-2'>
            <div className='streak-div'>
              <h1>PASSA TRENINGOWA</h1>
              <p>{streak}</p>
              <div>
                <button className='streak-add' onClick={handleStreakAdd}>+1 DZIEŃ</button>
                <button className='streak-reset' onClick={handleStreakReset}>RESET</button>
              </div>
            </div>
            <div className='cytat-div'>
              <div>
                <h1>CYTAT MOTYWACYJNY</h1>
                <button onClick={quoteRandomizer} style={{ transform: `rotate(${rotation}deg) scale(${isHover ? 1.05 : 1})`}} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}></button>
              </div>
              <p className='cytat' style={{ opacity: visible ? 1 : 0, transition: "opacity .3s" }}>{randomQuote.quote}</p>
              <p className='autor' style={{ opacity: visible ? 1 : 0, transition: "opacity .3s" }}>- {randomQuote.person}</p>
            </div>
          </div>
          <div className='dsh-main-wrapper-3'>
            <div className='cel-div'>
              <h1>SPERSONALIZOWANE CELE</h1>
              <div>
                <select disabled={goals.short.active} value={goals.short.name} onChange={async e => {
                  const value = e.target.value;
                  if (!value) return;

                  const res = await fetch("/api/goals/set", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ type: "short", name: value })
                  });
                  const data = await res.json();
                  setGoals(prev => ({ ...prev, short: data }));
                }}>
                  <option value="">Ustaw cel krótkotrwały</option>
                  <option value="ss">ss</option>
                  <option value="ff">ff</option>
                </select>
                <button className='cel-accept' onClick={() => resolveGoal("short", true)}></button>
                <button className="cel-deny" onClick={() => resolveGoal("short", false)}></button>
              </div>
              <div>
                <select disabled={goals.long.active} value={goals.long.name} onChange={async e => {
                  const value = e.target.value;
                  if (!value) return;

                  const res = await fetch("/api/goals/set", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ type: "long", name: value })
                  });
                  const data = await res.json();
                  setGoals(prev => ({ ...prev, long: data }));
                }}>
                  <option value="">Ustaw cel długotrwały</option>
                  <option value="ffs">ffs</option>
                  <option value="ffsf">ffsf</option>
                </select>
                <button className='cel-accept' onClick={() => resolveGoal("long", true)}></button>
                <button className="cel-deny" onClick={() => resolveGoal("long", false)}></button>
              </div>
            </div>
            <div className='inspir-div' onClick={() => window.open("https://discord.gg/6WeJ7xjSav")}>
              <h1>ZAINSPIRUJ SIĘ</h1>
              <p>Dołącz do naszej społeczności i poznaj ludzi, którzy każdego dnia wzrastają.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard