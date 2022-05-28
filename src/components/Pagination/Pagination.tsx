import { Dispatch, SetStateAction, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import "./Pagination.style.css";

export const Pagination = ({
  pageNumber,
  onPageNumberChange,
}: PaginationProps): JSX.Element => {
  const ACTIVE_PAGE = "active-page-number";
  const [countPage, setCountPage] = useState(9);
  const [fadePageNumber, setFadePageNumber] = useState(1);

  const prevPage = () => {
    if (pageNumber !== 1) {
      onPageNumberChange(pageNumber - 1);
    }

    if (pageNumber >= 9) {
      setFadePageNumber(fadePageNumber - 1);
      setCountPage(countPage - 1);
    }
  };

  const nextPage = () => {
    if (pageNumber >= 9) {
      setCountPage(pageNumber + 1);
      setFadePageNumber(fadePageNumber + 1);
    }
    onPageNumberChange(pageNumber + 1);
  };

  const paginationPagesDefault = () =>
    Array.apply(null, Array(countPage - fadePageNumber + 1)).map(
      (_, n) => n + fadePageNumber
    );

  console.log("@@@@@@@@@@@@@@@", paginationPagesDefault());

  return (
    <div>
      <button onClick={prevPage}>
        <MdOutlineArrowBackIosNew />
      </button>
      {paginationPagesDefault().map((pageCount) => (
        <button
          className={pageNumber === pageCount ? ACTIVE_PAGE : ""}
          onClick={() => onPageNumberChange(pageCount)}
        >
          {pageCount}
        </button>
      ))}
      <button onClick={nextPage}>
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

interface PaginationProps {
  pageNumber: number;
  onPageNumberChange: Dispatch<SetStateAction<number>>;
}
