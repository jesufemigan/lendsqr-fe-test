import Image from "next/image";
import moreIcon from "../../public/assets/icons/more.svg";
import viewUserIcon from "../../public/assets/icons/viewUser.svg";
import blacklistIcon from "../../public/assets/icons/blacklistUser.svg";
import activateIcon from "../../public/assets/icons/activateUser.svg";

import { useState } from "react";
import { useRouter } from "next/router";

import style from "../../styles/components/UserRowDetails.module.scss";
import { useHandleOutsideClick } from "../../hooks/handleOutsideClick";

interface IUserRowDetails {
  organizationName: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
  id: number;
}

const UserRowDetails: React.FC<IUserRowDetails> = ({
  organizationName,
  fullName,
  emailAddress,
  phoneNumber,
  dateJoined,
  status,
  id,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const closeMoreDetailsDropDown = () => {
    setShowDetails(false);
  };
  const ref = useHandleOutsideClick(closeMoreDetailsDropDown);

  const router = useRouter();
  return (
    <div
      className={style.row}
      onClick={() => {
        router.push(`/users/${id}`);
      }}
    >
      <p>{organizationName}</p>
      <p>{fullName}</p>
      <p>{emailAddress}</p>
      <p>{phoneNumber}</p>
      <p>{dateJoined}</p>

      <span>
        <p
          className={
            status === "active"
              ? style.active
              : status === "pending"
              ? style.pending
              : status === "inactive"
              ? style.inactive
              : style.blacklisted
          }
        >
          {status}
        </p>
        <Image
          src={moreIcon}
          alt="more"
          onClick={() => setShowDetails(true)}
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
