const RankingRow = ({ rank, user, mov }) => {
    return (
        <tr className="ranking-row">
            <td className="movement">
                {mov === "up" && (<img src="/content/ranking/ranking_awans.png"/>)}
                {mov === "down" && (<img src="/content/ranking/ranking_spadek.png"/>)}
                {mov === "same" && (<img src="/content/ranking/ranking_rownowaga.png"/>)}
            </td>
            <td className="ranking-td">
                {rank}
            </td>
            <td className="country">
                {user.nationality || "-"}
            </td>
            <td className="username">
                {user.username}
            </td>
            <td className="points">
                {user.pointsAll.toFixed(3)}
            </td>
        </tr>
    )
}

export default RankingRow