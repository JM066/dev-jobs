import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="Home">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Home></Home>
      </Switch>
    </div>
  );
}

export default App;
