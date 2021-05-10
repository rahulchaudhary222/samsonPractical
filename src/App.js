import "./App.css";
import HomePage from "./components/HomePage/homePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Favourties from "./components/Favourites/Favourties";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/favourties">
              <Favourties />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
