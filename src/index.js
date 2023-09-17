import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Page from "./page";

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

root.render(<Page />);