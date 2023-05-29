import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";
import Menu from "./pages/menu";
import Game from "./pages/game";
const Lol = lazy(() => import("./pages/lol"));
const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Menu} />
      <Route path="/1v1" component={Lol} />
      <Route path="/motherload" component={Game} />
      <Route path="/learn" component={Game} />
      <Route path="/learn2" component={Game} />
      <Route path="/fancy" component={Game} />
      <Route path="/Mayhem" component={Game} />
    </Routes>
  );
};

export default App;
