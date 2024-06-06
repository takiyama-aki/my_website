document.addEventListener('DOMContentLoaded', function() {
    function loadProfile(language) {
        console.log(`Loading profile in ${language}`);
        fetch(`/api/profile?lang=${language}`)
            .then(response => response.json())
            .then(data => {
                console.log('Profile data:', data);
                const profileName = document.querySelector('#profile h2');
                const profileBio = document.querySelector('#profile p');
                const skillsList = document.querySelector('#skills ul');
                const projectsSection = document.querySelector('#projects p');

                // add
                const about = document.querySelector('#about h2');
                const aboutInfo = document.querySelector('#about p');
                const skill = document.querySelector('#skills h2');
                const project = document.querySelector('#projects h2');
                const tilte = document.getElementById('title');

                if (profileName) profileName.textContent = data.name;
                if (profileBio) profileBio.textContent = data.bio;

                // add
                if (about) about.textContent = data.about;
                if (aboutInfo) aboutInfo.textContent = data.aboutInfo;
                if (skill) skill.textContent = data.skill;
                if (project) project.textContent = data.project;
                if (tilte) tilte.textContent = data.title;


                // Clear previous skills
                skillsList.innerHTML = '';
                data.skills.forEach(skill => {
                    const li = document.createElement('li');
                    li.textContent = skill;
                    skillsList.appendChild(li);
                });

                if (projectsSection) projectsSection.textContent = data.projects.join(', ');
            })
            .catch(error => console.error('Error loading profile:', error));
    }

    // 初期ロード時に日本語のプロフィールを読み込み
    loadProfile('ja');

    // ボタンのクリックイベントを設定
    document.getElementById('language-toggle').addEventListener('click', function() {
        const currentLanguage = this.textContent.includes('English') ? 'en' : 'ja';
        loadProfile(currentLanguage);

        // ボタンのテキストを変更
        this.textContent = currentLanguage === 'ja' ? 'To English' : '日本語に切り替え';
    });
});
