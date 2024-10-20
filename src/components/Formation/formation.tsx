import "./formation.css";

function Formation() {
  return (
    <div id="formation">
      <div id="backgroundFormation">
        <div id="formationDiv">
          <div id="academicDiv">
            <h1 id="academicH1">Formação Acadêmica</h1>
          </div>
          <ul id="boll">
            <li className="text">
              <div id="college">
                <div className="schoolDiv">
                  <img className="schoolImg" src="/assets/unicesumar.jpg" />
                  <h2 className="schoolText">Unicesumar</h2>
                </div>
                <div className="collegeText">
                  <p>Análise e Desenvolvimento de Sistemas (EAD)</p>
                  <p>2024 - 2026</p>
                </div>
              </div>
            </li>
            <li className="text">
              <div id="school">
                <div className="schoolDiv">
                  <img className="schoolImg" src="/assets/etec.jpeg" />
                  <h2 className="schoolText">Etec Comendador João Rays</h2>
                </div>
                <div className="collegeText">
                  <p>Ensino Médio</p>
                  <p>2022</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <details id="details">
        <summary>
          <h2 id="summary">Certificações</h2>
        </summary>
        <div id="certificate">
          <div className="certificate">
            <div className="certificateGeneral">
              <h2>Imersão Front-End Alura</h2>
              <img className="certificates" src="/assets/CertificadoAlura.jpg" alt="Certificado Alura" />
              <p className="date">Alura (2024)</p>
            </div>
            <div className="technology">
              <h3>Tecnologias:</h3>
              <ul className="list">
                <li><img src="/assets/html.png" /></li>
                <li><img src="/assets/CSS3.png" /></li>
                <li><img src="/assets/JavaScrip.png" /></li>
                <li><img src="/assets/typeScript.png" /></li>
                <li><img src="/assets/react.png" /></li>
                <li><img src="/assets/github.png" /></li>
              </ul>
            </div>
          </div>
          <div className="certificate">
            <div className="certificateGeneral">
              <h2>HTML e CSS</h2>
              <img className="certificates" src="/assets/CertificadoDNC.jpg" />
              <p className="date">Escola DNC (2023)</p>
            </div>
            <div className="technology">
              <h3>Tecnologias:</h3>
              <ul className="list">
                <li><img src="/assets/html.png" /></li>
                <li><img src="/assets/CSS3.png" /></li>
                <li><img src="/assets/figma.png" /></li>
                <li><img src="/assets/github.png" /></li>
              </ul>
            </div>
          </div>
          <div className="certificate">
            <div className="certificateGeneral">
              <h2>Aprenda JavaScript em 7 dias</h2>
              <img className="certificates" src="/assets/CertificadoAprenDaJavaScriptEm7Dias.jpg" />
              <p className="date">Udemy (2023)</p>
            </div>
            <div className="technology">
              <h3>Tecnologias:</h3>
              <ul className="list">
                <li><img src="/assets/JavaScrip.png" /></li>
                <li><img src="/assets/html.png" /></li>
              </ul>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}

export default Formation;
