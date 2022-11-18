import { useSelector } from "react-redux";

import Home from "./Home";


function App() {
 
  const {c} = useSelector((state)=>state.custom)
  return (
    <div className="App">
    <Home/>
    <h2>{c}</h2>

    </div>
  );
}

export default App;
