import React, { useContext } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings ,ExitToApp} from "@material-ui/icons";
import { UserContext } from "../../Context/UsersContext/UsersContext";
import { useNavigate } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
function Topbar() {
  
  const navigate = useNavigate();

  function handleLogout() {

    localStorage.removeItem("user");
    navigate('/login');
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">The-Stream-Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <button onClick={handleLogout}>
         <ExitToApp/>
            </button>
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
