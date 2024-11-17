from flask import Flask, request, jsonify
import requests

app = Flask(__name__)


TELEGRAM_TOKEN = '7398574016:AAEz6_YZqqnJGInZZDCQBNZe0x8pltAbHFA'
CHAT_ID = '1504287938'

@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.form
    message = f"""
        Name: {data.get('name')}
        Email: {data.get('email')}
        Phone Number: {data.get('phonenumber')}
        Subject: {data.get('subject')}
        Message: {data.get('message')}
    """
    send_to_telegram(message)
    return jsonify({"status": "success"}), 200

def send_to_telegram(message):
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    payload = {
        'chat_id': CHAT_ID,
        'text': message
    }
    response = requests.post(url, json=payload)
    return response.json()

if __name__ == '__main__':
    app.run(debug=True)