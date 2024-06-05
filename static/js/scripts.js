document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/profile')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#profile h2').textContent = data.name;
            document.querySelector('#profile p').textContent = data.bio;
            
            const skillsList = document.querySelector('#skills ul');
            data.skills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });

            const projectsSection = document.querySelector('#projects p');
            projectsSection.textContent = data.projects.join(', ');
        });
});
