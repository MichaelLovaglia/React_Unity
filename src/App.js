import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import HomePage from "./components/HomePage/HomePage";
import BetaPage from "./components/BetaPage/BetaPage";
import DocsPage from "./components/DocsPage/DocsPage";
import { Switch, Route } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/beta" render={() => <BetaPage />} />
        <Route path="/docs" render={() => <DocsPage />} />
      </Switch>
      <Footer />
    </div>
  );
}
