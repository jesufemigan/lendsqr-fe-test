import UsersDetailsCard from "../../components/AllUsersDetailsCard/AllUsersDetailsCard";

import usersIcon from "../../public/assets/icons/user-group.svg";
import userGroupIcon from "../../public/assets/icons/active-users.svg";
import userLoanIcon from "../../public/assets/icons/user-loan.svg";
import userSavingsIcon from "../../public/assets/icons/user-saving.svg";

import style from "../../styles/pages/Users.module.scss";
import UsersTable from "../../components/UsersTable/UsersTable";

const index = () => {
  return (
    <div className={style.content}>
      <p className={style.heading}>Users</p>

      <div className={style.cardHeading}>
        <UsersDetailsCard
          icon={usersIcon}
          cardTitle="Users"
          value={2453}
          bgColor="rgba(223,24,255,0.1)"
        />
        <UsersDetailsCard
          icon={userGroupIcon}
          cardTitle="Active Users"
          value={2453}
          bgColor="rgba(87,24,255,0.1)"
        />
        <UsersDetailsCard
          icon={userLoanIcon}
          cardTitle="Users with loan"
          value={12453}
          bgColor="rgba(245,95,68,0.1)"
        />
        <UsersDetailsCard
          icon={userSavingsIcon}
          cardTitle="Users with Savings"
          value={102453}
          bgColor="rgba(255,51,102,0.1)"
        />
      </div>

      <UsersTable />
    </div>
  );
};
export default index;
