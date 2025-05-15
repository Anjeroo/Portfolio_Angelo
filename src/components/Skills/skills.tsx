import "./skills.css";

function Skills() {
  return (
    <div id="skillsDiv">
      <div id="skillTitle">
        <h1>Habilidades Técnicas </h1>
      </div>
      <div id="skillOrg">
        <div id="languagesDiv">
          <h2 className="languageTitle">Linguagens</h2>
          <div id="languages">
            <div className="skillIcon">
              <img src={`${import.meta.env.BASE_URL}assets/html.png`} alt="HTML" />
              <p className="languageText">HTML</p>
            </div>
            <div className="skillIcon">
              <img src={`${import.meta.env.BASE_URL}assets/CSS3.png`} alt="CSS3" />
              <p className="languageText">CSS</p>
            </div>
            <div className="skillIcon">
              <img src={`${import.meta.env.BASE_URL}assets/JavaScrip.png`} alt="JavaScript" />
              <p className="languageText">JavaScript</p>
            </div>
            <div className="skillIcon">
              <img src={`${import.meta.env.BASE_URL}assets/react.png`} alt="React" />
              <p className="languageText">React.JS</p>
            </div>
            <div className="skillIcon">
              <img src={`${import.meta.env.BASE_URL}assets/typeScript.png`} alt="TypeScript" />
              <p className="languageText">TypeScript</p>
            </div>
            <div className="skillIcon">
              <img src={`${import.meta.env.BASE_URL}assets/C.png`} alt="Linguagem C" />
              <p className="languageText">C</p>
            </div>
          </div>
        </div>
        <div id="toolsDiv">
          <h2 className="languageTitle">Ferramentas</h2>
          <div id="tools">
            <div className="skillIcon">
              <img src={`${import.meta.env.BASE_URL}assets/github.png`} alt="GitHub" />
              <p className="languageText">GitHub</p>
            </div>
            <div className="skillIcon">
              <img src={`${import.meta.env.BASE_URL}assets/vscode.png`} alt="VSCode" />
              <p className="languageText">VSCode</p>
            </div>
            <div className="skillIcon">
              <img src={`${import.meta.env.BASE_URL}assets/figma.png`} alt="Figma" />
              <p className="languageText">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Skills;
