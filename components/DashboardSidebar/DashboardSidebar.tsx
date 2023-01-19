import Image from "next/image";
import SidebarLink from "../SidebarLink/SidebarLink";
import { sidebarLinkData } from "./sidebarLinkData";

import arrowDown from "../../public/assets/icons/down.svg";
import organization from "../../public/assets/icons/briefcase 1.svg";
import homeIcon from "../../public/assets/icons/home 1.svg";

import style from "../../styles/components/DashboardSidebar.module.scss";

const DashboardSidebar: React.FC<{ showSidebar: boolean }> = ({
  showSidebar,
}) => {
  return (
    <div
      className={`${style.container} ${showSidebar ? style.showSidebar : ""}`}
    >
      <span className={style.switch}>
        <SidebarLink
          name="Switch organization"
          image={organization}
          exclusive
        />
        <Image src={arrowDown} alt="down" />
      </span>

      <SidebarLink name="Dashboard" image={homeIcon} exclusive />

      <div className={style.dashboardLinkContainer}>
        {sidebarLinkData.map((data) => (
          <span key={data.id}>
            <p className={style.heading}>{data.content.name}</p>
            <div className={style.allLinks}>
              {data.content.subContent.map((link) => (
                <SidebarLink
                  key={link.name}
                  name={link.name}
                  image={link.icon}
                />
              ))}
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};
export default DashboardSidebar;
