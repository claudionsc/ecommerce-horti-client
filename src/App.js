import Inicial from "./components/pages/inicial/Inicial";
import { getTotals } from "./store";
import { useDispatch } from "react-redux";
import "./styles/Global.css"

function App() {
  const dispatch = useDispatch()
  dispatch(getTotals())
  return (
    <div className="Main">
       <Inicial />
    </div>
  );
}

export default App;
