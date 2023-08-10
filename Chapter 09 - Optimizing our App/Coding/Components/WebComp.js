import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import food from "../Images/burger-image.png";
import { TodoItem } from "simpleheader1.0";

const WebComp = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="about-container">
        <div className="about-left">
        <todo-item>Welcome to
The world of
Tasty & Fresh Food</todo-item>
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Food<span>Fire</span> healthy
            meal"
          </h4>
          <math-field>f(x)=</math-field>
          <todo-item>Welcome to
The world of
Tasty & Fresh Food</todo-item>
          {/* <script src="https://unpkg.com/mathlive"></script> */}
        </div>
        <div className="about-right">
          <img src={food} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default WebComp;
