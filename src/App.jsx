import "./App.css";
import LeftSide from "./Components/LeftSide/LeftSide";
import MiddleSide from "./Components/MiddleSide/MiddleSide";
import RightSide from "./Components/RightSide/RightSide";
function App() {
  return (
    <div className="instagramClone">
      <div className="leftSidemain">
        <LeftSide />
      </div>
      <div className="middleSidemain">
        <MiddleSide />
      </div>
      <div className="rightSidemain">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
