import React from "react";
import image1 from "./images/common_area.png";
import image2 from "./images/common_crmcd_by_gender.png";
import image3 from "./images/crime_codes_female_victims.png";
import image4 from "./images/crime_codes_male_victims.png";
import image5 from "./images/crime_count_over_years.png";
import image6 from "./images/crime_dist_time.png";
import image7 from "./images/hist_vict_ages.png";
import image8 from "./images/top_10_crime_codes.png";
import image9 from "./images/victim_race_pie.png";

// var bubble_chart = require('../bubble_chart_with_map.html');

function EDA() {
  return (
    <div className="eda">
      EDA
      <div className="bubble-map">
        <iframe title="Bubble Chart" src="bubble_chart_with_map.html"></iframe>
      </div>
      <div>
        <ul>
          <li>
            <img src={image1}></img>
          </li>
          <li>
            <img src={image2}></img>
          </li>
          <li>
            <img src={image3}></img>
          </li>
          <li>
            <img src={image4}></img>
          </li>
          <li>
            <img src={image5}></img>
          </li>
          <li>
            <img src={image6}></img>
          </li>
          <li>
            <img src={image7}></img>
          </li>
          <li>
            <img src={image8}></img>
          </li>
          <li>
            <img src={image9}></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EDA;
