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
                  <img
                    className="schoolImg"
                    src={`${import.meta.env.BASE_URL}assets/unicesumar.jpg`}
                    alt="Unicesumar"
                  />
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
                  <img
                    className="schoolImg"
                    src={`${import.meta.env.BASE_URL}assets/etec.jpeg`}
                    alt="Etec Comendador João Rays"
                  />
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
              <img
                className="certificates"
                src={`${import.meta.env.BASE_URL}assets/CertificadoAlura.jpg`}
                alt="Certificado Alura"
              />
              <p className="date">Alura (2024)</p>
            </div>
            <div className="technology">
              <h3>Tecnologias:</h3>
              <ul className="list">
                <li>
                  <img src={`${import.meta.env.BASE_URL}assets/html.png`} alt="HTML" />
                </li>
                <li>
                  <img src={`${import.meta.env.BASE_URL}assets/CSS3.png`} alt="CSS3" />
                </li>
                <li>
                  <img src={`${import.meta.env.BASE_URL}assets/JavaScrip.png`} alt="JavaScript" />
                </li>
                <li>
                  <img src={`${import.meta.env.BASE_URL}assets/typeScript.png`} alt="TypeScript" />
                </li>
                <li>
                  <img src={`${import.meta.env.BASE_URL}assets/react.png`} alt="React" />
                </li>
                <li>
                  <img src={`${import.meta.env.BASE_URL}assets/github.png`} alt="GitHub" />
                </li>
              </ul>
            </div>
          </div>
          <div className="certificate">
            <div className="certificateGeneral">
              <h2>HTML e CSS</h2>
              <img
                className="certificates"
                src={`${import.meta.env.BASE_URL}assets/CertificadoDNC.jpg`}
                alt="Certificado DNC"
              />
              <p className="date">Escola DNC (2023)</p>
            </div>
            <div className="technology">
              <h3>Tecnologias:</h3>
              <ul className="list">
                <li>
                  <img src={`${import.meta.env.BASE_URL}assets/html.png`} alt="HTML" />
                </li>
                <li>
                  <img src={`${import.meta.env.BASE_URL}assets/CSS3.png`} alt="CSS3" />
                </li>
                <li>
                  <img src={`${import.meta.env.BASE_URL}assets/figma.png`} alt="Figma" />
                </li>
                <li>
                  <img src={`${import.meta.env.BASE_URL}assets/github.png`} alt="GitHub" />
                </li>
              </ul>
            </div>
          </div>
          <div className="certificate">
            <div className="certificateGeneral">
              <h2>Aprenda JavaScript em 7 dias</h2>
              <img
                className="certificates"
                src={`${import.meta.env.BASE_URL}assets/CertificadoAprenDaJavaScriptEm7Dias.jpg`}
                alt="Certificado Aprenda JavaScript em 7 dias"
              />
              <p className="date">Udemy (2023)</p>
            </div>
            <div className="technology">
              <h3>Tecnologias:</h3>
              <ul className="list">
                <li>
                  <img src={`${import.meta.env.BASE_URL}assets/JavaScrip.png`} alt="JavaScript" />
                </li>
                <li>
                  <img src={`${import.meta.env.BASE_URL}assets/html.png`} alt="HTML" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
  
}

export default Formation;
