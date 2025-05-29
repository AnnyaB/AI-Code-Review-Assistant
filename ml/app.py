# ml/app.py
from flask import Flask, request, jsonify
from analyzer import analyze_code

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    code = data.get('code', '')

    if not code:
        return jsonify({'error': 'No code provided'}), 400

    # Perform static analysis / ML prediction
    result = analyze_code(code)

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
