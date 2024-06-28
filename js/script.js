document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        {title: "Wordwall - Impersonali", url: 'topics/Wordwall/Impersonali.html'},
        {title: "Flippity - Alle poste", url: 'topics/Flippity/Alle_poste.html'},
        {title: "Impariamo Italiano - Imperfetto", url: 'topics/Impariamo_Italiano/Imperfetto.html'},
        {title: "Pubblicità - Imperfetto di cortesia", url: 'topics/Pubblicità/Imperfetto_di_cortesia.html'},
        {title: "Dieci - Videocorso A2 Come eravamo", url: 'topics/Dieci/Videocorso_A2_Come_eravamo.html'},
        {title: "Alma TV - C'ero prima io", url: 'topics/Alma_TV/Cero_prima_io.html'},
        {title: "Wordwall - Passato Prossimo", url: 'topics/Wordwall/Passato_Prossimo.html'},
        {title: "Italiano in Onda - Gerundio Passato", url: 'topics/Italiano_in_Onda/Gerundio_Passato.html'},
        {title: "Wordwall - La mia scuola", url: 'topics/Wordwall/La_mia_scuola.html'},
        {title: "Wordwall - Articoli Indeterminativi", url: 'topics/Wordwall/Articoli_Indeterminativi.html'},
        {title: "Dieci - Videocorso A1 Benvenuti", url: 'topics/Dieci/Videocorso_A1_Benvenuti.html'},
        {title: "Flippity - Domande presentazioni", url: 'topics/Flippity/Domande_presentazioni.html'},
        {title: "Flippity - Domande presentazioni", url: 'topics/Flippity/Domande_presentazioni.html'},
        {title: "Karissa - Riccioli Doro frasi", url: 'topics/Karissa/Riccioli_Doro_frasi.html'},
        {title: "Karissa - Riccioli Doro parole", url: 'topics/Karissa/Riccioli_Doro_parole.html'},
        {title: "Karissa - Riccioli Doro parole quiz", url: 'topics/Karissa/Riccioli_Doro_parole_quiz.html'},
        {title: "Flippity - Internet cafe", url: 'topics/Flippity/Internet_cafe.html'},
        {title: "Wordwall - Presente indicativo", url: 'topics/Wordwall/Presente_indicativo.html'},
        {title: "Test - Pagina con esercizi", url: 'topics/Test/Pagina_con_esercizi.html'},
        {title: "Test - Flippity", url: 'topics/Test/Flippity.html'},
        {title: "Test - Flippity 2", url: 'topics/Test/Flippity_2.html'},
        {title: "Karissa - Personalità, aspetto, emozioni", url: 'topics/Karissa/Personalità_aspetto_emozioni.html'}
    ];

    const categories = {};

    // Group and sort the courses
    courses.forEach(course => {
        const categoryName = course.title.split(' - ')[0]; // Split on ' - ' and take the first part
        if (!categories[categoryName]) {
            categories[categoryName] = [];
        }
        categories[categoryName].push(course);
    });

    const container = document.getElementById('course-container');
    Object.keys(categories).sort().forEach(categoryName => {
        const section = document.createElement('div');
        section.className = 'category-section';
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = categoryName;
        categoryTitle.className = 'category-title';
        section.appendChild(categoryTitle);

        categories[categoryName].sort((a, b) => a.title.localeCompare(b.title)); // Sort courses within each category
        categories[categoryName].forEach(course => {
            const div = document.createElement('div');
            div.className = 'course';
            div.textContent = course.title.split(' - ')[1]; // Display only the part after ' - '
            div.onclick = function() { window.location.href = course.url; };
            section.appendChild(div);
        });

        container.appendChild(section);
    });
});
