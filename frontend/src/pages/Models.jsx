import React, { useState } from "react";

import Model1 from "../models/Model1";
import Model2 from "../models/Model2";
import Model3 from "../models/Model3";
import Model4 from "../models/Model4";
import Model5 from "../models/Model5";

const Models = () => {
  const [model, setModel] = useState(1);

  const changeModel = (e) => {
    setModel(e.target.value);
    console.log("rohan ");
  };

  return (
    <div className="home">
      <div className="side">
        <div>
          <h1 className="side-heading">Select a model</h1>
          <form className="form">
            <label>
              <input
                type="radio"
                name="model"
                value="1"
                onChange={changeModel}
                defaultChecked
              />
              Logistic Regression
            </label>
            <label>
              <input
                type="radio"
                name="model"
                value="2"
                onChange={changeModel}
              />
              K nearest neighbours
            </label>
            <label>
              <input
                type="radio"
                name="model"
                value="3"
                onChange={changeModel}
              />
              Decision tree classifier
            </label>
            <label>
              <input
                type="radio"
                name="model"
                value="4"
                onChange={changeModel}
              />
              Random Forest Classifier
            </label>
            <label>
              <input
                type="radio"
                name="model"
                value="5"
                onChange={changeModel}
              />
              Naive Bayes Classification
            </label>
          </form>
        </div>
      </div>

      <div className="main">
        {
          {
            1: <Model1 />,
            2: <Model2 />,
            3: <Model3 />,
            4: <Model4 />,
            5: <Model5 />,
          }[model]
        }
      </div>
    </div>
  );
};

export default Models;
