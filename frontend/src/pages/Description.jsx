// code for description page

import React from "react";

function Description() {
  return (
    <div className="description">
      <div>
        <h1 className="side-heading">Description of dataset:</h1>
        This dataset is about crime data in Los Angeles from 2020 to the
        present. It discusses the data source, format, and access. The data is
        from the Los Angeles Police Department and includes crime incidents
        reported since 2020. The data is transcribed from paper reports and may
        contain inaccuracies. The addresses are accurate to the nearest hundred
        block to protect privacy. The dataset can be found at{" "}
        <span>
          <a href="https://catalog.data.gov/dataset/crime-data-from-2020-to-present">
            Source of the dataset
          </a>
        </span>
      </div>

      <div className="table-container">
        {/* <span className="sub-heading">
          <b>Columns:</b>
        </span> */}
        <br />
        <br />

        <h2 className="side-heading">Columns:</h2>

        <div>The following columns are considered after Data Cleaning</div>

        <table class="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DR_NO</td>
              <td>
                Division of Records Number: Official file number made up of a
                2-digit year, area ID, and 5-digit
              </td>
            </tr>
            <tr>
              <td>Date Rptd</td>
              <td>
                This column likely represents the date when the crime was
                reported to authorities in the format MM/DD/YYYY
              </td>
            </tr>
            <tr>
              <td>DATE OCC</td>
              <td>
                This column likely represents the date when the crime actually
                occurred in the format MM/DD/YYYY.
              </td>
            </tr>
            <tr>
              <td>TIME OCC</td>
              <td>
                {" "}
                This column represents the time at which the crime occurred in
                military time.
              </td>
            </tr>
            <tr>
              <td>AREA NAME</td>
              <td>
                The 21 Geographic Areas or Patrol Divisions are also given a
                name designation that references a landmark or the surrounding
                community that it is responsible for. For example, 77th Street
                Division is located at the intersection of South Broadway and
                77th Street, serving neighborhoods in South Los Angeles.
              </td>
            </tr>
            <tr>
              <td>Rpt Dist No</td>
              <td>
                This column contains a report district number associated with
                the crime. A four-digit code that represents a sub-area within a
                Geographic Area. All crime records reference the "RD" that it
                occurred in for statistical comparisons.{" "}
                <p>
                  Find LAPD Reporting Districts on the LA City GeoHub{" "}
                  <a
                    href="http://geohub.lacity.org/datasets/c4f83909b81d4786aa8ba8a74a4b4db1_4"
                    // target="_blank"
                  >
                    {" "}
                    here
                  </a>
                  .
                </p>
              </td>
            </tr>
            <tr>
              <td>Part 1-2</td>
              Part I Crimes (Index Crimes)
              {/* </td> */}
              {/* <td> */}
              <ul>
                <li>
                  Part I crimes are considered more serious and are often
                  referred to as "index crimes."
                </li>
                <li>
                  These crimes include major violent offenses and high-value
                  property crimes.
                </li>
                <li>
                  Examples of Part I crimes typically include murder, rape,
                  robbery, aggravated assault, burglary, larceny-theft, and
                  motor vehicle theft.
                </li>
                <li>
                  These crimes are closely tracked and reported in national
                  crime statistics, such as the Uniform Crime Reporting (UCR)
                  program by the FBI.
                </li>
              </ul>
              {/* </td> */}
              {/* </tr>
            <tr> */}
              {/* <td> */}
              Part II Crimes (Non-Index Crimes)
              {/* </td> */}
              {/* <td> */}
              <ul>
                <li>
                  Part II crimes are considered less serious and encompass a
                  wider range of offenses.
                </li>
                <li>
                  These crimes include less serious property crimes, simple
                  assaults, fraud, vandalism, and other offenses that may not be
                  as severe as Part I crimes.
                </li>
                <li>
                  Part II crimes are reported separately from Part I crimes in
                  crime statistics.
                </li>
              </ul>
              {/* </td> */}
            </tr>

            <tr>
              <td>Crm Cd</td>
              <td>
                This column contains a numerical code indicating the crime
                committed.
              </td>
            </tr>
            <tr>
              <td>Crm Cd 2</td>
              <td>
                May contain a code for an additional crime, less serious than
                Crime Code 1.
              </td>
            </tr>
            <tr>
              <td>Crm Cd desc</td>
              <td>This column provides a textual description of the crime.</td>
            </tr>
            <tr>
              <td>Mocodes</td>
              <td>
                This column may contain additional codes or Modus Operandi:
                Activities associated with the suspect in commission of the
                crime.
              </td>
            </tr>
            <tr>
              <td>Vict Age</td>
              <td>This column records the age of the victim.</td>
            </tr>
            <tr>
              <td>Victim Sex</td>
              <td>This column specifies the gender of the victim.</td>
            </tr>
            <tr>
              <td>Vict Descent</td>
              <td>
                This column indicates the race or ethnicity of the victim.
              </td>
            </tr>
            <tr>
              <td>Premis cd</td>
              <td>
                This column contains a code representing the type of location
                where the crime occurred.
              </td>
            </tr>
            <tr>
              <td>Premis Desc</td>
              <td>
                This column provides a textual description of the location where
                the crime occurred
              </td>
            </tr>
            <tr>
              <td>Weapon Used Cd</td>
              <td>
                This column contains a code representing the type of weapon used
                in the crime.
              </td>
            </tr>
            <tr>
              <td>Weapon Desc</td>
              <td>
                This column provides a textual description of the weapon used.
              </td>
            </tr>
            <tr>
              <td>Status</td>
              <td>This column may indicate the status of the crime report</td>
            </tr>
            <tr>
              <td>Status Desc</td>
              <td>This column provides a textual description of the status.</td>
            </tr>
            <tr>
              <td>LOCATION</td>
              <td>
                The street address of the crime incident was rounded to the
                nearest hundred block to maintain anonymity.
              </td>
            </tr>
            <tr>
              <td>LAT</td>
              <td>
                This column provides the latitude coordinates of the crime
                location.
              </td>
            </tr>
            <tr>
              <td>LON</td>
              <td>
                This column provides the longitude coordinates of the crime
                location.
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="side-heading">
          Feature Engineering
          {/* Created Columns for Analysis: */}
        </h2>

        <table class="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Weapon Rating</td>
              <td>
                This column provides descriptions of various weapons. An
                accompanying column 'weapon rating' assigns a severity rating
                from 1 to 10 for each weapon based on its perceived danger
                level.
              </td>
            </tr>
            <tr>
              <td>Crime Intensity</td>
              <td>
                This column gives the crime rating of a district based on the
                number of crimes where the intesity of the crime is rated on a
                scale of 1-10 manually.
              </td>
            </tr>
            <tr>
              <td>Year</td>
              <td>This column indicates the year when the crime occurred.</td>
            </tr>
            <tr>
              <td>Month</td>
              <td>This column indicates the month when the crime occurred.</td>
            </tr>
            <tr>
              <td>crime_type</td>
              <td>
                This column specifies the type of crime which is divided into
                violent or non-violent.
              </td>
            </tr>
            <tr>
              <td>Vehicular</td>
              <td>
                A crime is categorised as vehicular if the the crime involves a
                vehicle
              </td>
            </tr>
            <tr>
              <td>Theft</td>
              <td>
                A crime is categorised as theft if the the crime involves a
                robbery.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Description;
