import React from "react";

function Description() {
  return (
    <div className="description">
      {/* <div className="main-heading">LA Crime Data set</div> */}
      <div>
        <span className="sub-heading">
          <b>Description of dataset:</b>
        </span>
        The City of Los Angeles, like many urban areas worldwide, faces ongoing
        challenges related to crime prevention, law enforcement, and public
        safety. The dataset can be found at{" "}
        <span>
          <a href="https://catalog.data.gov/dataset/crime-data-from-2020-to-present">
            Source of the dataset
          </a>
        </span>
      </div>

      <div>
        <span className="sub-heading">
          <b>Columns:</b>
        </span>
        <div>The following columns are considered after Data Cleaning</div>
        <div>
          <ul>
            <li>
              <b>DR_NO:</b> Division of Records Number: Official file number
              made up of a 2-digit year, area ID, and 5-digit
            </li>
            <li>
              <b>Date Rptd:</b> This column likely represents the date when the
              crime was reported to authorities in the format MM/DD/YYYY
            </li>
            <li>
              <b> DATE OCC:</b> This column likely represents the date when the
              crime actually occurred in the format MM/DD/YYYY.
            </li>
            <li>
              <b>TIME OCC:</b> This column represents the time at which the
              crime occurred in military time.
            </li>

            <li>
              <b>AREA NAME:</b> The 21 Geographic Areas or Patrol Divisions are
              also given a name designation that references a landmark or the
              surrounding community that it is responsible for. For example,
              77th Street Division is located at the intersection of South
              Broadway and 77th Street, serving neighborhoods in South Los
              Angeles.
            </li>
            <li>
              <b>Rpt Dist No:</b> This column contains a report district number
              associated with the crime. A four-digit code that represents a
              sub-area within a Geographic Area. All crime records reference the
              "RD" that it occurred in for statistical comparisons.{" "}
              <p>
                Find LAPD Reporting Districts on the LA City GeoHub at{" "}
                <a
                  href="http://geohub.lacity.org/datasets/c4f83909b81d4786aa8ba8a74a4b4db1_4"
                  target="_blank"
                >
                  http://geohub.lacity.org/datasets/c4f83909b81d4786aa8ba8a74a4b4db1_4
                </a>
              </p>
            </li>
            <li>
              <section>
                <h5>Part I Crimes (Index Crimes)</h5>
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
              </section>

              <section>
                <h5>Part II Crimes (Non-Index Crimes)</h5>
                <ul>
                  <li>
                    Part II crimes are considered less serious and encompass a
                    wider range of offenses.
                  </li>
                  <li>
                    These crimes include less serious property crimes, simple
                    assaults, fraud, vandalism, and other offenses that may not
                    be as severe as Part I crimes.
                  </li>
                  <li>
                    Part II crimes are reported separately from Part I crimes in
                    crime statistics.
                  </li>
                </ul>
              </section>
            </li>
            <li>
              <b>Crm Cd:</b> This column contains a numerical code indicating
              the crime committed.
            </li>
            <li>
              <b>Crm Cd 2:</b> May contain a code for an additional crime, less
              serious than Crime Code 1.
            </li>
            <li>
              <b>Crm Cd desc:</b> This column provides a textual description of
              the crime.
            </li>

            <li>
              <b>Mocodes</b>: This column may contain additional codes or Modus
              Operandi: Activities associated with the suspect in commission of
              the crime.
            </li>
            <li>
              <b>Vict Age:</b> This column records the age of the victim.
            </li>
            <li>
              <b>Victim Sex:</b> This column specifies the gender of the victim.
            </li>
            <li>
              <b>Vict Descent:</b> This column indicates the race or ethnicity
              of the victim.
            </li>
            <li>
              <b>Premis cd:</b> This column contains a code representing the
              type of location where the crime occurred.
            </li>
            <li>
              <b>Premis Desc:</b> This column provides a textual description of
              the location where the crime occurred.
            </li>
            <li>
              <b>Weapon Used Cd:</b> This column contains a code representing
              the type of weapon used in the crime.
            </li>
            <li>
              <b>Weapon Desc:</b> This column provides a textual description of
              the weapon used.
            </li>
            <li>
              <b>Status:</b> This column may indicate the status of the crime
              report
            </li>
            <li>
              <b>Status Desc:</b> This column provides a textual description of
              the status.
            </li>

            <li>
              <b>LOCATION:</b> The street address of the crime incident was
              rounded to the nearest hundred block to maintain anonymity.
            </li>
            <li>
              <b>LAT: </b>This column provides the latitude coordinates of the
              crime location.
            </li>
            <li>
              <b>LON:</b> This column provides the longitude coordinates of the
              crime location.
            </li>
          </ul>
          <b>
            <u>Created Columns for Analysis:</u>
          </b>
          <div>
            <ul>
              <li>
                <b>Weapons:</b> This column provides descriptions of various
                weapons. An accompanying column 'weapon rating' assigns a
                severity rating from 1 to 10 for each weapon based on its
                perceived danger level.
              </li>
              <li>
                <b>Crimes:</b> This column gives the crime rating of a district
                based on the number of crimes where the intesity of the crime is
                rated on a scale of 1-10 manually.
              </li>

              <li>
                <b>Year:</b> This column indicates the year when the crime
                occurred.
              </li>
              <li>
                <b>Month:</b> This column indicates the month when the crime
                occurred.
              </li>
              <li>
                <b>crime_type:</b> This column specifies the type of crime which
                is divided into violent
              </li>
              <li>
                <b>Vehicular:</b>A crime is categorised as vehicular if the the
                crime involves a vehicle
              </li>
              <li>
                <b>Theft:</b>A crime is categorised as theft if the the crime
                involves a robbery.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
