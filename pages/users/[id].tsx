import Image from "next/image";
import { useRouter } from "next/router";

import backIcon from "../../public/assets/icons/goBack.svg";
import ratedIcon from "../../public/assets/icons/rated.svg";
import unratedIcon from "../../public/assets/icons/unrated.svg";
import userPhoto from "../../public/assets/icons/mockUserPhoto.svg";

import style from "../../styles/pages/UserDetails.module.scss";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";
import Link from "next/link";

const ShowUser = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Link href={"/users"}>
        <div className={style.back}>
          <Image alt="back" src={backIcon} />
          <p>Back to Users</p>
        </div>
      </Link>

      <div className={style.ctaHeading}>
        <p>User Details</p>
        <span>
          <button className={style.blacklistBtn}>Blacklist User</button>
          <button className={style.activateBtn}>Activate User</button>
        </span>
      </div>

      <div className={style.sectionOne}>
        <div className={style.userProfileSection}>
          <span className={style.userPhoto}>
            <div className={style.display}>
              <Image src={userPhoto} alt="user" />
            </div>
            <div className={style.name}>
              <h1>Grace Effiom</h1>
              <p>LSQFf5hgyi</p>
            </div>
          </span>
          <span className={style.userTier}>
            <p>User`s Tier</p>
            <span>
              <Image src={ratedIcon} alt="rated" />
              <Image src={unratedIcon} alt="not rated" />
              <Image src={unratedIcon} alt="not rated" />
            </span>
          </span>
          <span className={style.userAccount}>
            <h1>&#8358; 200,000.00</h1>
            <p>99329133322/Providus Bank</p>
          </span>
        </div>
        <div className={style.userLinks}>
          <p>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>

      <div className={style.userInfoContainer}>
        <UserInfoCard
          heading="Personal Information"
          userDetailsArray={[
            {
              title: "Full Name",
              info: "Grace Effon",
            },
            {
              title: "Phone Number",
              info: "07060780922",
            },
            {
              title: "Email Address",
              info: "grace@gmail.com",
            },
            {
              title: "BVN",
              info: "0702939499932",
            },
            {
              title: "Gender",
              info: "Female",
            },
            {
              title: "Marital Status",
              info: "Single",
            },
          ]}
        />
        <UserInfoCard
          heading="Personal Information"
          userDetailsArray={[
            {
              title: "Full Name",
              info: "Grace Effon",
            },
            {
              title: "Phone Number",
              info: "07060780922",
            },
            {
              title: "Email Address",
              info: "grace@gmail.com",
            },
            {
              title: "BVN",
              info: "0702939499932",
            },
            {
              title: "Gender",
              info: "Female",
            },
            {
              title: "Marital Status",
              info: "Single",
            },
            {
              title: "Children",
              info: "None",
            },
            {
              title: "type of residence",
              info: "Parnet residence",
            },
            {
              title: "Hello",
              info: "sdjsjdjdj",
            },
          ]}
        />
      </div>
    </div>
  );
};
export default ShowUser;
