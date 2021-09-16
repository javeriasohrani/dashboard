import React from "react";
import "../Sidebar.css";
import SvgDashboard from "../../svg/Dashboard";
import SvgHelp from "../../svg/Help";
import SvgMessages from "../../svg/Messages";
import SvgPages from "../../svg/Pages";
import SvgRoles from "../../svg/Roles";
import SvgSettings from "../../svg/Settings";

export default function Sidebar() {
  return (
    <div className="SidebarMenu-wrap">
      <div className="Sidebar">
        <ul>
          <li><SvgDashboard/>
            <a href=""> Dashboard</a>
          </li>
          <li><SvgHelp/>
            <a href=""> Pages</a>
          </li>
          <li><SvgMessages/>
            <a href=""></a>
            Messages
          </li>
          <li><SvgPages/>
            <a href=""></a>
            Settings
          </li>
          <li><SvgRoles/>
            <a href=""></a>
            Roles
          </li>
        </ul>

        <ul>
          <li><SvgSettings/><a href=""></a>Help</li>
        </ul>
      </div>
    </div>
  );
}
