import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import search from "../../public/assets/icons/search.svg";
import notification from "../../public/assets/icons/notification.svg";
import arrowDown from "../../public/assets/icons/down.svg";

import style from "../../styles/components/DashboardHeader.module.scss";
import { SetStateAction } from "react";

const DashboardHeader: React.FC<{
  sidebarHandler: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ sidebarHandler }) => {
  return (
    <header className={style.header}>
      <Image
        src={logo}
        alt="logo"
        onClick={() => sidebarHandler((prev) => !prev)}
      />
      <div className={style.search}>
        <input type="text" name="" id="" placeholder="Search for anything" />
        <span>
          <Image src={search} alt="search" />
        </span>
      </div>

      <div className={style.profile}>
        <p>Docs</p>
        <Image src={notification} alt="notification" />
        <span>
          <Image
            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg"
            width={50}
            height={50}
            alt="user-image"
          />
          <span>
            <p>Adedeji</p>
            <Image src={arrowDown} alt="down" />
          </span>
        </span>
      </div>
    </header>
  );
};
export default DashboardHeader;
