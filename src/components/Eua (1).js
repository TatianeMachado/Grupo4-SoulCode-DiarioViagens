import Comentario from "./Comentario";
const Eua = () => {
  return (
    <>
      <section>
        <div className="container-principal">
          <div className="container-itens">
            <h4>Estados Unidos</h4>
            <img
              className="img-cidades"
              src="./imgMundo/cardnova-york.jpg"
              alt=""
            />

            <h2>Estados Unidos</h2>

            <p>
              O turismo nos Estados Unidos é uma indústria de grande relevância
              e atrai milhões de visitantes de todo o mundo a cada ano. Este
              vasto país oferece uma ampla gama de experiências, desde cidades
              vibrantes e icônicas até parques nacionais deslumbrantes e uma
              rica diversidade cultural. Aqui estão alguns aspectos importantes
              do turismo nos EUA:
            </p>

            <h2>Destinos Icônicos</h2>

            <p>
              Os Estados Unidos são lar de cidades famosas e icônicas, como Nova
              York, Los Angeles, Miami, Las Vegas, Chicago e San Francisco. Cada
              uma dessas cidades tem sua própria personalidade e atrações
              únicas, desde arranha-céus emblemáticos até praias ensolaradas e
              entretenimento de classe mundial.
            </p>

            <h2>Parques Nacionais</h2>
            <p>
              Os EUA possuem uma vasta rede de parques nacionais, florestas e
              monumentos que oferecem algumas das paisagens naturais mais
              impressionantes do mundo. O Grand Canyon, o Parque Nacional de
              Yellowstone, o Parque Nacional de Yosemite e muitos outros
              proporcionam oportunidades para caminhadas, observação da vida
              selvagem e aventuras ao ar livre.
            </p>

            <h2>Atrações Culturais</h2>
            <p>
              O país oferece uma infinidade de atrações culturais, desde museus
              de arte renomados, como o Museu de Arte Moderna (MoMA) e o
              Instituto de Arte de Chicago, até marcos históricos, como o
              Memorial Lincoln e a Ilha de Ellis, que representam a história e a
              imigração nos Estados Unidos.
            </p>

            <h2>Eventos e Festivais</h2>
            <p>
              Os EUA sediam uma variedade de eventos e festivais durante o ano.
              O Carnaval de Mardi Gras em Nova Orleans, o Super Bowl, a Semana
              de Moda de Nova York, o Festival de Cinema de Sundance e a
              celebração do 4 de Julho (Dia da Independência) são apenas alguns
              exemplos das festividades que atraem multidões.
            </p>

            <h2>Culinária Diversificada</h2>
            <p>
              {" "}
              A culinária americana é tão diversificada quanto sua população. Os
              visitantes podem desfrutar de uma grande variedade de pratos,
              desde hambúrgueres e fast-food até a gastronomia internacional,
              influenciada por comunidades étnicas em todo o país. A culinária
              do sul dos EUA, com pratos como frango frito e churrasco, é
              especialmente notável.
            </p>

            <p>
              O turismo nos Estados Unidos é uma indústria vital que oferece uma
              ampla gama de experiências para todos os gostos e interesses. Seja
              explorando a vida urbana emocionante, a beleza natural imponente
              ou a riqueza cultural, os EUA têm algo a oferecer a cada viajante.
            </p>
          </div>
          <Comentario />
        </div>
      </section>
    </>
  );
};
export default Eua;
