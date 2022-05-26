import React from "react";
import "./Board.style.css";
import { useDataNews } from "./hooks/useDataNews";

const Board = () => {
  const {
    framework,
    setFramework,
    pageNumber,
    setPageNumber,
    isLoading,
    newsData,
  } = useDataNews();

  return (
    <div>
      <NavBarBoard />
    </div>
  );
};

const NavBarBoard = () => {
  return (
    <div>
      <div className="nav-bar">
        <span className="nav-bar-title">Hacker News</span>
      </div>
    </div>
  );
};

export default Board;
