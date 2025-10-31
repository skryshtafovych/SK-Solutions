from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import logging

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)

@app.route('/npi/<npi>')
def npi_lookup(npi):
    app.logger.info(f"Received request for NPI: {npi}")
    url = f"https://clinicaltables.nlm.nih.gov/api/npi_org/v3/search?terms={npi}"
    response = requests.get(url)
    if response.status_code == 200:
        app.logger.info(f"Successfully fetched data for NPI: {npi}")
        return jsonify(response.json())
    else:
        app.logger.error(f"Failed to fetch data for NPI: {npi}, status code: {response.status_code}")
        return jsonify({"error": "Failed to fetch data from NPI registry"}), response.status_code

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
