const model_fields = {
  model1: {
    name: 'Logistic Regression',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis neque non hendrerit pellentesque. Sed maximus, orci id pharetra rhoncus, enim tortor dictum leo, vel lacinia arcu purus sit amet nisi. In imperdiet, lorem non vulputate faucibus, lectus felis congue urna, vitae vulputate mi justo convallis nisi. Sed consequat tempus fringilla. Nam vehicula metus non hendrerit ornare. Etiam aliquet vel nisl at venenatis. Aenean condimentum volutpat lobortis. In sit amet ante et lorem placerat hendrerit ut eget urna. Aliquam ligula risus, pretium ac dolor id, fringilla auctor mi. Nam id lacus est. Praesent auctor gravida enim. Curabitur aliquet in lectus vitae bibendum. Nam vehicula odio vitae quam vestibulum, eu pulvinar erat tincidunt. Cras volutpat fermentum ultrices.',
    fields: [
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'area',
        label: 'Area',
      },
      {
        type: 'number',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'victage',
        label: 'Victim Age',
      },
      {
        type: 'dropdown',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'victsex',
        label: 'Victim Sex',
        options: [
          ['male', 1],
          ['female', 0],
        ],
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'weaponused',
        label: 'Weapon Used Cd',
      },
    ],
  },
  model2: {
    name: 'K Nearest Neighbours',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis neque non hendrerit pellentesque. Sed maximus, orci id pharetra rhoncus, enim tortor dictum leo, vel lacinia arcu purus sit amet nisi. In imperdiet, lorem non vulputate faucibus, lectus felis congue urna, vitae vulputate mi justo convallis nisi. Sed consequat tempus fringilla. Nam vehicula metus non hendrerit ornare. Etiam aliquet vel nisl at venenatis. Aenean condimentum volutpat lobortis. In sit amet ante et lorem placerat hendrerit ut eget urna. Aliquam ligula risus, pretium ac dolor id, fringilla auctor mi. Nam id lacus est. Praesent auctor gravida enim. Curabitur aliquet in lectus vitae bibendum. Nam vehicula odio vitae quam vestibulum, eu pulvinar erat tincidunt. Cras volutpat fermentum ultrices.',
    fields: [
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'area',
        label: 'Area',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'hour',
        label: 'Hour',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'victage',
        label: 'Victim Age',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'premiscd',
        label: 'Premise Code',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'weaponused',
        label: 'Weapon Used Code',
      },
    ],
  },
  model3: {
    name: 'Decision Tree Classifier',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis neque non hendrerit pellentesque. Sed maximus, orci id pharetra rhoncus, enim tortor dictum leo, vel lacinia arcu purus sit amet nisi. In imperdiet, lorem non vulputate faucibus, lectus felis congue urna, vitae vulputate mi justo convallis nisi. Sed consequat tempus fringilla. Nam vehicula metus non hendrerit ornare. Etiam aliquet vel nisl at venenatis. Aenean condimentum volutpat lobortis. In sit amet ante et lorem placerat hendrerit ut eget urna. Aliquam ligula risus, pretium ac dolor id, fringilla auctor mi. Nam id lacus est. Praesent auctor gravida enim. Curabitur aliquet in lectus vitae bibendum. Nam vehicula odio vitae quam vestibulum, eu pulvinar erat tincidunt. Cras volutpat fermentum ultrices.',
    fields: [
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'premiscd',
        label: 'Premise Code',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'crmcd',
        label: 'Crime Code',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'weaponused',
        label: 'Weapon Used Code',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'rptdn',
        label: 'Reported District',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'hour',
        label: 'Hour',
      },
    ],
  },
  model4: {
    name: 'Random Forest Classifier',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis neque non hendrerit pellentesque. Sed maximus, orci id pharetra rhoncus, enim tortor dictum leo, vel lacinia arcu purus sit amet nisi. In imperdiet, lorem non vulputate faucibus, lectus felis congue urna, vitae vulputate mi justo convallis nisi. Sed consequat tempus fringilla. Nam vehicula metus non hendrerit ornare. Etiam aliquet vel nisl at venenatis. Aenean condimentum volutpat lobortis. In sit amet ante et lorem placerat hendrerit ut eget urna. Aliquam ligula risus, pretium ac dolor id, fringilla auctor mi. Nam id lacus est. Praesent auctor gravida enim. Curabitur aliquet in lectus vitae bibendum. Nam vehicula odio vitae quam vestibulum, eu pulvinar erat tincidunt. Cras volutpat fermentum ultrices.',
    fields: [
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'hour',
        label: 'Hour',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'month',
        label: 'Month',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'lat',
        label: 'Latitude',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'lon',
        label: 'Longitude',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'rptdn',
        label: 'Reported District',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'part12',
        label: 'Part 1-2',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'victage',
        label: 'Victim Age',
      },
    ],
  },
  model5: {
    name: 'Naive Bayes Classifier',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis neque non hendrerit pellentesque. Sed maximus, orci id pharetra rhoncus, enim tortor dictum leo, vel lacinia arcu purus sit amet nisi. In imperdiet, lorem non vulputate faucibus, lectus felis congue urna, vitae vulputate mi justo convallis nisi. Sed consequat tempus fringilla. Nam vehicula metus non hendrerit ornare. Etiam aliquet vel nisl at venenatis. Aenean condimentum volutpat lobortis. In sit amet ante et lorem placerat hendrerit ut eget urna. Aliquam ligula risus, pretium ac dolor id, fringilla auctor mi. Nam id lacus est. Praesent auctor gravida enim. Curabitur aliquet in lectus vitae bibendum. Nam vehicula odio vitae quam vestibulum, eu pulvinar erat tincidunt. Cras volutpat fermentum ultrices.',
    fields: [
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'area',
        label: 'AREA',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'premiscd',
        label: 'Premis Cd',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'weaponused',
        label: 'Weapon Used Cd',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'part12',
        label: 'Part 1-2',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'crimetype',
        label: 'Crime Type',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'hour',
        label: 'hour',
      },
      {
        type: 'text',
        field_desc:
          'Vestibulum id metus nec odio finibus lacinia vel vitae neque. Nam quis augue pellentesque, varius nulla vel, sodales purus. Praesent rutrum odio eget velit pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pulvinar nibh ut metus lacinia sollicitudin. ',
        id: 'victage',
        label: 'Vict Age',
      },
    ],
  },
}

export { model_fields }
