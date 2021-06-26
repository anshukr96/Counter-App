import "./App.css";
import { Counter } from "./containers/Counter/Counter";

function App() {
  return (
    <div className="App">
      <Counter type="numeric" value={0} />
    </div>
  );
}

export default App;
