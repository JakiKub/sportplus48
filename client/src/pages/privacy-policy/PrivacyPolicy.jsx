const PrivacyPolicy = () => {
    return (
        <section id="privPolicy">
            <h1 id="ppTitle">Polityka Prywatności i Cookies serwisu Sport +48</h1>
            <div className="pp-info">
                <h2>I. Informacje ogólne</h2>
                <p>
                    Niniejsza polityka dotyczy serwisu znajdującego się pod adresem: <a onClick={() => window.open("https://sportplus48.onrender.com")}>https://sportplus48.onrender.com.</a><br/>

                    Administratorem danych jest projekt społeczny Sport +48, realizowany w ramach XI edycji olimpiady "Zwolnieni z Teorii".<br/>

                    Kontakt z administratorem: contact.sportplus48@gmail.com.<br/>
</p>
            </div>
            <div className="pp-info">
                <h2>II. Jakie dane przetwarzamy i po co?</h2>
                <p>
                    Abyś mógł w pełni korzystać z naszej platformy, zbieramy dane, które podajesz przy rejestracji i podczas aktywności:<br/>

                    1. Profil użytkownika: adres e-mail, nazwa użytkownika oraz jego narodowość.<br/>

                    2. Rywalizacja i postępy: Twoje punkty , serie dni aktywności oraz historia Twoich rekordów.<br/>

                    3. Twoje cele: informacje o Twoich celach krótko- i długoterminowych, abyśmy mogli wyświetlać Ci Twoje postępy.<br/>

                    4. Bezpieczeństwo: zaszyfrowane hasło oraz tokeny.<br/>

                    5. Okres przechowywania: Twoje dane przechowujemy przez okres posiadania przez Ciebie konta na stronie. W przypadku usunięcia konta, dane zostają trwale usunięte z bazy danych<br/>

                    Podstawa prawna: Twoja zgoda (art. 6 ust. 1 lit. a RODO) oraz niezbędność do wykonania usługi (prowadzenie Twojego konta).<br/>
                </p>
            </div>
            <div className="pp-info">
                <h2>III. Pliki Cookies</h2>
                <p>
                    Nasz serwis korzysta z plików cookies, aby „pamiętać”, że jesteś zalogowany.<br/>

    1. Cookies Niezbędne: Są kluczowe do działania strony. Pozwalają utrzymać sesję po zalogowaniu, dzięki czemu widzisz swoje punkty i cele. Bez nich strona nie wiedziałaby, kim jesteś po przejściu na kolejną zakładkę.<br/>

    2. Cookies Analityczne (Google Analytics): Pomagają nam sprawdzać, ile osób nas odwiedza i które funkcje są najpopularniejsze. Dane te są zanonimizowane.<br/>

    3. Zarządzanie: Możesz wyłączyć cookies w ustawieniach przeglądarki, jednak wtedy nie będziesz mógł się zalogować do swojego profilu.<br/>
                </p>
            </div>
            <div className="pp-info">
                <h2>IV. Odbiorcy danych i bezpieczeństwo</h2>
                <p>
                    Twoje dane są bezpieczne dzięki szyfrowaniu połączenia (SSL). Korzystamy z zaufanych dostawców:<br/>

                    1. MongoDB Atlas – przechowujemy tu Twój profil<br/>

                    2. Render.com – host naszej strony.<br/>

                    3. Google Analytics – używamy do analizy ruchu na stronie.<br/>
                </p>
            </div>
            <div className="pp-info">
                <h2>V. Twoje prawa</h2>
                <p>Masz prawo do wglądu w swoje dane, ich poprawienia, a także żądania ich usunięcia (co wiąże się z zamknięciem konta). W tym celu napisz do nas na e-mail podany w punkcie I.</p>
            </div>
        </section>
    )
}

export default PrivacyPolicy