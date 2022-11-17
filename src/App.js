import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home'
import DynamicPage from "./Pages/DynamicPage";
import Header from "./Components/Header";


function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:slug" component={DynamicPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
