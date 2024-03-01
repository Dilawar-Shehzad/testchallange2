import { useEffect } from "react";
import "./App.css";
import TestScreen from "./screen/MainTestScreen";
import { useDispatch } from "react-redux";
import { mainJsonFuntion } from "./redux/actions/Actions";
import { dummyJson } from "./extras/dummyData";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mainJsonFuntion(dummyJson));
  }, []);

  return (
    <div className="App">
      <TestScreen />
    </div>
  );
}

export default App;
