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
              <a className="icon" id="linkedin" href="https://www.linkedin.com/in/anjero/"
                target="_blank"><span className="hiddable_tooltip">LinkedIn</span><img
                  src="/assets/link.png" /></a>
              <a className="icon" id="git" href="https://github.com/Anjeroo" target="_blank"><span
                className="hiddable_tooltip">GitHub</span><img src="/assets/git.png" /></a>
              <a className="icon" target="_blank" id="paper"
                href="https://drive.google.com/file/d/176DTzyPhR9ilARRxVBuIqOhQi57TIHZJ/view"><span
                  className="hiddable_tooltip">Currículo</span><img src="/assets/page.png" /></a>
            </div>
          </div>
        </div>
      </div>
      <div id="angeloDiv">
        <img src="/assets/Angelo.jpg" id="angelo" />
        <div>
          <h3 id="exp">
            Tenho 19 anos e sou Desenvolvedor
            <br />Front-End frelancer.
          </h3>
        </div>
      </div>

    </div>
  );
}

export default Cabecalho;
