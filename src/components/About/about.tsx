import "./about.css";

function About() {
  return (
    <div id="aboutDiv">
      <div id="me">
        <h1 className="aboutTitle">Sobre Mim</h1>
        <p id="history">
          Meu nome é Ângelo Gabriel, e sempre tive muito contato com computadores desde sempre, então,
          sempre quis poder trabalhar com algo que amo tanto, e a produção<br /> deste portifolio é a minha
          chance de mostrar minha dedicaçao e empenho, e quem realmente eu sou e o que posso proporcionar
          a
          um ambiente de trabalho. <br /><br />

          E meu maior objetivo profissional atualmente é poder atuar como estágio em alguma empresa como
          um
          desenvolvedor Front-End, podendo explorar todo o meu<br /> potencial e poder ver meu esforço dando
          os
          seus primeiros frutos!
        </p>
      </div>
      <div id="experience">
        <h1 className="aboutTitle">Outras experiências</h1>
        <div className="works">
          <h2 className="workTitle"><img src="/assets/fernandes.jpg" className="workIcon" />Fernandes | Atualmente</h2>
          <h3 className="function">Repositor de Mercadorias</h3>
        </div>
        <div className="works">
          <h2 className="workTitle"><img src="/assets/confianca.png" className="workIcon" />Confiança | 6 meses</h2>
          <h3 className="function">Operador de Loja</h3>
        </div>
        <div className="works">
          <h2 className="workTitle"><img src="/assets/concilig.jpg" className="workIcon" />Concilig | 3 meses</h2>
          <h3 className="function">Operador de Telemarketing</h3>
        </div>
        <div className="works">
          <h2 className="workTitle"><img src="/assets/arteskan.jpeg" className="workIcon" />ArtesKan | 6 meses</h2>
          <h3 className="function">Marcenaria e Acabamentos</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
