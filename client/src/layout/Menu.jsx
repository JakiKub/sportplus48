import { useEffect } from "react"

const Menu = ({ isOpen, onClose, navigate, user, openLogin, openRegister }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
    }, [isOpen]);

    //if (!isOpen) return null

    const handleNavigate = (path) => {
        navigate(path);
        onClose();
    } 

    return (
        <div id="menu" className={isOpen ? "open" : ""}>
            <button onClick={onClose}></button>
            <img src="/content/mobile/menu/menu_logo.png"/>
            <div className="menu-list">
                <a onClick={() => handleNavigate("/")}>Strona główna</a>
                <a onClick={() => handleNavigate("/onas")}>O nas</a>
                <a onClick={() => handleNavigate("/events/arena")}>Arena 48</a>
                <a onClick={() => handleNavigate("/events/sc")}>48 Sport Challenge</a>
                <a onClick={() => window.alert("still under construction")}>Bieg</a>
                <a onClick={() => handleNavigate("/panstwa")}>Państwa</a>
                <a onClick={() => handleNavigate("/kontakt")}>Kontakt</a>
                <a onClick={() => handleNavigate("/")}>Społeczność</a>
                <a onClick={() => window.open("https://discord.gg/6WeJ7xjSav")}>Podcast</a>
                <a onClick={() => handleNavigate("/polityka-prywatnosci")}>Polityka prywatności</a>
            </div>
            <div className="menu-bttns">
                <button onClick={openLogin}>ZALOGUJ SIĘ</button>
                <button onClick={openRegister}>ZAREJESTRUJ SIĘ</button>
            </div>
        </div>
    )
}

export default Menu