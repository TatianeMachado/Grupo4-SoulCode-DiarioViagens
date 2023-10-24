import Comentario from "./Comentario";
const Grecia = () => {
  return (
    <>
      <section>
        <div className="container-principal">
          <div className="container-itens">
            <h4>Hungria</h4>
            <img
              className="img-cidades"
              src="./imgMundo/cardHungria.jpg"
              alt=""
            />

            <h2>Hungria</h2>

            <p>
              A Hungria, situada no coração da Europa Central, é um país com uma
              rica história, cultura vibrante e paisagens deslumbrantes. Vamos
              explorar alguns aspectos importantes sobre a Hungria:
            </p>

            <h2>Localização e Geografia</h2>

            <p>
              {" "}
              A Hungria está localizada na Europa Central, fazendo fronteira com
              sete países: Áustria, Eslováquia, Ucrânia, Romênia, Sérvia,
              Croácia e Eslovênia. O rio Danúbio atravessa o país, dividindo a
              capital, Budapeste, em duas partes, Buda e Peste. A paisagem
              húngara é diversificada, incluindo planícies férteis, montanhas e
              vales pitorescos.
            </p>

            <h2>História</h2>
            <p>
              A história da Hungria é marcada por momentos de grande influência
              e independência, bem como períodos de ocupação estrangeira. O país
              foi parte do Império Austro-Húngaro durante o século XIX e início
              do século XX. Após a Primeira Guerra Mundial, a Hungria se tornou
              uma república independente. Durante a Segunda Guerra Mundial, o
              país foi ocupado pelos nazistas e, posteriormente, pelos
              soviéticos. A Revolução Húngara de 1956 é um evento importante na
              história moderna do país.
            </p>

            <h2>Cultura e Patrimônio</h2>
            <p>
              A Hungria tem uma rica cultura que abrange música, dança,
              culinária e artes. A música húngara é famosa por suas influências
              folclóricas, com compositores notáveis como Béla Bartók e Franz
              Liszt. A dança húngara, incluindo o famoso "Csárdás," é uma parte
              fundamental da cultura local. A culinária húngara é conhecida por
              pratos como o goulash, paprika e strudel..
            </p>

            <h2>Budapeste</h2>
            <p>
              A capital da Hungria, Budapeste, é uma das cidades mais belas da
              Europa. Ela é famosa por suas pontes, banhos termais, a ópera
              estatal e a arquitetura esplêndida, incluindo o imponente edifício
              do Parlamento e o Castelo de Buda. O rio Danúbio, que divide a
              cidade, oferece uma vista deslumbrante das luzes noturnas de
              Budapeste.
            </p>

            <h2>Banhos Termais</h2>
            <p>
              {" "}
              A Hungria é conhecida por seus banhos termais, que têm uma longa
              tradição. Os banhos termais em Budapeste, como os Banhos Gellért e
              os Banhos Széchenyi, são populares tanto entre os locais quanto
              entre os turistas. Eles oferecem relaxamento e bem-estar em águas
              quentes ricas em minerais.
            </p>

            <p>
              A Hungria é um país com uma herança cultural única, uma história
              complexa e belezas naturais notáveis. Sua capital, Budapeste, é um
              dos principais destinos turísticos na Europa, e o país oferece uma
              experiência diversificada e enriquecedora para quem o visita.
            </p>
          </div>
          <Comentario />
        </div>
      </section>
    </>
  );
};
export default Grecia;
