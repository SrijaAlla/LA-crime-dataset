const model_fields = {
  model1: {
    name: 'Logistic Regression',
    description:
      'Logistic regression was chosen as it is suitable for classification tasks where the target variable is categorical, like the crime types here. As a linear model, logistic regression is relatively simple and fast to train. It also provides probabilities of class membership rather than just discrete predictions. These features were chosen because they provide relevant information that could be predictive of the type of crime. The area, demographics of the victim, and weapons used can be indicative of patterns in different crime types.',
    fields: [
      {
        type: 'text',
        field_desc:
          'The 21 Geographic Areas or Patrol Divisions are also given a name designation that references a landmark or the surrounding community that it is responsible for. For example, 77th Street Division is located at the intersection of South Broadway and 77th Street, serving neighborhoods in South Los Angeles.',
        id: 'area',
        label: 'Area',
      },
      {
        type: 'number',
        field_desc: 'Age of the Victim',
        id: 'victage',
        label: 'Victim Age',
      },
      {
        type: 'dropdown',
        field_desc: 'Victim Gender',
        id: 'victsex',
        label: 'Victim Sex',
        options: [
          ['male', 1],
          ['female', 0],
        ],
      },
      {
        type: 'text',
        field_desc: 'Type of Weapon used',
        id: 'weaponused',
        label: 'Weapon Used Cd',
      },
    ],
  },
  model2: {
    name: 'K Nearest Neighbours',
    description:
      'KNN is a simple, intuitive classification algorithm that works by finding the most similar samples and predicting based on the majority class of neighbors. This non-parametric approach means it can model complex decision boundaries that may be nonlinear.',
    fields: [
      {
        type: 'text',
        field_desc:
          'The 21 Geographic Areas or Patrol Divisions are also given a name designation that references a landmark or the surrounding community that it is responsible for. For example, 77th Street Division is located at the intersection of South Broadway and 77th Street, serving neighborhoods in South Los Angeles.',
        id: 'area',
        label: 'Area',
      },
      {
        type: 'text',
        field_desc: 'Hour at which the cirme was reported (24 hour)',
        id: 'hour',
        label: 'Hour',
      },
      {
        type: 'text',
        field_desc: 'Age of the Victim',
        id: 'victage',
        label: 'Victim Age',
      },
      {
        type: 'text',
        field_desc:
          'A code representing the type of location where the crime occurred',
        id: 'premiscd',
        label: 'Premise Code',
      },
      {
        type: 'text',
        field_desc: 'Type of Weapon used',
        id: 'weaponused',
        label: 'Weapon Used Code',
      },
    ],
  },
  model3: {
    name: 'Decision Tree Classifier',
    description:
      'The decision tree works well with raw categorical features and also with a mix of categorical and numerical features. It is not influenced by outliers compared to other models as it is based on feature splits.',
    fields: [
      {
        type: 'text',
        field_desc:
          'A code representing the type of location where the crime occurred',
        id: 'premiscd',
        label: 'Premise Code',
      },
      {
        type: 'text',
        field_desc: 'Code of the Main Crime occured',
        id: 'crmcd',
        label: 'Crime Code',
      },
      {
        type: 'text',
        field_desc: 'Type of Weapon used',
        id: 'weaponused',
        label: 'Weapon Used Code',
      },
      {
        type: 'text',
        field_desc: 'Reported District Number',
        id: 'rptdn',
        label: 'Reported District',
      },
      {
        type: 'text',
        field_desc: 'Hour at which the cirme was reported (24 hour)',
        id: 'hour',
        label: 'Hour',
      },
    ],
  },
  model4: {
    name: 'Random Forest Classifier',
    description:
      'Random Forests can identify the most important factors correlated with vehicular crime like location,time of day, etc. It helps in reducing overfitting and provides more robust predictions and improves generalization. ',
    fields: [
      {
        type: 'text',
        field_desc: 'Hour at which the cirme was reported (24 hour)',
        id: 'hour',
        label: 'Hour',
      },
      {
        type: 'text',
        field_desc: 'Month in which the crime occured ',
        id: 'month',
        label: 'Month',
      },
      {
        type: 'text',
        field_desc: 'Latitude of the location in which the crime occured',
        id: 'lat',
        label: 'Latitude',
      },
      {
        type: 'text',
        field_desc: 'Longitude of the location in which the crime occured',
        id: 'lon',
        label: 'Longitude',
      },
      {
        type: 'text',
        field_desc: 'Reported District Number',
        id: 'rptdn',
        label: 'Reported District',
      },
      {
        type: 'text',
        field_desc: 'Part 1 index crimes or Part 2 index crimes',
        id: 'part12',
        label: 'Part 1-2',
      },
      {
        type: 'text',
        field_desc: 'Age of the Victim',
        id: 'victage',
        label: 'Victim Age',
      },
    ],
  },
  model5: {
    name: 'Naive Bayes Classifier',
    description:
      'Naive Bayes can provide interpretable insights into situational correlates of theft crimes enabling citizens to be more alert and police to take appropriate measures post or prior to the crime. It is efficient for large datasets and works quite fast.',
    fields: [
      {
        type: 'text',
        field_desc:
          'The 21 Geographic Areas or Patrol Divisions are also given a name designation that references a landmark or the surrounding community that it is responsible for. For example, 77th Street Division is located at the intersection of South Broadway and 77th Street, serving neighborhoods in South Los Angeles.',
        id: 'area',
        label: 'AREA',
      },
      {
        type: 'text',
        field_desc:
          'A code representing the type of location where the crime occurred',
        id: 'premiscd',
        label: 'Premis Cd',
      },
      {
        type: 'text',
        field_desc: 'Type of Weapon used',
        id: 'weaponused',
        label: 'Weapon Used Cd',
      },
      {
        type: 'text',
        field_desc: 'Part 1 index crimes or Part 2 index crimes',
        id: 'part12',
        label: 'Part 1-2',
      },
      {
        type: 'text',
        field_desc: 'Type of Crime',
        id: 'crimetype',
        label: 'Crime Type',
      },
      {
        type: 'text',
        field_desc: 'Hour at which the cirme was reported (24 hour) ',
        id: 'hour',
        label: 'hour',
      },
      {
        type: 'text',
        field_desc: 'Age of the Victim',
        id: 'victage',
        label: 'Vict Age',
      },
    ],
  },
  model6: {
    name: 'K Means',
    description:
      'Naive Bayes can provide interpretable insights into situational correlates of theft crimes enabling citizens to be more alert and police to take appropriate measures post or prior to the crime. It is efficient for large datasets and works quite fast.',
    fields: [
      {
        type: 'text',
        field_desc:
          'The 21 Geographic Areas or Patrol Divisions are also given a name designation that references a landmark or the surrounding community that it is responsible for. For example, 77th Street Division is located at the intersection of South Broadway and 77th Street, serving neighborhoods in South Los Angeles.',
        id: 'crime_intensity',
        label: 'Crime Intensity',
      },
      {
        type: 'text',
        field_desc:
          'A code representing the type of location where the crime occurred',
        id: 'weapon_rating',
        label: 'Weapon Rating',
      },
    ],
  },
}

export { model_fields }
