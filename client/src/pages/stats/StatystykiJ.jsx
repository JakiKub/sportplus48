const StatystykiJ = () => {
  return (
    <section id='statsJ'>
      <div>
        <h1>PROJEKT TO TEŻ LICZBY</h1>
        <p>Za każdym beneficjentem kryje się zmiana, za każdym dniem kryje się nowy pomysł, za każdym rokiem kryje się sukces...</p>
      </div>
      <button onClick={() => document.getElementById("statsD").scrollIntoView({ behavior: "smooth" })}>DOWIEDZ SIĘ WIĘCEJ</button>
    </section>
  )
}

export default StatystykiJ