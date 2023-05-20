import Inicial from "./components/pages/inicial/Inicial";
import { Outlet } from "react-router-dom";
import "./styles/Global.css"

function App() {
 
  return (
    <div className="Main">
       <Inicial />
       <Outlet />
    </div>
  );
}

export default App;
