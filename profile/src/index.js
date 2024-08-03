import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Avatar, Intro, SkillSet } from "./profile/app";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillSet />
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
