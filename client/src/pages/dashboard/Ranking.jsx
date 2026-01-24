import { useState, useEffect, useRef } from "react";

import RankingRow from "./RankingRow";

const page_size = 8;
const total = 6;

const Ranking = () => {
    const [ranking, setRanking] = useState([]);
    const [page, setPage] = useState(0);
    const [visible, setVisible] = useState(true);

    const prevRankRef = useRef([]);

    useEffect(() => {
        const fetchRanking = async () => {
            const res = await fetch("/api/ranking", { credentials: "include" });

            if (!res.ok) {
                console.error("fetch went wrong");
                return
            }

            const data = await res.json();

            prevRankRef.current = ranking;
            setRanking(data.users.slice(0, 48));
        }

        fetchRanking();
    }, [])

    const pageData = ranking.slice(page * page_size, (page + 1) * page_size);

    const getMov = (userId, currentIndex) => {
        const prevIndex = prevRankRef.current.findIndex(u => u.id === userId);

        if (prevIndex === -1) return "same"
        if (currentIndex > prevIndex) return "down"
        if (currentIndex < prevIndex) return "up"

        return "same"
    }

    const nextPage = () => {
        setVisible(false);

        setTimeout(() => {
            setPage(p => (p + 1) % total);
            setVisible(true);
        }, 300)
    }
    const prevPage = () => {
        setVisible(false);
        
        setTimeout(() => {
            setPage(p => (p - 1 + total) % total);
            setVisible(true);
        }, 300)
    }

    return (
        <section id="ranking">
            <div className="rank-title">
                <h1>TOP 48</h1>
                <p>Mierz wysoko i walcz o jak najlepsze wyniki</p>
            </div>
            <div className="rank-table">
                <div>
                    <button className="rank-prev" onClick={prevPage}></button>
                    <span className="rank-page">{page + 1} / {total}</span>
                    <button className="rank-next" onClick={nextPage}></button>
                </div>
                <table id="rankingTable">
                    <thead>
                        <tr>
                            <th></th>
                            <th>RANK</th>
                            <th>PAŃSTWO</th>
                            <th>UŻYTKOWNIK</th>
                            <th>PUNKTY</th>
                        </tr>
                    </thead>
                    <tbody style={{ opacity: visible ? 1 : 0, transition: "opacity .3s" }}>
                        {pageData.map((user, index) => {
                            const realIndex = page * page_size + index;

                            return (
                                <RankingRow key={user._id} rank={realIndex + 1} user={user} mov={getMov(user._id, realIndex)}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Ranking