// Importation du fichier CSS pour appliquer les styles externes au composant Button.
import "./Button.css"; 

// Définition du composant principal 'Button'
function Button() {
    return (
        <div className="button">  {/* Conteneur pour tous les boutons de projets */}
            <Gtosint />  {/* Rendu du projet GTOSINT */}
            <SlitherLink />  {/* Rendu du projet SLITHER LINK */}
        </div>
    );
}

// Définition du composant 'Gtosint' qui affiche les détails du projet GTOSINT
function Gtosint() {
    return (
        <div id="btn">  {/* Conteneur pour le projet GTOSINT, ID utilisé pour les styles */}
            <div className="project-btn">  {/* Carte contenant le projet GTOSINT */}
                <span className="title-b">GTOSINT 🌐</span><br /><br />  {/* Titre du projet */}
                <span className="btn-desc">
                    GTOsint est une application web permettant d'obtenir certaines informations de jeu d'un joueur <br />
                    à partir de son pseudo.
                </span>
                <br /><br />
                <a className="decouvrir" href="">Découvrir</a>  {/* Lien "Découvrir" pour en savoir plus */}
            </div>
        </div>
    );
}

// Définition du composant 'SlitherLink' qui affiche les détails du projet SLITHER LINK
function SlitherLink() {
    return (
        <div id="btn">  {/* Conteneur pour le projet SlitherLink, ID utilisé pour les styles */}
            <div className="project-btn">  {/* Carte contenant le projet SlitherLink */}
                <span className="title-b">SLITHER LINK 🐍</span><br /><br />  {/* Titre du projet */}
                <span className="btn-desc">
                    SLITHER LINK est un projet logiciel développé en Java, intégrant un système d'aide à la résolution.
                </span>
                <br /><br />
                <a className="decouvrir" href="">Découvrir</a>  {/* Lien "Découvrir" pour en savoir plus */}
            </div>
        </div>
    );
}

// Exportation du composant Button pour qu'il puisse être utilisé dans d'autres parties de l'application
export default Button;
