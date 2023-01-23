import Image from "next/image";
import filterIcon from "../../public/assets/icons/filter.svg";

import style from "../../styles/components/UsersTable.module.scss";
import FilterMenu from "../FilterMenu/FilterMenu";
import UserRowDetails from "../UserRowDetails/UserRowDetails";

import { useMemo, useState } from "react";

const UsersTable = ({ users }: { users: any[] }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className={style.wrapper}>
      <div className={style.table}>
        <div className={style.row}>
          <div>
            <span>
              <p>Organization</p>
              <Image
                src={filterIcon}
                alt="filter"
                onClick={() => setShowFilter((prev) => !prev)}
              />
            </span>
          </div>
          <div>
            <span>
              <p>username</p>
              <Image
                src={filterIcon}
                alt="filter"
                onClick={() => setShowFilter((prev) => !prev)}
              />
            </span>
          </div>
          <div>
            <span>
              <p>Email</p>
              <Image
                src={filterIcon}
                alt="filter"
                onClick={() => setShowFilter((prev) => !prev)}
              />
            </span>
          </div>
          <div>
            <span>
              <p>Phone Number</p>
              <Image
                src={filterIcon}
                alt="filter"
                onClick={() => setShowFilter((prev) => !prev)}
              />
            </span>
          </div>
          <div>
            <span>
              <p>Date Joined</p>
              <Image
                src={filterIcon}
                alt="filter"
                onClick={() => setShowFilter((prev) => !prev)}
              />
            </span>
          </div>
          <div>
            <span>
              <p>Status</p>
              <Image
                src={filterIcon}
                alt="filter"
                onClick={() => setShowFilter((prev) => !prev)}
              />
            </span>
          </div>
          <div className={showFilter ? style.filterMenu : style.hideFilter}>
            <FilterMenu />
          </div>
        </div>

        <>
          {users.map((user) => (
            <UserRowDetails
              key={user.id}
              organizationName={user.orgName}
              fullName={user.profile.firstName + " " + user.profile.lastName}
              emailAddress={user.email}
              phoneNumber={user.phoneNumber.slice(7, -1)}
              dateJoined={"20th"}
              status={"active"}
            />
          ))}
        </>
      </div>
    </div>
  );
};
export default UsersTable;
