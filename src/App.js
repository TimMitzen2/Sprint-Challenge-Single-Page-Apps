import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characterlist" component={CharacterList} />
      <Route path="/location" component={LocationsList} />
    </main>
  );
}
