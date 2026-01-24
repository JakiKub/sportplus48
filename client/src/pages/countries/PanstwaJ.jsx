const PanstwaJ = () => {
  return (
    <section id='panstwaJ'>
      <h1 className='panstwa-title'>BEZ GRANIC</h1>
      <div className='panstwa-opis-div'>
        <p className='panstwa-opis'>Sport nie zna granic, podobnie jak nasz projekt.</p>
        <p className="panstwa-opis">Prawdziwa sportowa rewolucja dociera do kolejnych państw.</p>
        <p className="panstwa-opis">Zobacz, gdzie już działamy:</p>
      </div>
      <button id='dowiedzSiePanstwa' onClick={() => document.getElementById("panstwaD").scrollIntoView({ behavior: "smooth" })}>DOWIEDZ SIĘ WIĘCEJ</button>
    </section>
  )
}

export default PanstwaJ