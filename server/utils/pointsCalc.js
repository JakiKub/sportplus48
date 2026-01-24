function pointsCalc(activity, distance, timeInMins) {
    let points = 0;

    switch (activity) {
        case "Bieganie":
        points = distance * 2;
        break;

        case "Chodzenie":
        points = distance * 1;
        break;
        
        case "Jazda na rowerze":
        points = distance * 0.5;
        break;

        case "Jazda na rolkach":
        points = distance * 1.5;
        break;
        
        case "Jazda na hulajnodze":
        points = distance * 1;
        break;

        case "Pływanie":
        points = distance * 5;
        break;

        case "Kajakarstwo":
        points = distance * 2.5;
        break;

        case "Wioślarstwo":
        points = distance * 2.5;
        break;

        case "Bieg narciarski":
        points = distance * 2.5;
        break;

        case "Jazda na deskorolce":
        points = distance * 1.5;
        break;

        case "kalistenika":
        points = timeInMins * (6 / 60);
        break;

        case "Siłownia":
        points = timeInMins * (6 / 60);
        break;

        case "Fitness":
        points = timeInMins * (8 / 60);
        break;

        case "Crossfit":
        points = timeInMins * (8 / 60);
        break;

        case "Aerobik":
        points = timeInMins * (7 / 60);
        break;

        case "Zumba":
        points = timeInMins * (7 / 60);
        break;

        case "Joga":
        points = timeInMins * (4 / 60);
        break;

        case "Rozciąganie":
        points = timeInMins * (4 / 60);
        break;

        case "Taniec":
        points = timeInMins * (6 / 60);
        break;

        case "Sztuki walki":
        points = timeInMins * (8 / 60);
        break;

        case "Gimnastyka sportowa":
        points = timeInMins * (7 / 60);
        break;

        case "Piłka nożna":
        points = timeInMins * (6 / 60);
        break;

        case "Koszykówka":
        points = timeInMins * (6 / 60);
        break;

        case "Siatkówka":
        points = timeInMins * (5.5 / 60);
        break;

        case "Piłka ręczna":
        points = timeInMins * (6 / 60);
        break;

        case "Hokej":
        points = timeInMins * (6.5 / 60);
        break;

        case "Hokej na lodzie":
        points = timeInMins * (6.5 / 60);
        break;

        case "Rugby":
        points = timeInMins * (6.5 / 60);
        break;

        case "Unihokej":
        points = timeInMins * (6 / 60);
        break;

        case "Tenis":
        points = timeInMins * (6.25 / 60);
        break;

        case "Squash":
        points = timeInMins * (6.25 / 60);
        break;

        case "Padel":
        points = timeInMins * (6.25 / 60);
        break;

        case "Badminton":
        points = timeInMins * (6.25 / 60);
        break;

        case "Wspinaczka":
        points = timeInMins * (6.5 / 60);
        break;

        case "Skakanka":
        points = timeInMins * (6 / 60);
        break;

        case "Łyżwiarstwo":
        points = timeInMins * (6 / 60);
        break;

        case "Parkour":
        points = timeInMins * (6.25 / 60);
        break;

        case "Freerun":
        points = timeInMins * (6.25 / 60);
        break;

        default:
        points = 0;
    }

    return Number(points.toFixed(3))
}

module.exports = { pointsCalc };