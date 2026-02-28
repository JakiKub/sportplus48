import { useNavigate } from "react-router-dom"

const ArenaNC = ()=> {
    const navigate = useNavigate();

    return (
        <section id="arenaNC">
            <div className="arena-navbar-msgs">
                <img src="/content/arena/arena48_logonavbar.png" onClick={() => navigate("/events/arena")}/>
                <a onClick={() => navigate("/events/arena#arenaOne")}>Wiadomości</a>
                <a onClick={() => navigate("/events/arena#arenaWprowadzenie")}>Informacje</a>
                <a onClick={() => navigate("/events/arena#arenaHarm")}>Plan wydarzenia</a>
                <a onClick={() => navigate("/events/arena#arenaNC")}>48 Nations Cup</a>
                <a>Więcej</a>
            </div>
            <div id="arenaNCMain">
                <div className="arena-nc-main-wrapper">
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
                                        <p>12 marca 2026 r.</p>
                                    </div>
                                </div>
                            </div>
                            <img src="/content/arena/arena48_coreinfoorganizedby.png"/>
                        </div>
                    </div>
                    <div className="arena-nc-main">
                        <div className="arena-msg-author">
                            <img src="/content/arena-wiad/logos48_art.png" alt="logo"/>
                            <div>
                                <h4>Sport +48</h4>
                                <p>1 lutego 2026 r. (edytowane: 20 lutego 2026 r.)</p>
                            </div>
                        </div>
                        <div className="arena-nc-artyk">
                            <h1>Coś więcej niż konkurs</h1>
                            <img src="/content/arena-wiad/news2art.png"/>
                            <p>
                                48 Nations Cup 2026 to konkurs, którego celem jest wskazanie najbardziej aktywnego państwa spośród 48 
                                uczestniczących europejskich państw. Jego wyniki pokażą, które nacje spędzają najwięcej czasu, uprawiając sport. 
                                To pierwszy taki konkurs. Jego wyniki zostaną podane podczas Wielkiego Finału wydarzenia Arena 48. A które miejsce zajmie 
                                Twój kraj? Oglądaj galę już 12 marca.
                            </p>
                        </div>
                        <div className="arena-nc-artyk">
                            <h1>Format kokursu</h1>
                            <p>
                                Do udziału w konkursie zaproszono wszystkie państwa, które są:
                                1. uznawane formalnie na arenie międzynarodowej jako niepodległe ORAZ
                                2. aktywnie partycypują w europejskich rozgrywkach sportowych pod barwami narodowymi LUB
                                3. zostały zaproszone do udziału.
                            </p>
                            <div>
                                <p>48 państw zostało podzielone na 8 koszyków według regionów. Następnie zostały rozlosowane na 12 grup, po 4 kraje w każdej. Losowanie odbyło się dnia 20 lutego 2026 r. w Toruniu. Oto jego wyniki:</p>
                                <div>
                                    <p>A: TBD, TBD, TBD, TBD </p>
                                    <p>B:  TBD, TBD, TBD, TBD</p> 
                                    <p>C:  TBD, TBD, TBD, TBD</p> 
                                    <p>D:  TBD, TBD, TBD, TBD</p> 
                                    <p>E:  TBD, TBD, TBD, TBD</p> 
                                    <p>F:  TBD, TBD, TBD, TBD</p> 
                                    <p>G:  TBD, TBD, TBD, TBD</p> 
                                    <p>H:  TBD, TBD, TBD, TBD</p> 
                                    <p>I:  TBD, TBD, TBD, TBD</p> 
                                    <p>J:  TBD, TBD, TBD, TBD</p> 
                                    <p>K:  TBD, TBD, TBD, TBD</p> 
                                    <p>L:  TBD, TBD, TBD, TBD</p>
                                </div>
                            </div>

                            <p>
                                z tzw. Rundy Wstępnej (Preliminary Round) do Rundy Głównej awansują 2 państwa z każdej grupy, które uzyskają najwyższą ilość punktów.
                                W Rundzie Głównej (Main Round) liczące 4 państwa grupy 1-6 tworzą zakwalifikowane drużyny z sąsiadujących grup, czyli: Grupa 1: A1, A2, B1, B2, Grupa 2: ..., Grupa 6: K1, K2, L1, L2.
                                Do Fazy Pucharowej (Knockout Phase) awansują najlepsze 2 państwa z każdej z grup 1-6 ORAZ 4 najwyżej sklasyfikowane państwa, które zajęły 3. miejsca w Rundzie Głównej.
                                Do Fazy Pucharowej kwalifikuje się 16 państw. System losuje pary 1/8. Wygrany każdej pary awansuje dalej, przegrany odpada. Następnie są ćwierćfinały, półfinały, finał o 3. miejsce oraz finał o 1. miejsce.
                            </p>
                            <p>
                                Organizatorzy przedstawią szczegółowe wyniki konkursu po zakończeniu wydarzenia Arena 48. Państwa, które odpadły w Rundzie Wstępnej zostaną sklasyfikowane na miejscach 25-48, te które odpadną w Rundzie Głównej znajdą się na miejscach 17-24, w 1/8 9-16, a w ćwierćfinale 5-8. Państwa, które przejdą dalej będą na miejscach 1-4.
                            </p>
                            <p>
                                Ranking punktowy ustala się w następujący sposób:
                                10% - wyniki na młodzieżowych uniwersjadach
                                20% - medale zdobyte na Letnich (2020, 2024) i Zimowych Igrzyskach Olimpijskich (2022, 2026)
                                30% - rankingi drużyn narodowych oraz indywidualnych sportowców w największych 20 dyscyplinach świata
                                40% - wskaźnik osób regularnie uprawiających sport
                            </p>
                            <p>
                                *Uwaga! Format może ulec zmianie ze względu na kwestie techniczno-logistyczne.
                            </p>
                        </div>
                        <div className="arena-nc-artyk">
                            <h1>Zmiana na liście państw uczestniczących</h1>
                            <p>
                                Decyzją organizatorów, Białoruś (pod nazwą Team Belarus i neutralną flagą) nie weźmie udziału w konkursie ze względu na wykluczenie z udziału pod oficjalnymi barwami narodowymi państwa z Zimowych Igrzysk Olimpijskich Milano Cortina 2026. Wyspy Owcze regularnie partycypujące w europejskich rozgrywkach międzynarodowych zajmą miejsce wykluczonego z udziału w konkursie państwa. 
                            </p>
                            <p>
                                Organizatorzy podkreślają swoją pełną apolityczność, zaznaczając, że decyzja o wykluczeniu Białorusi nie jest powiązana z kwestiami politycznymi, a jedynie z brakiem możliwości jej klasyfikacji w rankingu spowodowanej wykluczeniem państwa z licznych rozgrywek i zawodów sportowych.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArenaNC