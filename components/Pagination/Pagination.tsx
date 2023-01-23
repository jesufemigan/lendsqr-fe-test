import Image from "next/image";

import leftIcon from "../../public/assets/icons/left.svg";
import rightIcon from "../../public/assets/icons/right.svg";

import style from "../../styles/components/Pagination.module.scss";

import { usePagination, DOTS } from "../../hooks/usePagination";
import { Dispatch, SetStateAction } from "react";

interface IPagination {
  currentPage: number;
  totalCount: number;
  siblingCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<IPagination> = ({
  currentPage,
  totalCount,
  siblingCount,
  pageSize,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange![paginationRange!.length - 1];

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
        <div
          className={`${style.arrowBtn} ${
            currentPage === 1 ? style.disable : ""
          }`}
          onClick={onPrevious}
        >
          <Image src={leftIcon} alt="left" />
        </div>
        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <span key={index}>&#8230;</span>;
          }

          return (
            <span
              key={index}
              className={`${style.number} ${
                pageNumber === currentPage ? style.current : ""
              }`}
              onClick={() => onPageChange(Number(pageNumber))}
            >
              {pageNumber}
            </span>
          );
        })}

        <div
          className={`${style.arrowBtn} ${
            currentPage === lastPage ? style.disable : ""
          }`}
          onClick={onNext}
        >
          <Image src={rightIcon} alt="right" />
        </div>
      </div>
    </div>
  );
};
export default Pagination;
