import { useDataNews } from "./hooks/useDataNews";
import { Board } from "../../components/Board/Board";
import HeaderBoard from "../../assets/img/board-images/board-title.png";
import "./Board.style.css";

const BoardContainer = () => {
  const {
    framework,
    onFrameWorkChange,
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
        onFrameworkChange={onFrameWorkChange}
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
        <span className="nav-bar-title">HACKER NEWS</span>
      </div>
    </div>
  );
};

export default BoardContainer;
