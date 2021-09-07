class Matiere{
    constructor(name, chapters, filepath){
        this.self = document.createElement('li');
        this.self.classList.add('matiere');
        let a = document.createElement('a');
        a.classList.add('matiere-name');
        a.href = filepath;
        a.textContent = name;
        this.self.appendChild(a);
        let ul = document.createElement('ul')
        chapters.forEach(chapter => {
            ul.appendChild(chapter.self);
        });
        this.self.appendChild(ul);
    }
}

class Chapter{
    constructor(name, filepath){
        this.self = document.createElement('li');
        this.self.classList.add('chapter');
        let a = document.createElement('a');
        a.href=filepath;
        a.textContent = name;
        this.self.appendChild(a);
    }
}


const nav = document.querySelector("header nav ul");
let mathChapters = [
    new Chapter('Nombres Calculs', '../maths/nombres-calculs.html'),
    new Chapter('Repérage Plan', '../maths/rep-plan.html'),
    new Chapter('Intervalles', ''),
    new Chapter('Fonctions', ''),
    new Chapter('équations', ''),
    new Chapter('Fonctions Réf', ''),
    new Chapter('Vecteurs', ''),
    new Chapter('Résolutions Graphiques', ''),
    new Chapter('Probabilités', ''),
    new Chapter('Sens variation', ''),
    new Chapter('Pourcentage évolution', ''),
    new Chapter('Fonction affine', ''),
    new Chapter('Signe Fonction', ''),
    new Chapter('Vecteur X Réel', ''),
    new Chapter('équation droite', ''),
    new Chapter('Signe Fonction Ref', '')
];

let frenchChapters=[
    new Chapter('Commentaire composé', '../fr/')
];

let historyChapters = [
    new Chapter('L\'ouverture Atlantique', '../hist/')
];

let geographyChapters = [
    new Chapter('Urbanisation', '../geo/')
];

let pcChapters = [
    new Chapter('Transformations', '../phys-chim/')
];

let sesChapters = [
    new Chapter('Les Marchés', '../ses/')
];

let math = new Matiere('Mathématiques', mathChapters, '../maths/math.html');
let french = new Matiere('Français', frenchChapters, '../fr/');
let history = new Matiere('Histoire', historyChapters, '../hist/');
let geography = new Matiere('Géographie', geographyChapters, '../geo/');
let pc = new Matiere('Physique Chimie', pcChapters, '../phys-chim/');
let ses = new Matiere('SES', sesChapters, '../ses/')
let matieres = [math, french, history, geography, pc, ses];
matieres.forEach(matiere => {
    nav.appendChild(matiere.self);
});

const button = document.getElementById('to-top');
button.addEventListener('click', (e) => {
    window.scrollTo(0,0);
})