import "./projects.css";

function Projects() {
  return (
    <div id="projectsDiv">
      <h1 id="projectTitle">Projetos</h1>
      <div id="projectInfo">
        <div className="projectInfo">
          <a href="https://anjeroo.github.io/Portifolio/" target="_blank"><img className="projectImg"
            src="/assets/portifolio_Dnc.png" /></a>
          <p>Meu primeiro projeto criado, um exemplo de<br /> portifolio profissional, produzido do
            curso HTML e<br /> CSS da Escola DNC</p>
          <div className="languageIcon">
            <img src="/assets/html.png" />
            <img src="/assets/CSS3.png" />
            <img src="/assets/figma.png" />
          </div>
        </div>
        <div className="projectInfo">
          <a href="https://spotify-clone-sepia-ten.vercel.app/" target="_blank"><img className="projectImg"
            src="/assets/spotify_Clone.png" /></a>
          <p>Meu projeto mais complexo que visa recriar a <br /> interface e funcionalidade do Spotify,
            feito através <br /> da Imersão Alura
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
