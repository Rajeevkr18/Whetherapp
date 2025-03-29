import React from "react";
import "../styles/styles.css";

const ThemeToggle = ({ toggleTheme }) => {
  return <button className="theme-toggle" onClick={toggleTheme}>🌙/☀️</button>;
};

export default ThemeToggle;


 