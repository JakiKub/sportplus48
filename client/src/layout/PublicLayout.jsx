import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useRef } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const PublicLayout = ({ user, openLogin, openRegister }) => {
    console.log("PUBLIC LAYOUT");
  //return <Outlet />;

    const location = useLocation()
    const nodeRef = useRef(null);

    return (
        <div className="layout layout-public">
            <Navbar user={user} openLogin={openLogin} openRegister={openRegister}/>

            {/* <main className="page"> */}
                <SwitchTransition mode="out-in">
                    <CSSTransition key={location.pathname} timeout={300} classNames="fade" unmountOnExit nodeRef={nodeRef}>
                        <main className="page" ref={nodeRef}>
                            <Outlet />
                        </main>
                    </CSSTransition>
                </SwitchTransition>
            {/* </main> */}
            
            <Footer/>
        </div>
    )
}

export default PublicLayout