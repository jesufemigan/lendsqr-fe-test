import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import backIcon from "../../public/assets/icons/goBack.svg";
import ratedIcon from "../../public/assets/icons/rated.svg";
import unratedIcon from "../../public/assets/icons/unrated.svg";
import userPhoto from "../../public/assets/icons/mockUserPhoto.svg";

import style from "../../styles/pages/UserDetails.module.scss";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";
import Link from "next/link";
import { generateRandomCharacters } from "../../utils/idGenerator";

import { loadUsers } from "utils/fetchUsers";

const ShowUser = () => {
  const router = useRouter();
  const { id } = router.query;
  const [userDetails, setUserDetails] = useState<{ [key: string]: any }>({});

  const fetchUserDetails = async (unique: any) => {
    const response = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${unique}`
    );
    const data = response.json();

    localStorage.setItem("userDetails", JSON.stringify(data));
    setUserDetails(data);
  };

  useEffect(() => {
    async function fetchUser() {
      const userData = JSON.parse(localStorage.getItem(`user-${id}`) as string);

      if (userData) {
        setUserDetails(userData);
      } else {
        const res = await fetch(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
        );
        const data = await res.json();
        setUserDetails(data);
        localStorage.setItem(`user-${id}`, JSON.stringify(data));
      }
    }
    fetchUser();
    // const data = localStorage.getItem("userDetails");

    // if (data) {
    //   setUserDetails(JSON.parse(data));
    // } else {
    //   fetchUserDetails(id);
    // }
  }, [id]);

  function isEmptyObject(obj: any) {
    return JSON.stringify(obj) === "{}";
  }

  if (isEmptyObject(userDetails)) {
    return <div>Loading...</div>;
  }
  console.log(userDetails);

  const personalInformation = [
    {
      title: "Full Name",
      info: userDetails.profile.firstName + " " + userDetails.profile.lastName,
    },
    {
      title: "Phone Number",
      info: userDetails.profile.phoneNumber,
    },
    {
      title: "Email Address",
      info: userDetails.email,
    },
    {
      title: "BVN",
      info: userDetails.profile.bvn,
    },
    {
      title: "Gender",
      info: userDetails.profile.gender,
    },
  ];

  const educationInformation = [
    {
      title: "Level of Education",
      info: userDetails.education.level,
    },
    {
      title: "Employment Status",
      info: userDetails.education.employmentStatus,
    },
    {
      title: "Sector of Employment",
      info: userDetails.education.sector,
    },
    {
      title: "Duration of Employment",
      info: userDetails.education.duration,
    },
    {
      title: "Office Email",
      info: userDetails.education.officeEmail,
    },
    {
      title: "Monthly Income",
      info: `${userDetails.education.monthlyIncome[1]} - ${userDetails.education.monthlyIncome[0]}`,
    },
    {
      title: "Loan Repayment",
      info: userDetails.education.loanRepayment,
    },
  ];

  const socialInformation = [
    {
      title: "Twitter",
      info: userDetails.socials.twitter,
    },
    {
      title: "Facebook",
      info: userDetails.socials.facebook,
    },
    {
      title: "Instagram",
      info: userDetails.socials.instagram,
    },
  ];

  const guarantorInformation = [
    {
      title: "Full Name",
      info:
        userDetails.guarantor.firstName + " " + userDetails.guarantor.lastName,
    },
    {
      title: "Phone Number",
      info: userDetails.guarantor.phoneNumber,
    },
    {
      title: "Address",
      info: userDetails.guarantor.address,
    },
  ];

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
              <Image
                src={userDetails.profile.avatar.toString()}
                alt="user"
                width={50}
                height={50}
              />
            </div>
            <div className={style.name}>
              <h1>
                {userDetails.profile.firstName +
                  " " +
                  userDetails.profile.lastName}
              </h1>
              <p>sos031929ew</p>
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
            <h1>&#8358; {userDetails.accountBalance}</h1>
            <p>{userDetails.accountNumber}/Providus Bank</p>
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
          userDetailsArray={personalInformation}
        />
        <UserInfoCard
          heading="Education and Employment"
          userDetailsArray={educationInformation}
        />
        <UserInfoCard heading="Social" userDetailsArray={socialInformation} />
        <UserInfoCard
          heading="Guarantor"
          userDetailsArray={guarantorInformation}
        />
      </div>
    </div>
  );
};

// export const getStaticProps = async (context: any) => {
//   // const res = await fetch(
//   //   `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${context.params.id}`
//   // );

//   const userDetails = await loadUsers(context.params.id);

//   // console.log(typeof userDetails)

//   return {
//     props: {
//       userDetails,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   // const res = await fetch(
//   //   `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
//   // );

//   // const users = await res.json();
//   const users = Array.from({length: 100}, (_,i) => i+1)

//   // const ids = users.map((user: any) => user.id);

//   const paths = users.map((id: any) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// };

export default ShowUser;
