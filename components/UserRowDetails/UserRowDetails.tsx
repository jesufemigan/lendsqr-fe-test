import Image from "next/image";
import moreIcon from "../../public/assets/icons/more.svg";
import viewUserIcon from "../../public/assets/icons/viewUser.svg";
import blacklistIcon from "../../public/assets/icons/blacklistUser.svg";
import activateIcon from "../../public/assets/icons/activateUser.svg";

import { useState } from "react";

import style from "../../styles/components/UserRowDetails.module.scss";
import { useHandleOutsideClick } from "../../hooks/handleOutsideClick";

const UserRowDetails = () => {
  const [showDetails, setShowDetails] = useState(false);
  const closeMoreDetailsDropDown = () => {
    setShowDetails((prev) => !prev);
  };
  const ref = useHandleOutsideClick(closeMoreDetailsDropDown);
  return (
    <div className={style.row}>
      <p>Lendsqr</p>
      <p>Adedeji Kunle</p>
      <p>adedeji@gmail.com</p>
      <p>0810823222</p>
      <p>May 15,2020 10:00 AM</p>

      <span>
        <p className={style.blacklisted}>Inactive</p>
        <Image
          src={moreIcon}
          alt="more"
          onClick={() => closeMoreDetailsDropDown()}
          ref={ref}
        />
        <div className={showDetails ? style.moreDetails : style.hideDetails}>
          <span>
            <Image src={viewUserIcon} alt="view" />
            <p>View Details</p>
          </span>
          <span>
            <Image src={blacklistIcon} alt="blacklist" />
            <p>Blacklist User</p>
          </span>
          <span>
            <Image src={activateIcon} alt="activate" />
            <p>Activate User</p>
          </span>
        </div>
      </span>
    </div>
  );
};
export default UserRowDetails;
