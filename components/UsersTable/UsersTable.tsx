import Image from "next/image";
import filterIcon from "../../public/assets/icons/filter.svg";

import style from "../../styles/components/UsersTable.module.scss";
import FilterMenu from "../FilterMenu/FilterMenu";
import UserRowDetails from "../UserRowDetails/UserRowDetails";

import { useState } from "react";

const UsersTable = () => {
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
          <UserRowDetails />
          <UserRowDetails />
          <UserRowDetails />
          <UserRowDetails />
          <UserRowDetails />
        </>
      </div>
    </div>
  );
};
export default UsersTable;
