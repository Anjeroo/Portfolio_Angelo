import "./projects.css";

function Projects() {
  return (
    <div id="projectsDiv">
      <h1 id="projectTitle">Projetos</h1>
      <div id="projectInfo">
        <div className="projectInfo">
          <a href="https://dev-frases-drab.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img 
              className="projectImg" 
              src={`${import.meta.env.BASE_URL}assets/devFrasesProject.png`} 
              alt="Projeto Dev Frases" 
            />
          </a>
          <p className="projectText">
            Um projeto produzido com o objetivo de fixar o uso do "UseState" no React.js
          </p>
          <div className="languageIcon">
            <img src={`${import.meta.env.BASE_URL}assets/react.png`} alt="React" />
            <img src={`${import.meta.env.BASE_URL}assets/typeScript.png`} alt="TypeScript" />
            <img src={`${import.meta.env.BASE_URL}assets/html.png`} alt="HTML" />
            <img src={`${import.meta.env.BASE_URL}assets/CSS3.png`} alt="CSS3" />
          </div>
        </div>
        <div className="projectInfo">
          <a href="https://cripto-rose.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img 
              className="projectImg" 
              src={`${import.meta.env.BASE_URL}assets/criptoimg.jpeg`} 
              alt="Projeto Cripto Rose" 
            />
          </a>
          <p className="projectText">
            Uma página web projetada para exibir informações sobre criptomoedas, utilizando uma API de forma responsiva e dinâmica.
          </p>
          <div className="languageIcon">
            <img src={`${import.meta.env.BASE_URL}assets/react.png`} alt="React" />
            <img src={`${import.meta.env.BASE_URL}assets/typeScript.png`} alt="TypeScript" />
            <img src={`${import.meta.env.BASE_URL}assets/CSS3.png`} alt="CSS3" />
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Projects;
