import "./projects.css";

function Projects() {
  return (
    <div id="projectsDiv">
      <h1 id="projectTitle">Projetos</h1>
      <div id="projectInfo">
        <div className="projectInfo">
          <a href="https://dev-frases-drab.vercel.app/" target="_blank"><img className="projectImg"
            src="/assets/devFrasesProject.png" /></a>
          <p className="projectText">Um projeito produzido com o objetivo de fixar o uso do "UseState"
            no React.js</p>
          <div className="languageIcon">
            <img src="/assets/react.png" />
            <img src="/assets/typeScript.png" />
            <img src="/assets/html.png" />
            <img src="/assets/CSS3.png" />
          </div>
        </div>
        <div className="projectInfo">
          <a href="https://spotify-clone-sepia-ten.vercel.app/" target="_blank"><img className="projectImg"
            src="/assets/spotify_Clone.png" /></a>
          <p className="projectText">Meu projeto mais complexo que visa recriar a interface e funcionalidade do Spotify,
            feito através da Imersão Alura
          </p>
          <div className="languageIcon">
            <img src="/assets/react.png" />
            <img src="/assets/html.png" />
            <img src="/assets/JavaScrip.png" />
            <img src="/assets/CSS3.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
