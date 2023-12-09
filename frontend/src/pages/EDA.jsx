// code for EDA page

import React from "react";
import image1 from "./images/gender_pie_plot.png";
import image2 from "./images/common_area.png";
import image3 from "./images/common_crmcd_by_gender.png";
import image4 from "./images/crime_codes_female_victims.png";
import image5 from "./images/crime_codes_male_victims.png";
import image6 from "./images/crime_count_over_years.png";
import image7 from "./images/crime_dist_time.png";
import image8 from "./images/hist_vict_ages.png";
import image9 from "./images/top_10_crime_codes.png";
import image10 from "./images/victim_race_pie.png";

// var bubble_chart = require('../bubble_chart_with_map.html');

function EDA() {
  return (
    <div className="eda">
      <h1 className="side-heading">Exploratory Data Analysis</h1>

      <div className="bubble-map image">
        <span>
          The map below is a bubble chart in the real-world map, the blue
          circles represent the places (using Latitude, Longitude) in which the
          top 30 crimes are occurring.
        </span>
        <iframe title="Bubble Chart" src="bubble_chart_with_map.html"></iframe>
      </div>
      <div className="eda-images">
        <div className="image">
          <span>
            A pie chart showing the distribution of victim genders in the
            dataset. It counts the values in the “Vict Sex” column and shows
            that the victim gender is 51.1% male and 48.9% female.
          </span>
          <img src={image1} alt="missing"></img>
        </div>
        <div className="image">
          <span>
            The horizontal bar chart shows the top 10 areas by crime count. It
            counts area names, takes the top 10, and plots them as bars ordered
            horizontally. Central LA also has the highest count compared to
            other regions. 77th Street has the 2nd highest crime count and all
            other regions follow.
          </span>
          <img src={image2} alt="missing"></img>
        </div>
        <div className="image">
          <span>
            The bar graph filters the data by gender, counts the crime types for
            each gender, finds the most frequent crime for each, and plots a bar
            chart comparing the two. For males, crime code 624 (Battery, Simple
            Assault), is the most common crime according to the histogram. Most
            crimes reported with female victims are for crime code 626(Intimate
            partner, Simple Assault). The text annotations on the bars also
            display the crime code, making it easy to see the difference in the
            most prevalent crimes between genders.
          </span>
          <img src={image3} alt="missing"></img>
        </div>
        <div className="image">
          <span>
            The female victim's pie chart, counts crime codes, calculates
            percentages, and plots a pie chart. Battery simple assault and
            intimate partner assault are major crimes against females.
          </span>
          <img src={image4} alt="missing"></img>
        </div>
        <div className="image">
          <span>
            Pie chart for males. Simple Assault/battery and Aggravated Assault
            are the most frequent crimes against males.
          </span>
          <img src={image5} alt="missing"></img>
        </div>
        <div className="image">
          <span>
            Line Chart representing the crime from 2020 to 2023 (the recorded
            data is not for complete 2023). We can see that the highest number
            of crimes were recorded in 2022 and an increase in crime count from
            2020 to 2022.
          </span>
          <img src={image6} alt="missing"></img>
        </div>
        <div className="image">
          <span>
            This visualized the time interval crime counts as a bar chart. It
            clearly shows that most crimes occur at night
          </span>
          <img src={image7} alt="missing"></img>
        </div>
        <div className="image">
          <span>
            The histogram shows the victim ages, setting appropriate bins,
            limits, and labels, and adding text annotations with the count per
            bar. It shows victim ages peak in the 20s and 30s. We can observe
            from the resulting histogram: The ages peak in the 20s and 30s, with
            the tallest bar around 25 years old. There is a general downward
            trend in counts as age increases. The distribution is right-skewed,
            with a long tail of older ages. Bars above age 70 have quite low
            counts, less than 500 per 5-year bin.
          </span>
          <img src={image8} alt="missing"></img>
        </div>
        <div className="image">
          <span>
            A horizontal bar chart shows the 10 most common crime types by
            count. It counts the values in 'Crm Cd', takes the top 10, and plots
            them as a horizontal bar chart with matplotlib. This shows theft,
            battery, and assault are the most frequent crimes. The resulting
            chart shows that the most occurred crime in overall data is Battery,
            Simple Assault with crime code 624 and the second highest crime is
            Aggravated Assault with the crime code 230.
          </span>
          <img src={image9} alt="missing"></img>
        </div>
        <div className="image">
          <span>
            The following pie chart shows the distribution of crimes by victim
            race. It counts the values in 'Vict Descent', calculates
            percentages, and plots a pie chart with a legend containing the
            races and percentages. The chart shows that in the crimes that are
            recorded, the crimes in which victims are Hispanics, Whites, and
            Blacks are higher compared to other communities.
          </span>
          <img src={image10} alt="missing"></img>
        </div>
      </div>
    </div>
  );
}

export default EDA;
