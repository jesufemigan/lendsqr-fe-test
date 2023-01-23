/* eslint-disable react-hooks/rules-of-hooks */
import UsersDetailsCard from "../../components/AllUsersDetailsCard/AllUsersDetailsCard";

import usersIcon from "../../public/assets/icons/user-group.svg";
import userGroupIcon from "../../public/assets/icons/active-users.svg";
import userLoanIcon from "../../public/assets/icons/user-loan.svg";
import userSavingsIcon from "../../public/assets/icons/user-saving.svg";

import style from "../../styles/pages/Users.module.scss";
import UsersTable from "../../components/UsersTable/UsersTable";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState, useMemo } from "react";

const index = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  let pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const currentUserData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, users]);

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

      <UsersTable users={currentUserData} />
      <Pagination
        currentPage={currentPage}
        totalCount={users.length}
        siblingCount={1}
        pageSize={pageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
};
export default index;
