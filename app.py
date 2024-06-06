from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/profile')
def profile():
    lang = request.args.get('lang', 'ja')
    print(f"Language requested: {lang}")  # デバッグ用のログ

    if lang == 'en':
        data = {
            'name': 'Your Name',
            'bio': 'Short bio in English',
            'skills': ['Skill 1', 'Skill 2', 'Skill 3'],
            'projects': ['Project 1', 'Project 2', 'Project 3'],

            'about': 'Keireki',
            'aboutInfo': 'Keireki Shousai',
            'skill': 'Skills',
            'project': 'Projects',
            'title': 'My Profile'
        }
    else:
        data = {
            'name': 'あなたの名前',
            'bio': '簡単な紹介文',
            'skills': ['スキル1', 'スキル2', 'スキル3'],
            'projects': ['プロジェクト1', 'プロジェクト2', 'プロジェクト3'],

            'about': '経歴',
            'aboutInfo': '経歴詳細',
            'skill': 'スキル',
            'project': 'プロジェクト',
            'title': '私の自己紹介'
        }

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
