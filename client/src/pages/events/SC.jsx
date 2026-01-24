import { useState, useEffect } from "react"

const SC = () => {
    const targetDateSC = new Date(2026, 1, 1);

    const calcTimeSC = () => {
        const now = new Date();
        const diff = targetDateSC.getTime() - now.getTime();

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

    const [timeSC, setTimeSC] = useState(calcTimeSC());

    useEffect(() => {
        const interval = setInterval(() => {
        setTimeSC(calcTimeSC());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="sc">
            <div className="sc-navbar">
                <img src="/content/48sc/48sc_logo.png"/>
                <a className="sc-nav-a" onClick={() => document.getElementById("scStart").scrollIntoView({ behavior: "smooth" })}>Start</a>
                <a className="sc-nav-a" onClick={() => document.getElementById("scInfo").scrollIntoView({ behavior: "smooth" })}>Informacje</a>
                <a className="sc-nav-a" onClick={() => document.getElementById("scWynik").scrollIntoView({ behavior: "smooth" })}>Wynik</a>
                <a className="sc-nav-a" onClick={() => document.getElementById("scUdzial").scrollIntoView({ behavior: "smooth" })}>Jak wziąć udział</a>
                <a className="sc-nav-a" onClick={() => document.getElementById("scDocs").scrollIntoView({ behavior: "smooth" })}>Dokumenty</a>
                <a className="sc-nav-a" onClick={() => document.getElementById("scFaq").scrollIntoView({ behavior: "smooth" })}>FAQ</a>
            </div>
            <div className="sc-1" id="scStart">
                <h3>1 LUTEGO - 21 MARCA, 2026</h3>
                <h1>Tu zaczyna się przyszłość</h1>
                <div className="sc-odl">
                    <div className="sc-odl-txt">
                        <p>DAYS</p>
                        <p>HRS</p>
                        <p>MINS</p>
                        <p>SECS</p>
                    </div>
                    <div className="sc-odl-wlasc">
                        <h2>{timeSC.days}</h2>
                        <h2>:</h2>
                        <h2>{timeSC.hours}</h2>
                        <h2>:</h2>
                        <h2>{timeSC.minutes}</h2>
                        <h2>:</h2>
                        <h2>{timeSC.seconds}</h2>
                    </div>
                </div>
            </div>
            <div className="sc-2">
                <div className="sc-info">
                    <div>
                        <div className="sc-info-rozp">
                            <div>
                                <p>Rozpoczęcie</p>
                                <h3>1 Lutego, 2026</h3>
                            </div>
                        </div>
                        <div className="sc-info-zak">
                            <div>
                                <p>Zakończenie</p>
                                <h3>21 Marca, 2026</h3>
                            </div>
                        </div>
                    </div>
                    <img src="/content/48sc/48sc_coreorganizedby.png"/>
                </div>
                <div className="sc-wrapper">
                    <div className="sc-informacje" id="scInfo">
                        <h1>48 dni - tyle czasu wystarczy, aby zmienić wszystko...</h1>
                        <div>
                            <h3>O akcji</h3>
                            <p>Uprawiaj sport, chwal siętym w sieci oraz rejestru jswoje wyniki na platformie - razem zbieramy jak najwięcej kilometrów, zmieniamy podejście ludzi do sportu. Mamy 48 dni.</p>
                        </div>
                        <div>
                            <h3>Cel akcji</h3>
                            <p>Celem akcji jest zebranie przez uczestników jak najwięcej kilometrów w ciągu 48 dni.</p>
                        </div>
                        <div>
                            <h3>Jak wziąć udział</h3>
                            <p>Wystarczy rejestrować swoje aktywności za pomocą naszej platformy lub formularza.</p>
                        </div>
                        <div>
                            <h3>Organizator</h3>
                            <p>Organizatorem akcji jest projekt społeczny Sport +48, który realizowany jest w ramach XI edycji ogólnopolskiej Olimpiady "Zwolnieni z Teorii".</p>
                        </div>
                        <img src="/content/48sc/48sc_linia.png"/>
                    </div>
                    <div className="sc-wynik" id="scWynik">
                        <h1 className="sc-small-h1">Wynik akcji</h1>
                        <p>Celem akcji jest pokonanie przez uczestników jak największej ilości kilometrów w ciągu 48 dni. Szczegółowe wyniki akcji zawierające całkowitą ilość pokonanych kilometrów oraz inne statystyki zostaną opublikowane 22 marca 2026 r.</p>
                        <h3>Licznik kilometrów pokonanych w ramach 48 Sport Challenge</h3>
                        <h1 className="sc-big-h1">TBA 22.03</h1>
                        <div>
                            <h2>Najbardziej zaangażowane państwa [km]</h2>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <p>Szczegółowy raport dotyczący akcji zostanie opublikowany po zakończeniu akcji</p>
                    </div>
                    <div className="sc-udzial" id="scUdzial">
                        <h1>Ty też możesz być częścią akcji!</h1>
                        <div>
                            <h3>Kto może wziąć udział?</h3>
                            <p>W akcji może wziąć udział każdy, kto chce. Udział jest w pełni darmowy dla każdego, kto chciałby spróbować swoich sił w 48 Sport Challenge. Jak dołączyć do akcji?</p>
                        </div>
                        <div>
                            <h3>Opcja 1: Rejestracja aktywności poprzez platformę Sport +48</h3>
                            <p>Zakładasz konto na stronie projektu, wchodzisz w odpowiednią zakładkę i rejestrujesz swoją aktywność, a dodatkowo czerpiesz benefity swojej ciężkiej pracy.</p>
                        </div>
                        <div>
                            <h3>Opcja 2: Rejestracja aktywności poprzez formularz internetowy</h3>
                            <p>Jeśli preferujesz całkowitą anonimowość lub z jakiegoś powodu nie masz dostępu do naszej platformy, możesz rejestrować swoje aktywności za pośrednictwem formularza znajdującego się tutaj:</p>
                        </div>
                        <a>FORMULARZ 48 SPORT CHALLENGE</a>
                        <div>
                            <h3>Opcja 3: Rejestracja aktywności poprzez adres e-mail</h3>
                            <p>Dozwolone jest także wysyłanie aktywności za pośrednictwem adresu e-mail do supportu projektu Sport +48 (s.sportplus48@gmail.com). Zaleca się stosowanie tej metody w przypadku aktywności o długich dystansach lub długim czasie.</p>
                        </div>
                    </div>
                    <div className="sc-docs">
                        <h1>Lista dokumentów</h1>
                        <div className="sc-lista" id="scDocs">
                            <h2>Link do Google Drive zawierającego niezbędne dokumenty</h2>
                            <a>LINK DO GOOGLE DRIVE</a>
                            <p>Uwaga! Dokumenty są na bieżąco aktualizowane</p>
                        </div>
                        <div className="sc-faq" id="scFaq">
                            <h1>FAQ</h1>
                            <a onClick={() => window.alert("48 Sport Challenge to wyjątkowa akcja, której celem jest zebranie przez uczestników jak największej ilości kilometrów - biegając, chodząc, jeżdżąc na rowerze i podejmując inne formy aktywnego spędzania czasu. ")}>01. Czym jest 48 Sport Challenge?</a>
                            <a onClick={() => window.alert("Wystarczy, że zarejestrujesz u nas aktywność. Jak to zrobić? Możesz zrobić to za pośrednictwem konta, które możesz bezpłatnie założyć na naszej platformie. Możesz także wypełnić specjalny formularz dostępny na tej stronie oraz wysłać nam swoją aktywność na nasz adres e-mail. Udział w akcji jest bezpłatny.")}>02. Jak mogę wziąć udział w 48 Sport Challenge?</a>
                            <a onClick={() => window.alert("Aktywności przesłane przez jedną z akceptowalnych dróg ich zgłoszenia trafiają do weryfikacji pod kątem ich uwierzytelnienia. Jeśli aktywność przejdzie ten proces pomyślnie, zostaje ona wliczona do akcji.")}>03. Kiedy moje aktywności liczą się do akcji 48 Sport Challenge?</a>
                            <a onClick={() => window.alert("Dzięki udziałowi w 48 Sport Challenge zyskujesz poczucie realnego wpływu, wspólnoty z innymi uczestnikami, motywację, poprawiasz swoją kondycję fizyczną oraz przede wszystkim dobrze się bawisz i aktywnie spędzasz czas.")}>04. Jakie są korzyści brania udziału w 48 Sport Challenge?</a>
                            <a onClick={() => window.alert("Pytania dotyczące 48 Sport Challenge możesz wysłać na adres e-mail: s.sportplus48@gmail.com (Sport +48 Support)")}>05. Gdzie kierować pytania dotyczące 48 Sport Challenge?</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SC