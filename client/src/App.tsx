import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes, { RouteType } from "./routes";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

import LightTheme from "./assets/theme/light";
import DarkTheme from "./assets/theme/dark";

function App() {
  const [theme, setTheme] = useState(LightTheme);
  const getRoutes = (allRoutes: Array<RouteType>) =>
    allRoutes.map((route: RouteType) => {
      return route.route && <Route path={route.route} element={route.component} key={route.key} />;
    });

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((theme) => (theme.id === "light" ? DarkTheme : LightTheme));
        }
      }}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
