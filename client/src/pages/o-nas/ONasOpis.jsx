const ONasOpis = () => {
  return (
    <section id='oNasOpis'>
      <h1 className='o-nas-tytul'>Z POWROTEM W GRZE...</h1>
      <img src='/content/about-us/onas_linia.png'/>
      <p className='o-nas-opis'>Wszystko zaczęło się od marzenia, że sport może łączyć ludzi ponad granice, religie i przekonania. Pewnego dnia 10 młodych osób postanowiło zmienić te marzenia 
        w rzeczywistość. Tak narodził się projekt "Sport +48". Wspierani przez medalistów olimpijskich i napędzani potrzebami młodych ludzi stworzyli plan, który zmienia podejście do sportu. 
        Zebrali zespół i zaczęli działać. W ich planach: akcje i wydarzenia publiczne. Cel? 100 000 beneficjentów działań projektu. Ambitny cel, ambitni ludzie i ambitny projekt. Projekt, 
        który nie ogranicza się do Polski - działa takżę poza nią. +48 to nie tylko numer kierunkowy dla Polski - to prawdziwa sportowa rewolucja!
      </p>
      <p className='o-nas-opis-2'>Poznaj niezwykły zespół, który każdego dnia tworzy niezwykłe rzeczy:</p>
      <button id='poznajZespol' onClick={() => document.getElementById("oZespole").scrollIntoView({ behavior: "smooth" })}>POZNAJ NASZ ZESPÓŁ</button>
    </section>
  )
}

export default ONasOpis