import { useDataNews } from "./hooks/useDataNews";
import { Board } from "../../components/Board/Board";
import "./Board.style.css";

const BoardContainer = () => {
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
      <Board
        framework={framework}
        onFrameworkChange={setFramework}
        pageNumber={pageNumber}
        onPageNumberChange={setPageNumber}
        loading={isLoading}
        newsData={newsData}
      />
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

export default BoardContainer;
