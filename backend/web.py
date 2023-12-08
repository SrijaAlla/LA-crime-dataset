import pickle
import pandas as pd
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS  # Import CORS from flask_cors
from sklearn.decomposition import PCA
import sklearn
import numpy as np
import os
import matplotlib as plt

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

print("The scikit-learn version is {}.".format(sklearn.__version__))

curr_dir = os.path.abspath(os.getcwd())

if sklearn.__version__ != "1.3.2":
    print("PLEASE UPGRADE scikit-learn VERSION TO 1.3.2 TO RUN THE CODE!!")
    print("Run the following commands:")
    print("pip uninstall scikit-learn")
    print("pip install scikit-learn")
    exit()


@app.route("/", methods=["GET"])
def index():
    return render_template()

#input format = {"AREA":1, "Premis Cd":2, "Weapon USed Cd": 12, "Part 1-2":1, "crime_type":0, "hour":12, "Vict Age":25}
@app.route("/naivebayes", methods=["POST"])
def naiveBayes():
    gnb = "gnb.sav"
    gnb_model = pickle.load(open(gnb, "rb"))

    mnb = "mnb.sav"
    mnb_model = pickle.load(open(mnb, "rb"))

    data = request.get_json()
    print(data)

    categorical_features = []
    numerical = []

    numerical.append(int(data['hour']))
    numerical.append(int(data['Vict Age']))
    numerical = np.array(numerical).reshape(1, -1)

    categorical_features = [
        "AREA",
        "Premis Cd",
        "Weapon Used Cd",
        "Part 1-2",
        "crime_type",
    ]
    categorical_features = [data[f] for f in categorical_features]
    categorical_features = np.array(categorical_features).reshape(1, -1)

    g_pred = gnb_model.predict_proba(numerical)[0]
    print("gnb", g_pred)
    mnb_pred = mnb_model.predict_proba(categorical_features)[0]

    y_pred = (g_pred + mnb_pred) / 2
    y_pred = np.argmax(y_pred)
    prediction = {"prediction": int(y_pred)}

    return jsonify(prediction)

#input Format = {'hour':12,"month","LAT":34.1, "LON":34.2,"Rpt Dist No": 12,"Part 1-2": 1, "Vict Age": 12}
@app.route("/randomforest", methods=["POST"])
def randomforest():
    model = "randomf.sav"
    model = pickle.load(open(model, "rb"))
    input_features = [
        "hour",
        "month",
        "LAT",
        "LON",
        "Rpt Dist No",
        "Part 1-2",
        "Vict Age",
    ]

    data = request.get_json()
    # Extract features
    features = [data[f] for f in input_features]

    # Reshape
    features = np.array(features).reshape(1, -1)

    # Make prediction
    prediction = model.predict(features)[0]

    # Model Prediction
    output = {"prediction": int(prediction)}

    return jsonify(output)

    # return jsonify()

#input format = {"AREA": 1, "hour":12, "Vict Age", "Premis Cd"," Weapon Used Cd"}
@app.route("/knn", methods=["POST"])
def knn():
    with open("knn.sav", "rb") as f:
        knn = pickle.load(f)
    data = request.get_json()
    print(data)
    data["AREA"] = int(data['AREA'])
    data["Vict Age"] = int(data["Vict Age"])
    data["Weapon Used Cd"] = int(data["Weapon Used Cd"])
    data["Premis Cd"] = int(data["Premis Cd"])
    data["hour"] = int(data["hour"])
    feature_columns = ['AREA', 'hour', 'Vict Age', 'Premis Cd', 'Weapon Used Cd']

    features = [data[f] for f in feature_columns]



    features = np.array(features).reshape(1, -1)
    prediction = knn.predict(features)[0]
    prediction = {"prediction": int(prediction)}

    return jsonify(prediction)

#input format = {"Premis Cd":2, "Weapon Used Cd": 12,"Crm Cd": 12 "Rpt Dist No":3, "hour":12}
#order is important
@app.route("/decision", methods=["POST"])
def decision():
    # check scikit version
    print("The scikit-learn version is {}.".format(sklearn.__version__))

    # load model
    model = "decision_tree.sav"
    model = pickle.load(open(model, "rb"))
    data = request.get_json()
    print(data)

    # changing format
    data["Premis Cd"] = [int(data["Premis Cd"])]
    data["Weapon Used Cd"] = [int(data["Weapon Used Cd"])]
    data["Crm Cd"] = [int(data["Crm Cd"])]
    data["Rpt Dist No"] = [int(data["Rpt Dist No"])]
    data["hour"] = [int(data["hour"])]
    print(data)

    # PCA Transformation
    data = pd.DataFrame(data)
    with open("pca.sav", "rb") as pca_file:
        pca = pickle.load(pca_file)
    features_pca = pca.transform(data)

    # Model Prediction
    prediction = model.predict(features_pca)[0]
    prediction = {"prediction": int(prediction)}

    return jsonify(prediction)

#input format = [{"AREA":1, "Vict Age":25, "Vict Sex": 1, "Weapon Used Cd": 5}]
@app.route("/predict", methods=["POST"])
def predict():
    # Load trained model
    model_file = curr_dir + "/logistic_regression.sav"
    loaded_model = pickle.load(open(model_file, "rb"))

    # Get data from request
    data = request.get_json()
    print(data)

    # Make dataframe from data
    X = pd.DataFrame(data, index=[0])

    # Get prediction
    prediction = loaded_model.predict(X)[0]

    # Return prediction as JSON
    result = {"prediction": prediction}

    return jsonify(result)
@app.route("/generate_plot", methods=["POST"])
def generate_plot():
    print('received')
    dataset = pickle.load(open('dataset.pkl', 'rb'))
    # Get data from the POST request
    request_data = request.get_json()
    print(request_data)
    # Check if 'area' is present in the request
    area = request_data['AREA NAME']
    print(area)

    # Filter dataset based on the provided area
    filtered_data = dataset[dataset['AREA NAME'] == area]

    # Generate separate plots for male and female counts
    plt.figure(figsize=(10, 6))

    # Male count plot
    plt.subplot(1, 2, 1)
    filtered_data[filtered_data['Vict Sex'] == 'M']['Vict Sex'].value_counts().plot(kind='bar')
    plt.title(f'Male Count in {area}')
    plt.xlabel('Gender')
    plt.ylabel('Count')

    # Female count plot
    plt.subplot(1, 2, 2)
    filtered_data[filtered_data['Vict Sex'] == 'F']['Vict Sex'].value_counts().plot(kind='bar')
    plt.title(f'Female Count in {area}')
    plt.xlabel('Gender')
    plt.ylabel('Count')

    # Save the plot to a BytesIO object
    image_stream = BytesIO()
    plt.tight_layout()
    plt.savefig(image_stream, format='png')
    plt.close()
    image_base64 = base64.b64encode(image_stream.getvalue()).decode('utf-8')
    return jsonify({'image': image_base64}), 200
    # # Return the plot as a base64-encoded string
    # #return jsonify({'image': image_stream.getvalue().decode('base64')}), 200
    # output = {"prediction":"repdiction"}
    # return jsonify(output)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
