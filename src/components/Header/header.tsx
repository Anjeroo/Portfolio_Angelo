import "./header.css"

function Header() {
    return (
        <div className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li id="start"><a href="#user">Início</a></li>
                    <li id="academic"><a href="#formation">Formação Acadêmica</a></li>
                    <li id="skills"><a href="#skillsDiv">Habilidades Técnicas</a></li>
                    <li id="projects"><a href="#projectsDiv">Projetos</a></li>
                    <li id="about"><a href="#aboutDiv">Sobre</a></li>
                    <li id="contactNav"><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header