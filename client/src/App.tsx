import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes, { RouteType } from "./routes";

function App() {
  const getRoutes = (allRoutes: Array<RouteType>) =>
    allRoutes.map((route: RouteType) => {
      return route.route && <Route path={route.route} element={route.component} key={route.key} />;
    });
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
