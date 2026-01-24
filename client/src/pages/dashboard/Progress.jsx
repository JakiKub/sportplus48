import { useState, useEffect } from "react";

import StatusIco from "./StatusIco";

const minutesToHHMM = minutes => {
  if (!minutes) return "00:00";

  const h = Math.floor(minutes / 60).toString().padStart(2, "0");
  const m = (minutes % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

const formatDate = date => {
  return new Date(date).toLocaleDateString("pl-PL");
}

const Progress = ({ user }) => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivs = async () => {
            try {
                const res = await fetch("/api/activity?limit=8", { credentials: "include" });

                if (!res.ok) return

                const data = await res.json();
                setActivities(data.activities || []);
            } catch (error) {
                console.error(`progres: ${error}`);
            }
        }

        fetchActivs();
    }, []);

    if (!user) return null

    return (
        <section id="progress">
            <div>
                <h1>Obserwuj swoje postępy</h1>
                <p>Śledź swoje postępy, monitoruj systematyczność i patrz, jak rosną Twoje możliwości</p>
            </div>
            <table id="progressTable">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>AKTYWNOŚĆ</th>
                        <th>DYSTANS</th>
                        <th>CZAS</th>
                        <th>STATUS</th>
                        <th>PUNKTY</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map(act => (
                        <tr key={act._id} className={`activity-row ${act.activity.toLowerCase()}`}>
                            <td>{formatDate(act.createdAt)}</td>
                            <td>{act.activity}</td>
                            <td>{act.distance > 0 ? `${act.distance.toFixed(2)} km` : "N/A"}</td>
                            <td>{minutesToHHMM(act.timeInMins)}</td>
                            <td><StatusIco status={act.status}/></td>
                            <td>{act.status === "pending" || act.status === "denied" ? "0.000" : act.points.toFixed(3)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Progress