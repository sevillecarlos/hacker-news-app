import { Dispatch, SetStateAction, useState } from "react";
import "./Pagination.style.css"
export const Pagination = ({
  pageNumber,
  onPageNumberChange,
}: PaginationProps): JSX.Element => {
  const paginationPagesDefault: number[] = Array.from(
    { length: 9 },
    (_, i) => i + 1
  );
  return (
    <div>
      {paginationPagesDefault.map((pageCount) => (
        <button
          className={pageNumber === pageCount ? "active-page-number" : ""}
          onClick={() => onPageNumberChange(pageCount)}
        >
          {pageCount}
        </button>
      ))}
    </div>
  );
};

interface PaginationProps {
  pageNumber: number;
  onPageNumberChange: Dispatch<SetStateAction<number>>;
}
