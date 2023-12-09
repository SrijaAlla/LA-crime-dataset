import React from "react";
import axios from "axios";
import { useState } from "react";
import { model_fields } from "./model_fields.js";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Model5 = () => {
  // TODO: change URL
  const url = "http://localhost:5000/naivebayes";
  const [data, setData] = useState({
    area: "",
    premiscd: "",
    weaponused: "",
    part12: "",
    crimetype: "",
    hour: "",
    victage: "",
  });
  const [result, setResult] = useState("");

  function submit(e) {
    e.preventDefault();
    try {
      axios
        .post(url, {
          AREA: data.area,
          "Premis Cd": data.premiscd,
          "Weapon Used Cd": data.weaponused,
          "Part 1-2": data.part12,
          crime_type: data.crimetype,
          hour: data.hour,
          "Vict Age": data.victage,
        })
        .then((res) => {
          console.log(res.data);
          setResult(res.data.prediction);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log("Error in API call", e);
    }
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    setResult("");
    console.log(newdata);
  }
  const model_info = JSON.parse(JSON.stringify(model_fields["model5"]));

  return (
    <div>
      <h1 className="main-heading">{model_info.name}</h1>
      <div className="model-content">
        <h2 className="model-desc">{model_info.description}</h2>

        <form className="form model lr" onSubmit={(e) => submit(e)}>
          {model_info.fields.map((field) => {
            return (
              <label>
                <div className="label-text">
                  <p>{field.label}</p>
                  <Tooltip title={field.field_desc} placement="right">
                    <InfoOutlinedIcon />
                  </Tooltip>
                </div>
                {field.type !== "dropdown" && (
                  <input
                    id={field.id}
                    placeholder={field.label}
                    type={field.type}
                    onChange={(e) => handle(e)}
                    required
                  ></input>
                )}
                {field.type === "dropdown" && (
                  <select
                    id={field.id}
                    disabled={!field.options.length}
                    placeholder="random"
                    required
                    // value={breed}
                    onChange={(e) => handle(e)}
                  >
                    <option value="" />
                    {field.options.map((option) => (
                      <option value={option[1]}>{option[0]}</option>
                    ))}
                  </select>
                )}
              </label>
            );
          })}

          <button className="submit">Submit</button>
        </form>

        <div className="result">
          <div className="result">
            <div>
              {/* {result ? ( */}
              <div>
                {result === 1 && (
                  <div>
                    <h2>Prediction</h2>
                    <span>
                      The crime is predicted to involve{"  "}
                      <strong>{"Theft"}</strong>
                    </span>
                  </div>
                )}

                {result === 0 && (
                  <div>
                    <h2>Prediction</h2>
                    <span>
                      The crime is predicted to be{"  "}
                      <strong>{"Not "}</strong>
                      involve <strong>{"Theft"}</strong>
                    </span>
                  </div>
                )}
                {result === "" && <div></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model5;
