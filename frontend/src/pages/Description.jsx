import React from "react";

function Description() {
  return (
    <div className="description">
      {/* <div className="main-heading">LA Crime Data set</div> */}
      <div>
        <span>Description of dataset:</span>
        The City of Los Angeles, like many urban areas worldwide, faces ongoing
        challenges related to crime prevention, law enforcement, and public
        safety.
      </div>
      <div>
        <a href="https://catalog.data.gov/dataset/crime-data-from-2020-to-present">
          Source of the dataset
        </a>
      </div>
      <div>
        Columns
        <div>
          <ul>
            <li>
              DR_NO: Division of Records Number: Official file number made up of
              a 2-digit year, area ID, and 5-digit
            </li>
            <li>
              Date Rptd: This column likely represents the date when the crime
              was reported to authorities in the format MM/DD/YYYY
            </li>
            <li>
              DATE OCC: This column likely represents the date when the crime
              actually occurred in the format MM/DD/YYYY.
            </li>
            <li>
              TIME OCC: This column represents the time at which the crime
              occurred in military time.
            </li>
            <li>
              AREA: This column specifies the name of the area where the crime
              occurred.
            </li>
            <li>
              AREA NAME: The 21 Geographic Areas or Patrol Divisions are also
              given a name designation that references a landmark or the
              surrounding community that it is responsible for. For example,
              77th Street Division is located at the intersection of South
              Broadway and 77th Street, serving neighborhoods in South Los
              Angeles.
            </li>
            <li>
              Rpt Dist No: This column contains a report district number
              associated with the crime. A four-digit code that represents a
              sub-area within a Geographic Area. All crime records reference the
              "RD" that it occurred in for statistical comparisons. Find LAPD
              Reporting Districts on the LA City GeoHub at
              http://geohub.lacity.org/datasets/c4f83909b81d4786aa8ba8a74a4b4db1_4
            </li>
            <li>
              Part 1-2: Part I Crimes Index Crimes: ▪ Part I crimes are
              considered more serious and are often referred to as "index
              crimes." ▪ These crimes include major violent offenses and
              high-value property crimes. ▪ Examples of Part I crimes typically
              include murder, rape, robbery, aggravated assault, burglary,
              larceny-theft, and motor vehicle theft. ▪ These crimes are closely
              tracked and reported in national crime statistics, such as the
              Uniform Crime Reporting UCR program by the FBI. Part II Crimes
              Non-Index Crimes: ▪ Part II crimes are considered less serious and
              encompass a wider range of offenses. ▪ These crimes include less
              serious property crimes, simple assaults, fraud, vandalism, and
              other offenses that may not be as severe as Part I crimes. ▪ Part
              II crimes are reported separately from Part I crimes in crime
              statistics.
            </li>
            <li>
              Crm Cd: This column contains a numerical code indicating the crime
              committed.
            </li>
            <li>
              Crm Cd desc: This column provides a textual description of the
              crime associated with the code.
            </li>
            <li>
              Mocodes: This column may contain additional codes or Modus
              Operandi: Activities associated with the suspect in commission of
              the crime.See attached PDF for list of MO Codes in numerical
              order.
            </li>
            <li>Vict Age: This column records the age of the victim.</li>
            <li>Victim Sex: This column specifies the gender of the victim.</li>
            <li>
              Vict Descent: This column indicates the race or ethnicity of the
              victim.
            </li>
            <li>
              Premis cd: This column contains a code representing the type of
              location where the crime occurred.
            </li>
            <li>
              Premis Desc: This column provides a textual description of the
              location where the crime occurred.
            </li>
            <li>
              Weapon Used Cd: This column contains a code representing the type
              of weapon used in the crime.
            </li>
            <li>
              Weapon Desc: This column provides a textual description of the
              weapon used.
            </li>
            <li>
              Status: This column may indicate the status of the crime report
            </li>
            <li>
              Status Desc: This column provides a textual description of the
              status.
            </li>
            <li>
              Crm Cd 1: Indicates the crime committed. Crime Code 1 is the
              primary and most serious one. Crime Codes 2, 3, and 4 are
              respectively less serious offenses. Lower crime class numbers are
              more serious.
            </li>
            <li>
              Crm Cd 2: May contain a code for an additional crime, less serious
              than Crime Code 1. ➢ Crm Cd 3: May contain a code for an
              additional crime, less serious than Crime Code 1. ➢ Crm Cd 4: May
              contain a code for an additional crime, less serious than Crime
              Code 1. ➢
            </li>
            <li>
              LOCATION: The street address of the crime incident was rounded to
              the nearest hundred block to maintain anonymity. ➢ Cross Street:
              Cross street of rounded Address.
            </li>
            <li>
              LAT: This column provides the latitude coordinates of the crime
              location.
            </li>
            <li>
              LON: This column provides the longitude coordinates of the crime
              location.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Description;
