import { useState, useEffect } from "react"

const Points = () => {
    const [points, setPoints] = useState(null);
    const [distance, setDistance] = useState([])

    useEffect(() => {
        const fetchPoints = async () => {
            const res = await fetch("/api/user/points", { credentials: "include" });

            const data = await res.json();

            console.log(data);

            setPoints(data);
        }

        fetchPoints();
    }, [])

    useEffect(() => {
        const fetchDistance = async () => {
            const res = await fetch("/api/records", { credentials: "include" });

            if (!res.ok) return

            const data = await res.json();
            setDistance(data)
        }

        fetchDistance();
    }, [])
    
    return (
        <section id="points">
            <div className="points-title">
                <h1>Benefity Twojej ciężkiej pracy</h1>
                <p>Zbieraj punkty za aktywności i wydawaj je na zniżki i inne</p>
            </div>
            <div className="points-body">
                <div className="points-left">
                    <div className="bilans">
                        <h2>AKTUALNY BILANS</h2>
                        <h1>{points ? points.pointsNow.toFixed(3) : "-"}</h1>
                        <button>JAK ZDOBYWAC PUNKTY?</button>
                    </div>
                    <div className="osiagniecia">
                        <h2>TWOJE OSIĄGNIĘCIA</h2>
                        <div className="osiagniecia-row-1">
                            {points?.pointsAll >= 100 ? <img src="/content/points/punkty_odznaka1_tak.png" onClick={() => window.alert("Brązowa Tarcza 48 - osiągnięcie przyznawane za zdobycie 100.000 punktów")}/> : <img src="/content/points/punkty_odznaka123_nie.png" onClick={() => window.alert("Brązowa Tarcza 48 - osiągnięcie przyznawane za zdobycie 100.000 punktów")}/>}
                            {points?.pointsAll >= 480 ? <img src="/content/points/punkty_odznaka2_tak.png" onClick={() => window.alert("Srebrna Tarcza 48 - osiągnięcie przyznawane za zdobycie 480.000 punktów")}/> : <img src="/content/points/punkty_odznaka123_nie.png" onClick={() => window.alert("Srebrna Tarcza 48 - osiągnięcie przyznawane za zdobycie 480.000 punktów")}/>}
                            {points?.pointsAll >= 1000 ? <img src="/content/points/punkty_odznaka3_tak.png" onClick={() => window.alert("Złota Tarcza 48 - osiągnięcie przyznawane za zdobycie 1000.000 punktów")}/> : <img src="/content/points/punkty_odznaka123_nie.png" onClick={() => window.alert("Złota Tarcza 48 - osiągnięcie przyznawane za zdobycie 1000.000 punktów")}/>}
                        </div>
                        <div className="osiagniecia-row-2">
                            {distance?.longestDistance >= 48 ? <img src="/content/points/punkty_odznaka4_tak.png" onClick={() => window.alert("Srebrny Dystans - osiągnięcie przyznawane przy pokonaniu dystansu 48 km podczas jednej aktywności")}/> : <img src="/content/points/punkty_odznaka4_nie.png" onClick={() => window.alert("Srebrny Dystans - osiągnięcie przyznawane przy pokonaniu dystansu 48 km podczas jednej aktywności")}/>}
                            {distance?.longestTime >= 228 ? <img src="/content/points/punkty_odznaka5_tak.png" onClick={() => window.alert("Srebrny Czas - osiągnięcie przyznawane przy odbyciu aktywności, która trwa minimum 4.8 godziny")}/> : <img src="/content/points/punkty_odznaka5_nie.png" onClick={() => window.alert("Srebrny Czas - osiągnięcie przyznawane przy odbyciu aktywności, która trwa minimum 4.8 godziny")}/>}
                        </div>
                    </div>
                </div>
                <div className="points-right">
                    <h2>SKLEP</h2>
                    <div className="produkty">
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Points