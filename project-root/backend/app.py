from flask import Flask, request
app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    username = request.form.get('username')
    return f"Received username: {username}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)