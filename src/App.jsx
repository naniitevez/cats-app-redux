import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import CatsMural from "./components/CatsMural";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <CatsMural />
      </div>
    </Provider>
  );
}

export default App;
