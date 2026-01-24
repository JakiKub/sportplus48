import { useState, useEffect } from "react"

const minutesToHHMM = minutes => {
  if (!minutes) return "00:00";

  const h = Math.floor(minutes / 60).toString().padStart(2, "0");
  const m = (minutes % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

const Records = () => {
    const [records, setRecords] = useState(null);
    const [recordsGlobal, setRecordsGlobal] = useState(null);

    useEffect(() => {
        const fetchRecords = async () => {
            const res = await fetch("/api/records", { credentials: "include" });
            const data = await res.json();
            //console.log(data);
            setRecords(data);
        }

        fetchRecords();
    }, [])

    useEffect(() => {
        const fetchRecordsGlobal = async () => {
            const res = await fetch("/api/records/global", { credentials: "include" });
            const data = await res.json();
            //console.log(data);
            setRecordsGlobal(data)
        }

        fetchRecordsGlobal()
    }, [])

    console.log(records);
    console.log(recordsGlobal);

    return (
        <section id="records">
            <div className="records-title">
                <h1>Oto Twoja tablica chwały!</h1>
                <p>Tutaj zapisujemy momenty, w których Twoje bariery zostały przełamane</p>
            </div>
            <table id="recordsTable">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>REKORD</th>
                        <th>TWÓJ WYNIK</th>
                        <th>REKORD SPOŁECZNOŚCI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="records-data">{records?.longestDistDate ? new Date(records.longestDistDate).toLocaleDateString() : "-"}</td>
                        <td className="records-table-title">Najdłuższy dystans jednej aktywności</td>
                        <td className="records-wynik">{records?.longestDistance ? records.longestDistance + " km" : "-"}</td>
                        <td className="records-global">{recordsGlobal?.distGlobal ? recordsGlobal.distGlobal + " km": "-"}</td>
                    </tr>
                    <tr>
                        <td className="records-data">{records?.longestTimeDate ? new Date(records.longestTimeDate).toLocaleDateString() : "-"}</td>
                        <td className="records-table-title">Najdłużej trwająca pojedyncza aktywność</td>
                        <td className="records-wynik">{records?.longestTime ? minutesToHHMM(records.longestTime) : "-"}</td>
                        <td className="records-global">{recordsGlobal?.timeGlobal ? minutesToHHMM(recordsGlobal.timeGlobal) : "-"}</td>
                    </tr>
                    <tr>
                        <td className="records-data">{records?.tempoDate ? new Date(records.tempoDate).toLocaleDateString() : "-"}</td>
                        <td className="records-table-title">Najlepsze średnie tempo na kilometr</td>
                        <td className="records-wynik">{records?.tempo ? records.tempo : "-"}</td>
                        <td className="records-global">{recordsGlobal?.tempoGlobal ? recordsGlobal.tempoGlobal : "-"}</td>
                    </tr>
                    <tr>
                        <td className="records-data">-</td>
                        <td className="records-table-title">Łączna ilość przebytych kilometrów</td>
                        <td className="records-wynik">{records?.totalDist ? records.totalDist + " km" : "-"}</td>
                        <td className="records-global">{recordsGlobal?.totalDistGlobal ? recordsGlobal.totalDistGlobal + " km" : "-"}</td>
                    </tr>
                </tbody>
            </table>
            <div className="best-activ">
                <h2>Twoja najlepsza aktywność</h2>
                <div className="best-activ-wrapper">
                    <div>
                        <h3>DATA</h3>
                        <h1>{records?.bestActivDate ? new Date(records.bestActivDate).toLocaleDateString() : "-"}</h1>
                    </div>
                    <div>
                        <h3>DYSTANS [KM]</h3>
                        <h1>{records?.bestActivDist ? records.bestActivDist : "-"}</h1>
                    </div>
                    <div>
                        <h3>AKTYWNOŚĆ</h3>
                        <h1>{records?.bestActivActiv ? records.bestActivActiv : "-"}</h1>
                    </div>
                    <div>
                        <h3>CZAS [HRS:MIN]</h3>
                        <h1>{records?.bestActivTime ? minutesToHHMM(records.bestActivTime) : "-"}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Records