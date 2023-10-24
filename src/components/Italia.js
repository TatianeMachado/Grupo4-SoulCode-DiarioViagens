import Comentario from "./Comentario";
const Italia = () => {
  return (
    <>
      <section>
        <div className="container-principal">
          <div className="container-itens">
            <h4>Itália</h4>
            <img
              className="img-cidades"
              src="./imgMundo/cardItalia.jpg"
              alt=""
            />

            <h2>Itália</h2>

            <p>
              A Itália, localizada na região sul da Europa, é um país conhecido
              por sua rica história, cultura, arte, culinária e paisagens
              deslumbrantes. Aqui estão alguns aspectos importantes sobre a
              Itália:
            </p>

            <h2>História e Herança Cultural</h2>

            <p>
              A Itália é o berço do Império Romano, uma das civilizações mais
              influentes da história. Roma, a capital, desempenhou um papel
              fundamental no desenvolvimento da civilização ocidental. O país
              também é o lar de cidades-estado renomadas, como Veneza, Florença
              e Milão, que desempenharam um papel importante no Renascimento, um
              período marcado por avanços nas artes e ciências.
            </p>

            <h2>Arte e Arquitetura</h2>
            <p>
              A Itália é famosa por sua contribuição à arte e à arquitetura. O
              país é o lar de obras-primas de renome mundial, como a Basílica de
              São Pedro no Vaticano, o David de Michelangelo, a Capela Sistina
              de Michelangelo, a Catedral de Florença e o Coliseu de Roma.
            </p>

            <h2>Patrimônio Histórico</h2>
            <p>
              A Itália é lar de um grande número de locais reconhecidos pela
              UNESCO como Patrimônio Mundial da Humanidade, incluindo Pompéia, o
              Centro Histórico de Roma, os Sítios Palladianos de Vicenza e
              Veneto, e muitos outros..
            </p>

            <h2>Vaticano</h2>
            <p>
              Situado no coração de Roma, o Vaticano é o menor Estado
              independente do mundo e o centro espiritual da Igreja Católica.
              Abriga a Basílica de São Pedro, a Capela Sistina e os Museus do
              Vaticano.
            </p>

            <h2>Cultura e Festivais</h2>
            <p>
              {" "}
              A Itália é conhecida por seus festivais e celebrações, incluindo o
              Carnaval de Veneza, a regata histórica de Siena, o Festival de
              Cinema de Veneza e a tradicional festa de San Gennaro em Nápoles.
            </p>

            <p>
              A Itália é um país que oferece uma rica experiência cultural e
              histórica, uma variedade de paisagens naturais deslumbrantes e uma
              culinária de renome mundial. É um destino que atrai visitantes de
              todo o mundo, proporcionando uma mistura única de história, arte,
              moda, gastronomia e beleza natural.
            </p>
          </div>
          <Comentario />
        </div>
      </section>
    </>
  );
};
export default Italia;
