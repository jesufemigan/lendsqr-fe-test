import Image from "next/image";

import leftIcon from "../../public/assets/icons/left.svg";
import rightIcon from "../../public/assets/icons/right.svg";

import style from "../../styles/components/Pagination.module.scss";

import { usePagination, DOTS } from "../../hooks/usePagination";

const Pagination = () => {
  const paginationRange = usePagination({
    currentPage: 2,
    totalCount: 500,
    siblingCount: 1,
    pageSize: 10,
  });

  return (
    <div className={style.container}>
      <span className={style.showing}>
        <p>Showing</p>
        <select name="" id="">
          <option value="">100</option>
          <option value="">200</option>
          <option value="">300</option>
          <option value="">400</option>
          <option value="">500</option>
        </select>
        <p>out of 100</p>
      </span>

      <div className={style.pagesCta}>
        <div className={style.arrowBtn}>
          <Image src={leftIcon} alt="left" />
        </div>
        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <span key={index}>&#8230;</span>;
          }

          return (
            <span key={index} className={style.number}>
              {pageNumber}
            </span>
          );
        })}
        {/* <div>

        </div> */}

        <div className={style.arrowBtn}>
          <Image src={rightIcon} alt="right" />
        </div>
      </div>
    </div>
  );
};
export default Pagination;
