// Importation des fichiers CSS et des images nécessaires pour le Header
import "./Header.css";  // Fichier CSS pour le style du header
import git from '../assets/github.png';  // Image pour le logo GitHub
import Linkedn from '../assets/linkdn.webp';  // Image pour le logo LinkedIn

// Composant principal 'Header' qui affiche le nom, les liens sociaux et la bio
function Header() {
    return (
        <div className="head">  {/* Conteneur principal du header */}
            <h1 id="name">Ayoub Laaribi 🚀</h1>  {/* Affichage du nom avec un emoji */}
            <Link />  {/* Composant pour afficher les liens sociaux */}
            <Bio />  {/* Composant pour afficher la bio */}
        </div>
    );
}

// Composant 'Bio' qui affiche une courte présentation de la personne
function Bio() {
    return (
        <div id="bio">  {/* Conteneur de la bio */}
            <p>
                Bonjour et bienvenue !<br />
                Je m'appelle Ayoub, j'ai 21 ans et je suis passionné par le développement informatique.<br />
                Sur ce portfolio, vous trouverez tous mes projets, qu'ils soient web ou logiciels.<br />
                N'hésitez pas à me contacter via mes différents réseaux sociaux !
            </p>
        </div>
    );
}

// Composant 'Link' qui affiche les liens vers les profils LinkedIn et GitHub
function Link() {
    return (
        <div className="link-container">  {/* Conteneur des liens sociaux */}
            {/* Lien vers LinkedIn */}
            <a href="https://www.linkedin.com/in/ayoub-laaribi-a3b1aa230/" target="_blank" rel="noopener noreferrer">
                <img id="l" src={Linkedn} alt="LinkedIn Ayoub" />  {/* Image du logo LinkedIn */}
            </a>
            {/* Lien vers GitHub */}
            <a href="https://github.com/AyoubV11" target="_blank" rel="noopener noreferrer">
                <img id="git" src={git} alt="GitHub Ayoub" />  {/* Image du logo GitHub */}
            </a>
        </div>
    );
}

// Exportation du composant Header pour qu'il puisse être utilisé dans d'autres parties de l'application
export default Header;
