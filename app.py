from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/profile')
def profile():
    data = {
        'name': 'aki',
        'bio': 'エンジニアをしています。',
        'skills': ['python', 'typescript'],
        'projects': ['このサイト', 'あのアプリ']
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
