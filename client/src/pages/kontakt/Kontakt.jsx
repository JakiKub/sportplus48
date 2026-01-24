const Kontakt = () => {
  return (
    <section id='kontakt'>
      <h1 className='kontakt-title'>KONTAKT</h1>
      <div className='kontakt-div'>
        <p id='kontaktMiejsce'>Toruń (Polska)</p>
        <p id='kontaktTel'>(+48) 000 000 000</p>
        <p id='kontaktMail'>contact.sportplus48@gmail.com</p>
      </div>
      <div className='mozesz-wyslac'>
        <p className='mozesz-wys-tekst'>Możesz również wysłać nam wiadomość za pomocą Google Forms</p>
        <button id='formKontakt' onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd6iJaXt1Z4XbLSsq3ulT3Ao2tMzWO1vRQ3MZlPcK7LJaSoXg/viewform")}>FORMULARZ KONTAKTOWY</button>
      </div>
    </section>
  )
}

export default Kontakt