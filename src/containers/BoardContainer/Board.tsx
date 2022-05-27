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
    saveNews,
    removeSaveNews,
    newsData,
    savedNewsData,
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
        saveNews={saveNews}
        removeSaveNews={removeSaveNews}
        newsData={newsData}
        savedNewsData={savedNewsData}
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
