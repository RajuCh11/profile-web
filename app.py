from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

# 🔥 Real-time dashboard API
@app.route("/metrics")
def metrics():
    return jsonify({
        "cpu": random.randint(30, 80),
        "pods": random.randint(3, 8),
        "status": "Healthy"
    })

# 🤖 Chatbot
@app.route("/chat", methods=["POST"])
def chat():
    msg = request.json.get("message").lower()

    if "skills" in msg:
        reply = "AWS, Kubernetes, Docker, Terraform, Jenkins"
    elif "experience" in msg:
        reply = "4 years DevOps experience in CI/CD & Cloud"
    else:
        reply = "Ask me about skills, projects, or experience."

    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)