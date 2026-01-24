import { useState } from "react";

const OZespole = () => { 
  const zespolArr = [
    { zdj: "/content/about-us/zdj_igor.png", imie: "IGOR", role: "EXECUTIVE SUPERVISOR, BRAND & MARKETING MANAGER", roots: "/content/about-us/flaga_chorwacja.png", roots2: "CRO", tekst: "Współzałożyciel i inicjator projektu. W wieku 16 lat ukończył półmaraton bez przygotowania. Poza projektami interesuje się sportem, brandingiem, marketingiem oraz geopolityką. Jego motto? \"Jeśli masz czas wolny to znaczy, że zapomniałeś coś zrobić\".", favSport: "SIATKÓWKA, BIEGANIE", favKlub: "GNK DINAMO ZAGREB" },
    { zdj: "/content/about-us/zdj_iga.png", imie: "IGA", role: "TEAM LEADER", roots: "/content/about-us/flaga_polska.png", roots2: "POL", tekst: "Liderka i koordynatorka wydarzeń, a także pasjonatka kreatywności, pracy zespołowej oraz wcielania pomysłów w życie. W wolnym czasie lubi tenis, szydełkowanie, modę, książki i kwiaty - zawsze znajduje inspirację w małych rzeczach.", favSport: "TENIS", favKlub: "POLSKA NARODOWA DRUŻYNA SIATKÓWKI" },    
    { zdj: "/content/about-us/zdj_jakub.png", imie: "JAKUB", role: "IT MANAGER", roots: "/content/about-us/flaga_polska.png", roots2: "POL", tekst: "Menedżer IT w zespole. Trenuje karate i żeglarstwo. Lubi słuchać muzyki metalowej oraz grać w gry wideo, szczególnie Counter Strike. Jego motto brzmi: \"Cokolwiek czynisz, czyń mądrze i oczekuj końca\".", favSport: "KARATE, ŻEGLARSTWO", favKlub: "THE MONGOLZ" },
    { zdj: "/content/about-us/zdj_bednar.png", imie: "JAN", role: "SOCIAL MEDIA MANAGER", roots: "/content/about-us/flaga_polska.png" ,roots2: "POL", tekst: "Członek zespołu, kreatywny i biegły w mediach społecznościowych, znany z dbania o dobry nastrój i dobrą atmosferę. Pasjonuje się piłką nożną, a czasami tenisem, czerpiąc energię z każdego meczu. Fan Federico Chiesy i aktywny gracz EA FC 26.", favSport: "PIŁKA NOŻNA", favKlub: "LIVERPOOL FC" },
    { zdj: "/content/about-us/zdj_blanka.png", imie: "BLANKA", role: "SCHOOL MANAGER & EVENT CO-COORDINATOR", roots: "/content/about-us/flaga_niemcy.png", roots2: "GER", tekst: "Trenuje lekkoatletykę i codziennie chodzi na siłownię. W wolnym czasie gra na gitarze i pianinie. Lubi śpiewać i spędzać czas z przyjaciółmi.", favSport: "BIEGANIE", favKlub: "FC BARCELONA" },
    { zdj: "/content/about-us/zdj_filip.png", imie: "FILIP", role: "48 SPORT CHALLENGE EXECUTIVE SUPERVISOR", roots: "/content/about-us/flaga_polska.png", roots2: "POL", tekst: "Wszechstronnie utalentowany przedsiębiorca (przynajmniej tak mu się wydaje). Znany z wielu osiągnięć, między innymi: skoków na głęboką wodę, chodzenia po cienkim lodzie, spania (rzadko), a jego niesamowity humor rozwesela każde serce radością i fantazją. Wielki fan opisywania siebie w trzeciej osobie.", favSport: "WARCABY", favKlub: "KLUB MYSZKI MIKI" },
    { zdj: "/content/about-us/zdj_gustaw.png", imie: "GUSTAW", role: "ACTIONS COORDINATOR", roots: "/content/about-us/flaga_polska.png", roots2: "POL", tekst: "W projekcie pomaga w mediach społecznościowych i akcjach postronnych. Wspina się od ponad 6 lat i jest aktywny fizycznie od dzieciństwa. Lubi też gotować, oglądać filmy i podróżować z przyjaciółmi i rodziną.", favSport: "WSPINACZKA, KOSZYKÓWKA", favKlub: "BRAK" },
    { zdj: "/content/about-us/zdj_kacper.png", imie: "KACPER", role: "LAW SPECIALIST & PODCAST SUPERVISOR", roots: "/content/about-us/flaga_rosja.png", roots2: "RUS", tekst: "Specjalista od prawa. Pracowity i precyzyjny. Pasjonat historii i sztuki starożytnej. Jest filantropem, znanym aktywistą, laureatem i zwycięzcą niezliczonych konkursów historycznych.", favSport: "PŁYWANIE, JAZDA NA ROWERZE", favKlub: "KS TORUŃ" },
    { zdj: "/content/about-us/zdj_lena.png", imie: "LENA", role: "EVENT CO-COORDINATOR", roots: "/content/about-us/flaga_polska.png", roots2: "POL", tekst: "Jest członkinią zespołu, która od dzieciństwa pasjonuje się sztuką. Jej ulubione sporty to taniec, akrobatyka i narciarstwo. W wolnym czasie lubi oglądać seriale science fiction i spędzać czas z przyjaciółmi.", favSport: "TANIEC, AKROBATYKA, NARCIARSTWO", favKlub: "BRAK" },
    { zdj: "/content/about-us/zdj_mikolaj.png", imie: "MIKOŁAJ", role: "FINANCE MANAGER & COMMUNITY SUPERVISOR", roots: "/content/about-us/flaga_polska.png", roots2: "POL", tekst: "Ten genialny filozof i filantrop zarządza pieniędzmi lepiej niż Sknerus McKwacz. Pomnoży twój majątek dziesięciokrotnie w ciągu jednego miesiąca i zbierze fundusze na projekty szybciej, niż zdążysz powiedzieć „pieniądze”. Kieruje się jedną zasadą: ciasto to kłamstwo.", favSport: "SZACHOBOKS, CHEESE ROLLING", favKlub: "RKS HUWDU" }   
  ];
  
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const osoba = zespolArr[index];

  const przesunieciePrawo = () => {
    setFade(false);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % zespolArr.length);
      setFade(true);
    }, 300);
  };

  const przesuniecieLewo = () => {
    setFade(false);

    setTimeout(() => {
      setIndex((prev) => prev === 0 ? zespolArr.length - 1 : prev - 1);
      setFade(true);
    }, 300);
  };

  return (
    <section id='oZespole'>
      <h1 className='o-zespole-title'>POZNAJ ZESPÓŁ</h1>
      <div className={`osoba ${fade ? "fade-in" : "fade-out"}`}>
      <div className='o-zespole-rest'>
        <img src={osoba.zdj} id='zdjProf'/>
        <div className='o-zespole-dane'>
          <div className='dane-top'>
            <button id='daneLewo' onClick={przesuniecieLewo}></button>
            <h1 id='imie'>{osoba.imie}</h1>
            <button id='danePrawo' onClick={przesunieciePrawo}></button>
          </div>
          <div className='role-projektu'>
            <h2 className='role-opis' id='roleOpis'>{osoba.role}</h2>
          </div>
          <div className='narodowosci-projektu'>
            <h3 className='narodowosci-nar'>NATIONALITY <img src='/content/about-us/flaga_polska.png'/> POL, ROOTS <img src={osoba.roots} id='zdjNar'/></h3><h3 id='rootsDwa'>{osoba.roots2}</h3>
          </div>
          <p className='opis-o-osobie' id='opisOOsobie'>{osoba.tekst}</p>
          <div className='fav-rzeczy'>
            <div className="fav-rzecz">
              <div className='fav-cos'>ULUBIONE SPORTY</div>
              <h3 className='fav-eff' id='favSport'>{osoba.favSport}</h3>
            </div>
            <div className="fav-rzecz">
              <div className='fav-cos-2'>ULUBIONY KLUB</div>
              <h3 className='fav-eff' id='favKlub'>{osoba.favKlub}</h3>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default OZespole