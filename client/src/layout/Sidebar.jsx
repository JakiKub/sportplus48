import { useNavigate } from "react-router-dom"

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate()

  return (
    <div id='sidebar'>
      <img src='/content/dashboard/dashboard_logo.png'/>
      <div className='sidebar-wrapper'>
        <div className='sidebar-seg'>
          <h2 className='sidebar-title'>GŁÓWNE</h2>
          <div className="sidebar-seg-2">
            <a className="sidebar-link" id='sidebarDsh' onClick={() => navigate("/dashboard")}>DASHBOARD</a>
            <a className="sidebar-link" id='sidebarHome' onClick={() => navigate("/")}>HOME</a>
          </div>
        </div>
        <div className="sidebar-seg">
          <h2 className="sidebar-title">TWOJA DROGA NA SZCZYT</h2>
          <div className="sidebar-seg-2">
            <a className="sidebar-link" id='sidebarActiv' onClick={() => navigate("/dashboard/activity")}>REGISTER ACTIVITY</a>
            <a className="sidebar-link" id='sidebarProg' onClick={() => navigate("/dashboard/progress")}>PROGRESS</a>
            <a className="sidebar-link" id='sidebarRec' onClick={() => navigate("/dashboard/records")}>RECORDS</a>
            <a className="sidebar-link" id='sidebarPoints' onClick={() => navigate("/dashboard/points")}>POINTS</a>
          </div>
        </div>
        <div className="sidebar-seg">
          <h2 className="sidebar-title">INNE</h2>
          <a className='sidebar-link' id='sidebarRank' onClick={() => window.alert("site under contruction")}>RANKING</a>
        </div>
      </div>

      <button className='sidebar-logout' onClick={onLogout}>WYLOGUJ SIĘ</button>
    </div>
  )
}

export default Sidebar