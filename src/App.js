import React, { useContext } from "react";
import { Intro, About, ProductList, Contact } from "./pages";
import Toggle from "./toggle";
import { ThemeContext } from "./context";

export default function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}
