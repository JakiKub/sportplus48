import MainJ from "./MainJ";
import MainD from "./MainD";
import MainT from "./MainT";

const Main = ({openLogin, openRegister}) => {

    return (
        <>
            <MainJ/>
            <MainD openLogin={openLogin} openRegister={openRegister}/>
            <MainT/>
        </>
    )
}

export default Main