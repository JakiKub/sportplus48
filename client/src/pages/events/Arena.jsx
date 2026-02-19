import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Arena = () => {
    const targetDateAr = new Date(2026, 2, 12);

    const navigate = useNavigate();

    const calcTimeAr = () => {
        const now = new Date();
        const diff = targetDateAr.getTime() - now.getTime();

        if (diff <= 0) {
            return 0
        }

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60)
        }
    }

    const [timeAr, setTimeAr] = useState(calcTimeAr());

    useEffect(() => {
        const interval = setInterval(() => {
        setTimeAr(calcTimeAr());
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <section id="arena">
            <div className="arena-navbar">
                <img src="/content/arena/arena48_logonavbar.png"/>
                <a onClick={() => document.getElementById("arenaOne").scrollIntoView({ behavior: "smooth" })}>Wiadomości</a>
                <a onClick={() => document.getElementById("arenaWprowadzenie").scrollIntoView({ behavior: "smooth" })}>Informacje</a>
                <a onClick={() => document.getElementById("arenaHarm").scrollIntoView({ behavior: "smooth" })}>Plan wydarzenia</a>
                <a onClick={() => document.getElementById("arenaNC").scrollIntoView({ behavior: "smooth" })}>48 Nations Cup</a>
                <a>Więcej</a>
            </div>
            <div className="arena-1" id="arenaOne">
                <div className="arena-1-wrapper" onClick={() => navigate("/events/arena/messages/theme-art")}>
                    <div className="arena-ta">
                        <img src="/content/arena-wiad/news1big.png"/>
                        <div>
                            <h3>Dołącz do gry:</h3>
                            <h3>Oto oficjalny THEME ART Areny 48</h3>
                        </div>
                    </div>
                    <div className="arena-wiad">
                        {/* <div className="arena-wiad-div">
                            <img src="/content/arena-wiad/news1small"/>
                        </div>
                        <div className="arena-wiad-div">
                            <img src="/content/arena-wiad"/>
                        </div> */}
                    </div>
                </div>
                <div className="arena-odl-3">
                    <img src="/content/arena/arena48_odliczanielogo1.png"/>
                    <img src="/content/arena/arena48_odliczanielogo2.png"/>
                    <div className="arena-odl-bttn-alike">26 Luty 2026</div>
                    <div className="arena-wlasc-odl">
                        <h1>{timeAr.days}</h1>
                        <p>days /</p>
                        <h1>{timeAr.hours}</h1>
                        <p>hrs /</p>
                        <h1>{timeAr.minutes}</h1>
                        <p>mins /</p>
                        <h1>{timeAr.seconds}</h1>
                        <p>secs</p>
                    </div>
                </div>
            </div>
            <div className="arena-2">
                <div className="arena-info">
                    <div>
                        <div  className="arena-info-lok">
                            <div> 
                                <h3>Lokalizacja</h3>
                                <p>Aula I LO im. M. Kopernika Toruń, Polska</p>
                            </div>
                        </div>
                        <div  className="arena-info-ter">
                            <div>
                                <h3>Termin</h3>
                                <p>26 lutego 2026 r.</p>
                            </div>
                        </div>
                    </div>
                    <img src="/content/arena/arena48_coreinfoorganizedby.png"/>
                </div>
                <div className="arena-2-wrapper">
                    <div className="arena-wprowadzenie" id="arenaWprowadzenie">
                        <h1>WPROWADZENIE</h1>
                        <div>
                            <h2>O wydarzeniu</h2>
                            <p>Arena 48 to gala promująca sport i aktywność fizyczną. Wydarzenie posiada swój unikatowy format, a jego realizacja jest możliwa dzięki zaangażowaniu znanych sportowców z całej Europy 
                                (wliczając w to medalistów olimpijskich).
                            </p>
                        </div>
                        <div>
                            <h2>Cel wydarzenia</h2>
                            <p>Celem wydarzenia jest promocja sportu, aktywności fizycznej, idei fair-play, a także zjednoczenia młodych ludzi z całej Europy.</p>
                        </div>
                        <div>
                            <h2>Jak wziąć udział w wydarzeniu?</h2>
                            <p>Każdy ma możliwość udziału w wydarzeniu, organizatorzy nie wymagają dokonywania opłat lub rezerwacji biletó. Wydarzenie będzie rejestrowane, a następnie retransmitowane w marcu 2026 r.</p>
                        </div>
                        <div>
                            <h2>Organizator</h2>
                            <p>Organizatorem wydarzenia jest projekt społeczny Sport +48, który realizowany jest w ramach XI edycji ogólnopolskiej Olimpiady "Zwolnieni z Teorii".</p>
                        </div>
                    </div>
                    <div className="arena-harmonogram" id="arenaHarm">
                        <h1>HARMONOGRAM</h1>
                        <div className="arena-har-div">
                            <h2>Poniedziałek, 19 stycznia 2026</h2>
                            <div>Losowanie 48 Nations Cup, Ogłoszenie prowadzących, Przedstawienie logo Arena 48</div>
                        </div>
                        <div className="arena-har-div">
                            <h2>Czwartek, 26 lutego 2026</h2>
                            <div>Wielki Finał Arena 48</div>
                        </div>
                        <div className="arena-har-div">
                            <h2>TBD marzec 2026</h2>
                            <div>Retransmisja Wielkiego Finału Arena 48 na oficjalnym kanale projektu na YouTube</div>
                        </div>
                        <div className="arena-har-div">
                            <h2>TBD kwiecień 2026</h2>
                            <div>Konferencja podsumowująca projekt Sport +48 oraz wydarzenie Arena 48</div>
                        </div>
                        <div className="arena-wyrzutek">
                            <h2>Szczegółowy plan wydarzenia znajdziesz tu:</h2>
                            <button>Plik zostanie opublikowany później</button>
                        </div>
                    </div>
                    <div className="arena-nc" id="arenaNC">
                        <h1>48 NATIONS CUP</h1>
                        {/* tu <img> musi byc jak ten idiota skojarzy ze mi go nie wyslal */}
                        <div className="arena-nc-div">
                            <h2>Czym jest 48 Nations Cup?</h2>
                            <p>48 Nations Cup 2026 to druga edycja organizowanego przez projekt konkursu odbywającego się co 2 lata, który wyłania najbardziej aktywne państwa Europy.</p>
                        </div>
                        <div className="arena-nc-div">
                            <h2>Format rozgrywek</h2>
                            <p>48 uczestniczących państw w wyniku losowania na 12 grup po 4 państwa w Rundzie Wstępnej. Dwa najbardziej aktywne z każdej grupy awansują do Rundy Głównej.</p>
                            <p>W Rundzie Głównej punkty przyznaje się w 4 kategoriach, powstaje jedna duża tabela, która obejmuje zakwalifikowane 24 państwa.</p>
                            <p>Wygrywa państwo, które zdobędzie jak najwięcej punktów.</p>
                            <p>Więcej szczegółów znajdziesz w regulaminie.</p>
                        </div>
                        <div className="arena-countries" id="arenaCnt">
                            <h2>Kraje biorące udział</h2>
                            <img src="/content/arena/arena48_kraje.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Arena