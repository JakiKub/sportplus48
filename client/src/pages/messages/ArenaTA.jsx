import { useNavigate } from "react-router-dom"

const ArenaTA = () => {
    const navigate = useNavigate();

    return (
        <section id="arenaTA">
            <div className="arena-navbar-msgs">
                <img src="/content/arena/arena48_logonavbar.png" onClick={() => navigate("/events/arena")}/>
                <a onClick={() => navigate("/events/arena#arenaOne")}>Wiadomości</a>
                <a onClick={() => navigate("/events/arena#arenaWprowadzenie")}>Informacje</a>
                <a onClick={() => navigate("/events/arena#arenaHarm")}>Plan wydarzenia</a>
                <a onClick={() => navigate("/events/arena#arenaNC")}>48 Nations Cup</a>
                <a>Więcej</a>
            </div>
            <div id="arenaTAMain">
                <div className="arena-ta-main-wrapper">
                    <div className="arena-213">
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
                    </div>
                    <div className="arena-ta-main">
                        <div className="arena-msg-author">
                            <img src="/content/arena-wiad/logos48_art.png" alt="logo"/>
                            <div>
                                <h4>Sport +48</h4>
                                <p>29 stycznia 2026 r.</p>
                            </div>
                        </div>
                        <div className="arena-artyk">
                            <h1 className="ar-ta-main-title">Dołącz do gry: oto oficjalny slogan i theme art Arena 48</h1>
                            <img src="/content/arena-wiad/news1art.png" alt="news-art-one"/>
                        </div>
                        <div className="arena-artyk">
                            <h1 className="ar-ta-nd-title">Inspiracja Grecją</h1>
                            <p>
                                Grecja. Kraj pełen gór, mórz i cudów. Jednym z nich jest niewątpliwie sport,
                                a konkretnie igrzyska olimpijskie, których duch jest obecny także współcześnie.
                                I to właśnie Grecja stała się inspiracją dla naszego wydarzenia. Oddaliśmy to w oficjalnej
                                wizualizacji wydarzenia, która jest, niejako, odzwierciedleniem Grecji, dynamiki, ducha sportu.
                                    Skoro igrzyska potrafiły zatrzymać wojny w starożytności, to czemu sport miałby nie zmienić świata,
                                    w którym żyjemy obecnie?
                            </p>
                        </div>
                        <div className="arena-artyk">
                            <h1 className="ar-ta-nd-title">A Ty - dołączasz do gry?</h1>
                            <p>
                                Oficjalna wizualizacja wydarzenia to tylko jeden z jego elementów.
                                Każdy kolejny element przybliża nas do Wielkiego Finału Arena 48.
                                My będziemy czekać 12 marca 2026 r. w Auli I Liceum Ogólnokształcącego im. M.
                                Kopernika w Toruniu. A Ty? Dołączysz do naszej gry?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArenaTA