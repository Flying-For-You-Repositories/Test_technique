import figmaOrNotFigma from '../../img/Figma c mieux.png'

const MoviesList = () => {
    return (
        <div style={{ display: "flex", flex: 1, height: "100vh", justifyContent: "center"}}>
            <div style={{ position: "relative", alignSelf: "center", justifyContent: "center", textAlign: "center", padding: 50, border: "1px solid black", borderRadius: 25}}>
                <div style={{ marginBottom: 70 }}>Avant de continuer essai de mettre un peu d'ordre dans les fichiers vue précemment et de styliser le tout a ta manière</div>
                <div>Bon aller on rentre dans le vif du sujet !</div>
                <div style={{ margin: "30px 0" }}>Dans un fichier de config tu trouvera une liste de films avec des informations</div>
                <div>J'aimerai que tu m'affiche cette liste sous forme de grille et que tu implemente un système de filtre </div>
                <div>Les informations de cette liste ne doivent pas etre visible sur la grille mais apparaitre quand l'on clic dessus sous forme de modal</div>
                <div style={{ margin: "10px 0" }}>Tu peut t'aider de ces superbe dessins fait par mes soins comme base pour le design</div>
                <img src={figmaOrNotFigma}/>
                <div>Mais evidemment tu est totalement libre de faire comme tu le souhaite alors épate moi ;)</div>
                <div style={{ marginTop: 40 }}>Bonus +++ :</div>
                <div>Enregistre dans redux un tableau des ids des films que tu aura la possibilité de liker ou de delike !</div>
            </div>
        </div>
    )
}

export default MoviesList