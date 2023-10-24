import Comentario from "./Comentario";

const FernandoNoronha = () => {
  return (
    <>
      <section>
        <div className="container-principal">
          <div className="container-itens">
            <h4>Fernando de Noronha-PE</h4>
            <img
              className="img-cidades"
              src="./imgBrasil/cardFernandoNoronha.jpg"
              alt=""
            />
            <h2>Para todos os povos, para todos os gostos!</h2>
            <p>
              Pernambuco guarda muitos tesouros, um deles, bem especial: o
              Arquipélago de Fernando de Noronha. Consagrado pela Organização da
              Nações Unidas para a Educação, Ciência e Cultura – UNESCO “Sítio
              do Patrimônio Mundial Natural” desde dezembro de 2001. Este
              reconhecimento é por seu excepcional valor universal, ou seja, por
              uma importância que transcende as fronteiras nacionais e se torna
              importante para o presente e o futuro de toda a humanidade.
            </p>

            <h2>Sobre Noronha</h2>

            <p>
              {" "}
              O arquipélago tem 21 ilhas, a maioria de origem vulcânica, sendo
              que a ilha principal tem uma área de 17km² e é formado por duas
              unidades de conservação: o Parque Nacional Marinho – PARNAMAR,
              mantido pelo Instituto Chico Mendes de Conservação da
              Biodiversidade – ICMBio, e a Área de Proteção Ambiental – APA de
              Fernando de Noronha, administrada pelo Governo de Pernambuco.
            </p>

            <h2>Praias e Baias</h2>

            <p>
              {" "}
              Magnífico santuário ecológico, no arquipélago tudo encanta: o mar
              verde-esmeralda e o azul-turquesa de suas praias e baías,
              distribuídas entre o “mar de dentro” e o “mar de fora”, o Morro
              Dois Irmãos e o Morro do Pico, cartões-postais da Ilha; mirantes a
              oferecer espetáculos que ficarão para sempre marcados na memória.
            </p>

            <p>
              {" "}
              Não é por acaso que a Baía do Sancho conquista anos após ano o
              título de uma das melhores praias do mundo pelo Travellers’
              Choice, prêmio anual do setor de turismo que se baseia em milhões
              de avaliações e opiniões de viajantes do mundo todo.
            </p>

            <p>
              E se o desejo é por sol e mar, 16 belas praias formam uma
              constelação de estrelas.
            </p>

            <h2> Trilhas</h2>

            <p>
              Imperdível percorrer as trilhas ecológicas que oferecem paisagens
              de perder o fôlego, com visita a piscinas naturais que servem de
              berçário para as variadas espécies da fauna marinha, realizar
              deliciosos passeios de barco e participar de uma expedição em
              canoa havaiana – tudo isso sem falar nas incríveis oportunidades
              de mergulho.
            </p>

            <h2>Mergulho</h2>

            <p>
              {" "}
              Os mais experientes mergulhadores afirmam que Noronha é um dos
              melhores pontos de mergulho do planeta. E essa afirmação não se dá
              por acaso; afinal, são poucos os lugares que têm média de
              temperatura da água de 26 °C e visibilidade de até 50 metros,
              atraindo mergulhadores do mundo todo.
            </p>

            <h2>Patrimônio</h2>

            <p>
              {" "}
              Com mais de 500 anos de história para contar, Noronha também é
              cenário de edificações de grande valor histórico, como a Igreja
              Nossa Senhora dos Remédios (1772); ruínas e pátios seculares, o
              Palácio São Miguel, sede da administração de Fernando de Noronha,
              e a Fortaleza de Nossa Senhora dos Remédios (1737), a mais
              importante das dez fortificações erguidas nos séculos XVII e XVIII
              para defender a ilha.
            </p>

            <h2>Ecoturismo</h2>

            <p>
              {" "}
              Cenário perfeito para a prática do ecoturismo. Importante
              registrar que diversas ações de sustentabilidade ambiental são
              empreendidas na ilha, a exemplo do Plástico Zero e do Carbono
              Neutro, exemplos para todo o Brasil.
            </p>
            <p>
              Além de uma indescritível vida marinha. Cerca de 230 espécies de
              peixes, 15 de corais e mais de 10 tipos de tubarões convivem no
              arquipélago que apresenta a maior diversidade de aves marinha do
              país.
            </p>
            <p>
              Destaque ainda para os repteis endêmicos, como a mabuya, o
              caranguejo protegido; as tartarugas-verdes, que escolhem várias
              praias para desovar, tartarugas-de-pente que visitam o entrono do
              arquipélago para e alimentar e os famosos golfinhos-rotadores, que
              visitam as águas do arquipélago para descanso, e encantam pessoas
              de todas as idades com seu gracioso balé, acompanhando os
              navegantes pelos mares de Noronha.
            </p>

            <h2>Hospedagem, Gastronomia e Operadoras</h2>

            <p>
              O destino oferece opções diversificadas de hospedagem, que vai de
              hospedarias domiciliares a pousadas de luxo, empresas de mergulho
              certificadas, serviços de alimentação dos mais simples aos
              sofisticados, além de empresas credenciadas para a oferta de
              passeios e serviços turísticos. Sua beleza cênica é perfeita para
              cerimônias de casamento e lua de mel. Isso e muito mais espera por
              você a cerca de uma hora de voo do Recife. Venha descobrir esse
              tesouro!
            </p>
          </div>
          <Comentario />
        </div>
      </section>
    </>
  );
};
export default FernandoNoronha;
