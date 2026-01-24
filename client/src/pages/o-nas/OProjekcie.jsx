const OProjekcie = () => {
  return (
    <section id='oProjekcie'>
      <h1 className='o-projekcie-tytul'>O PROJEKCIE</h1>
      <p className='o-projekcie-opis'>Nasz projekt to międzynarodowa inicjatywa, której celem jest aktywizacja młodych i dorosłych do regularnej aktywności fizycznej. 
        Łączymy sport, pasję i innowację, tworząc prawdziwą rewolucję.
      </p>
      <button id='dowiedzSieWiecej' onClick={() => document.getElementById("oNasOpis").scrollIntoView({ behavior: "smooth" })}>DOWIEDZ SIĘ WIĘCEJ</button>
    </section>
  )
}

export default OProjekcie