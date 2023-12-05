import pickle
import pandas as pd
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS  # Import CORS from flask_cors
from sklearn.decomposition import PCA
import sklearn
import numpy as np

app = Flask(__name__)
CORS(app,resources={r"/*": {"origins": "http://localhost:3000"}})


@app.route('/', methods = ['GET'])
def index():
    return render_template()
@app.route('/naivebayes', methods=['POST'])
def naiveBayes():
    gnb = 'gnb.sav'
    gnb_model = pickle.load(open(gnb,'rb'))
    
    mnb = 'mnb.sav'
    mnb_model = pickle.load(open(mnb,'rb'))

    data = request.get_json()
    print(data)

    categorical_features = []
    numerical = []

    numerical.append(data['hour'])
    numerical.append(data['Vict Age'])
    numerical = np.array(numerical).reshape(1, -1)

    categorical_features = ['AREA', 'Premis Cd', 'Weapon Used Cd', 'Part 1-2','crime_type']
    categorical_features = [data[f] for f in categorical_features] 
    categorical_features = np.array(categorical_features).reshape(1, -1)

    g_pred = gnb_model.predict_proba(numerical)[0]
    print("gnb", g_pred)
    mnb_pred = mnb_model.predict_proba(categorical_features)[0]

    y_pred = (g_pred + mnb_pred)/2
    y_pred = np.argmax(y_pred)
    output = {'crime_risk': int(y_pred)}

    return jsonify(output)

@app.route('/randomforest', methods=['POST'])
def randomforest():
    model = 'randomf.sav'
    model = pickle.load(open(model,'rb'))
    input_features = ['hour', 'month', 'LAT', 'LON','Rpt Dist No', 'Part 1-2', 'Vict Age']

    data = request.get_json()
    # Extract features
    features = [data[f] for f in input_features] 

    # Reshape  
    features = np.array(features).reshape(1, -1)

    # Make prediction
    prediction = model.predict(features)[0]

    # Model Prediction
    output = {'vehicular': int(prediction)}
    
    return jsonify(output)

    # return jsonify()



@app.route('/knn', methods=['POST'])
def knn():
    with open('knn.sav', 'rb') as f:
        knn = pickle.load(f)
    data = request.get_json()
    feature_columns = ['AREA', 'hour', 'Vict Age', 'Premis Cd', 'Weapon Used Cd']

    features = [data[f] for f in feature_columns]

    features = np.array(features).reshape(1, -1)
    prediction = knn.predict(features)[0]
    output = {'crime_type': int(prediction)}
    
    return jsonify(output)


@app.route('/decision', methods=['POST'])
def decision():
    # check scikit version
    print('The scikit-learn version is {}.'.format(sklearn.__version__))

    # load model
    model = 'decision_tree.sav'
    model = pickle.load(open(model, 'rb'))
    data = request.get_json()
    
    # changing format
    data['Premis Cd'] = [data['Premis Cd']]
    data['Crm Cd'] = [data['Crm Cd']]
    data['Weapon Used Cd'] = [data['Weapon Used Cd']]
    data['Rpt Dist No'] = [data['Rpt Dist No']]
    data['hour'] = [data['hour']]
    print(data)

    # PCA Transformation
    data = pd.DataFrame(data)
    with open("pca.sav", 'rb') as pca_file:
        pca = pickle.load(pca_file)
    features_pca = pca.transform(data)
    
    # Model Prediction
    pred = model.predict(features_pca)[0]
    output = {'crime_risk': int(pred)}
    
    return jsonify(output)

@app.route('/predict', methods=['POST'])
def predict():
    # Load trained model
    model_file = 'logistic_regression.sav'
    loaded_model = pickle.load(open(model_file, 'rb'))

    # Get data from request
    data = request.get_json()
    print(data)
    
    # Make dataframe from data
    X = pd.DataFrame(data, index=[0])
    
    # Get prediction
    prediction = loaded_model.predict(X)[0]
    
    # Return prediction as JSON
    result = {'prediction': prediction} 
    
    return jsonify(result)

if __name__ == '__main__':
   app.run(debug=True, port=5000)
