import React from "react";
import ReactDOM from "react-dom";
import { Clock } from "./utils/Main";
import { HamMenu } from "./utils/Components/Hamburger/Ham";

var render = ReactDOM.render;
var root = document.querySelector("#root");

render(
  <>
    <Clock />
  </>,
  root
);
