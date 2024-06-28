document.addEventListener('DOMContentLoaded', function() {
    fetch('topics.json')
        .then(response => response.json())
        .then(courses => {
            const container = document.getElementById('course-container');
            Object.keys(courses).sort().forEach(categoryName => {
                const section = document.createElement('div');
                section.className = 'category-section';
                const categoryTitle = document.createElement('h2');
                categoryTitle.textContent = categoryName;
                categoryTitle.className = 'category-title';
                section.appendChild(categoryTitle);

                courses[categoryName].sort().forEach(course => {
                    const div = document.createElement('div');
                    div.className = 'course';
                    div.textContent = course.replace(/_/g, ' ');
                    div.onclick = function() { window.location.href = `topics/${categoryName}/${course}.html`; };
                    section.appendChild(div);
                });

                container.appendChild(section);
            });
        })
        .catch(error => console.error('Error fetching the topics:', error));
});
