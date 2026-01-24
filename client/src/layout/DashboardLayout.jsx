import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useRef } from "react";

import Sidebar from "../layout/Sidebar";
import UserProfile from "../layout/UserProfile";

const DashboardLayout = ({ user, onLogout }) => {
  const location = useLocation()
  const nodeRef = useRef(null);

  return (
    <div className="layout layout-dashboard">
      <Sidebar onLogout={onLogout} />

      <UserProfile user={user} />
      
      <main className="page">
        <Outlet/>
        {/* <SwitchTransition mode="out-in">
          <CSSTransition key={location.pathname} timeout={300} classNames="fade" unmountOnExit nodeRef={nodeRef}>
            <div className="page-content" ref={nodeRef}>
              <Outlet />
            </div>
          </CSSTransition>
        </SwitchTransition> */}
      </main>
    </div>
  )
};

export default DashboardLayout