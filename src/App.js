import { SkeletonTheme } from "react-loading-skeleton";
import Home from "./components/Home";

function App() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="bg-[#161616] h-screen flex justify-center items-center">
        <Home />
      </div>
    </SkeletonTheme>
  );
}

export default App;
