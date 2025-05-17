import "./cabecalho.css";

function Cabecalho() {
  return (
    <div className="cabecalho">
      <div id="user">
        <div>
          <div className="apresentation">
            <div>
              <h2 id="name">OLÁ<span id="emoji">👋</span>, MEU NOME É ÂNGELO</h2>
            </div>
            <div id="title">
              <h1 className="dev">
                FRONT-END<br />
                DEVELOPER
              </h1>
            </div>
          </div>
          <div>
            <div id="img">
              <a
                className="icon"
                id="linkedin"
                href="https://www.linkedin.com/in/anjero/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="hiddable_tooltip">LinkedIn</span>
                <img src={`${import.meta.env.BASE_URL}assets/link.png`} alt="LinkedIn" />
              </a>
              <a
                className="icon"
                id="git"
                href="https://github.com/Anjeroo"
                target="_blank"
                rel="noreferrer"
              >
                <span className="hiddable_tooltip">GitHub</span>
                <img src={`${import.meta.env.BASE_URL}assets/git.png`} alt="GitHub" />
              </a>
              <a
                className="icon"
                target="_blank"
                id="paper"
                href="https://drive.google.com/file/d/1h_PVSTkDQWf7Qw4J2JBwiaxmHYkqg1ot/view?usp=sharing"
                rel="noreferrer"
              >
                <span className="hiddable_tooltip">Currículo</span>
                <img src={`${import.meta.env.BASE_URL}assets/page.png`} alt="Currículo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="angeloDiv">
        <img src={`${import.meta.env.BASE_URL}assets/angelo.jpg`} id="angelo" alt="Ângelo" />
        <div>
          <h3 id="exp">
            Tenho 19 anos e sou um Desenvolvedor
            <br />Front-End frelancer.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Cabecalho;
