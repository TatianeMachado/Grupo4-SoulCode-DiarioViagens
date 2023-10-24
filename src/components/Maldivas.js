import Comentario from "./Comentario";
const Maldivas = () => {
  return (
    <>
      <section>
        <div className="container-principal">
          <div className="container-itens">
            <h4>Maldivas</h4>
            <img
              className="img-cidades"
              src="./imgMundo/cardMaldivas.jpg"
              alt=""
            />

            <h2>Maldivas</h2>

            <p>
              As Maldivas, um paraíso tropical no Oceano Índico, são um destino
              de sonho para viajantes que buscam praias de areias brancas, águas
              cristalinas e uma atmosfera relaxante. Este arquipélago de 26
              atóis e mais de 1.000 ilhas oferece uma experiência única de
              turismo, e aqui estão alguns dos aspectos mais importantes desse
              destino:
            </p>

            <h2>Belezas Naturais</h2>

            <p>
              As Maldivas são conhecidas por suas paisagens naturais
              deslumbrantes, incluindo praias de areia branca, recifes de coral
              coloridos, águas cristalinas e coqueiros balançando ao vento. Os
              recifes de coral são ricos em vida marinha, tornando este local um
              paraíso para mergulhadores e entusiastas de snorkel.
            </p>

            <h2>Hospedagem em Resorts</h2>
            <p>
              As Maldivas são famosas por seus resorts luxuosos que ocupam ilhas
              inteiras, oferecendo acomodações em bangalôs sobre a água ou vilas
              de praia. Esses resorts geralmente incluem comodidades de classe
              mundial, como spas, restaurantes sofisticados e atividades
              aquáticas.
            </p>

            <h2>Atividades Aquáticas</h2>
            <p>
              As Maldivas são um destino imperdível para amantes da vida
              marinha. Os mergulhadores podem explorar os recifes de coral
              intocados e nadar com espécies impressionantes, como
              tubarões-baleia, mantas e golfinhos.
            </p>

            <h2> Vida Marinha Única</h2>
            <p>
              Além de mergulho e snorkel, as Maldivas também oferecem a
              oportunidade de nadar com tubarões, arraias, golfinhos e até mesmo
              bioluminescentes em algumas áreas.
            </p>

            <h2>Viagem Responsável</h2>
            <p>
              {" "}
              Devido à vulnerabilidade das ilhas às mudanças climáticas e ao
              aumento do nível do mar, as Maldivas estão na vanguarda da
              conscientização sobre as questões ambientais e da necessidade de
              ações globais contra as mudanças climáticas..
            </p>

            <p>
              As Maldivas são um paraíso tropical que oferece experiências
              únicas em um ambiente natural deslumbrante. Se você está em busca
              de relaxamento à beira-mar, aventuras aquáticas ou uma escapadela
              romântica, este arquipélago exótico tem algo para todos os tipos
              de viajantes.
            </p>
          </div>
          <Comentario />
        </div>
      </section>
    </>
  );
};
export default Maldivas;
