const StatusIco = ({ status }) => {
    const icons = {
        pending: "/content/progress/progress_weryfikacja.png",
        approved: "/content/progress/progress_zaakceptowane.png",
        denied: "/content/progress/progress_odrzucone.png"
    }

    return <img src={icons[status]} alt={status}/>
}

export default StatusIco