const MainD = ({ openLogin, openRegister }) => {
  return (
    <section id='mainD'>
      <div className='main-d-h-org'>
        <h1 className='main-d-title'>ROZPOCZNIJ PRZYGODĘ</h1>
        <h6 className='main-d-sec-title'>Odkryj siłę sportu, piękno postępu i dreszcz emocji związany z pogonią za doskonałością.</h6>
      </div>
      <div className='main-d-zal-org'>
        <div className="main-d-zal">
          <div className="main-d-s-zal">ŚLEDŹ PASSĘ TRENINGOWĄ</div>
          <p className='main-d-zal-text'>Każdy dzień to cegiełka budująca Twą dyscyplinę. Obserwuj, jak Twoja regularność zamienia się w trwały nawyk.</p>
        </div>
        <div className="main-d-zal">
          <div className="main-d-s-zal">PERSONALIZUJ CELE</div>
          <p className='main-d-zal-text'>To Ty ustalasz reguły gry i to, jak wysoko zawiesić poprzeczkę. Dostosuj wyzwania do swoich marzeń, ale i możliwości.</p>
        </div>
        <div className="main-d-zal">
          <div className="main-d-s-zal">MONITORUJ POSTĘPY</div>
          <p className='main-d-zal-text'>Analizuj swoje wyniki, wyciągaj wnioski i ciesz się z każdego małego kroku, który przybliża cię do celu.</p>
        </div>
        <div className="main-d-zal">
          <div className="main-d-s-zal">ZBIERAJ PUNKTY</div>
          <p className='main-d-zal-text'>Każda aktywność zasila Twoje konto, otwierając drogę do unikalnych benefitów i potwierdzając Twoje zaangażowanie.</p>
        </div>
        <div className="main-d-zal">
          <div className="main-d-s-zal">POBIJAJ REKORDY</div>
          <p className='main-d-zal-text'>Walcz o nowe rekordy osobiste, przełamuj bariery i udowadniaj sobie każdego dnia, żę stać Cię na więcej niż myślisz.</p>
        </div>
        <div className="main-d-zal">
          <div className="main-d-s-zal">RYWALIZUJ Z INNYMI</div>
          <p className='main-d-zal-text'>Zdrowa rywalizacja z ludźmi o podobnej pasji to najlepszy motywator, by wspiąć się na szczyt własnych możliwości.
          </p>
        </div>
      </div>
      <div className='main-d-logreg-org'>
        <button className="main-d-logreg" onClick={openLogin}>ZALOGUJ SIĘ</button>
        <button className="main-d-logreg" onClick={openRegister}>ZAREJESTRUJ SIĘ</button>
      </div>
    </section>
  )
}

export default MainD