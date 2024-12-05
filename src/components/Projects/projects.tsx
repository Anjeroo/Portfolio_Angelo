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
          <a href="https://cripto-rose.vercel.app/" target="_blank"><img className="projectImg"
            src="/assets/criptoimg.jpeg" /></a>
          <p className="projectText">Uma página web projetada para exibir informações sobre criptomoedas, utilizando uma API de forma responsiva e dinâmica.
          </p>
          <div className="languageIcon">
            <img src="/assets/react.png" />
            <img src="/assets/typeScript.png" />
            <img src="/assets/CSS3.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
