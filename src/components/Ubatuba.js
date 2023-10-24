import "../components/Ubatuba.css";
import Comentario from "./Comentario";
const Ubatuba = () => {
  return (
    <>
      <section>
        <div className="container-principal">
          <div className="container-itens">
            <h4> Ubatuba, SP</h4>
            <img className="img-cidades" src="./imgBrasil/cardUbatuba.jpg" alt="" />

            <h2>Ubatuba: O Paraíso do Litoral Norte de São Paulo</h2>
            <p>
            Ubatuba, localizada no litoral norte do estado de São Paulo, é um destino que se destaca pela sua diversidade natural e beleza cênica. Conhecida como a "Capital Paulista do Surf," a cidade é muito mais do que suas praias famosas; é um paraíso para os amantes da natureza, da cultura e da culinária.
            </p>
            <h4>Praias e Natureza</h4>

            <p>
            Ubatuba possui mais de 100 praias ao longo de seus 80 km de costa. Cada praia tem seu próprio charme, oferecendo desde ondas perfeitas para o surf até enseadas tranquilas e piscinas naturais. Praias como Itamambuca, Praia Vermelha do Norte e Felix são destinos populares para os surfistas, enquanto praias como Lázaro, Domingas Dias e Prumirim são ideais para famílias em busca de águas mais calmas.
            Além das praias, a cidade abriga uma rica biodiversidade, com diversas trilhas ecológicas que levam a cachoeiras deslumbrantes e mirantes com vistas panorâmicas. O Parque Estadual da Serra do Mar, que abrange parte do município, é um verdadeiro tesouro natural.
            </p>

            <h4>Cultura e História</h4>
            <p>
            A cultura de Ubatuba é enriquecida por suas raízes caiçaras e quilombolas. Ao explorar a cidade, você encontrará comunidades que preservam tradições locais, incluindo a pesca artesanal e a produção de artesanato. Visite o Quilombo da Fazenda, onde você pode aprender sobre a história e a cultura afro-brasileira.
            O Centro Histórico de Ubatuba é outro destaque, com construções antigas e charmosas que remontam aos tempos coloniais. A Igreja Matriz de Ubatuba, construída no século XVII, é um exemplo notável da arquitetura histórica da cidade.
            </p>

            <h4>Culinária</h4>
            <p>
            A culinária de Ubatuba é uma celebração dos sabores do mar. A cidade oferece uma ampla variedade de restaurantes e quiosques à beira-mar, onde você pode degustar pratos de frutos do mar frescos e deliciosos. Experimente o famoso "arroz com frutos do mar" ou prove a tradicional moqueca caiçara.
            </p>

            <h4>Atividades Aquáticas</h4>
            <p>
            Além do surf, Ubatuba é um destino ideal para outras atividades aquáticas, como mergulho e passeios de barco. O mergulho em Ubatuba é uma experiência única, com a oportunidade de explorar recifes de corais e naufrágios que abrigam uma rica vida marinha.
            </p>
            
            <p>
            Ubatuba é mais do que um destino de praia; é uma jornada de descoberta que combina a beleza natural com a riqueza da cultura local. Explore suas praias, mergulhe em suas águas cristalinas, conheça suas comunidades e desfrute de uma deliciosa culinária. Ubatuba é um convite para se conectar com a natureza e se encantar com as maravilhas do litoral norte de São Paulo.    
            </p>
          </div>
          <Comentario />
        </div>
      </section>
    </>
  );
};
export default Ubatuba;
