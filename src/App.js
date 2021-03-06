import "./App.css";
import HomePage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";

// This is a test just to see how git commits work in VS CODE

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
