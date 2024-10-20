import "./skills.css";

function Skills() {
  return (
    <div id="skillsDiv">
      <div id="skillTitle">
        <h1>Habilidades Técnicas</h1>
      </div>
      <div id="skillOrg">
        <div id="languagesDiv">
          <h2 className="languageTitle">Linguagens</h2>
          <div id="languages">
            <div className="skillIcon" >
              <img src="/assets/html.png" />
              <p className="languageText">HTML</p>
            </div>
            <div className="skillIcon" >
              <img src="/assets/CSS3.png" />
              <p className="languageText">CSS</p>
            </div>
            <div className="skillIcon">
              <img src="/assets/JavaScrip.png" />
              <p className="languageText">JavaScript</p>
            </div>

            <div className="skillIcon">
              <img src="/assets/react.png" />
              <p className="languageText">React.JS</p>
            </div>
            <div className="skillIcon">
              <img src="/assets/typeScript.png" />
              <p className="languageText">TypeScript</p>
            </div>
            <div className="skillIcon">
              <img src="/assets/C.png" />
              <p className="languageText">C</p>
            </div>
          </div>

        </div>
        <div id="toolsDiv">
          <h2 className="languageTitle">Ferramentas</h2>
          <div id="tools">
            <div className="skillIcon">
              <img src="/assets/github.png" />
              <p className="languageText">GitHub</p>
            </div>
            <div className="skillIcon">
              <img src="/assets/vscode.png" />
              <p className="languageText">VSCode</p>
            </div>
            <div className="skillIcon">
              <img src="/assets/figma.png" />
              <p className="languageText">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
