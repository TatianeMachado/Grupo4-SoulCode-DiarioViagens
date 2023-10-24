import React, { useState } from "react";
import Card from "../components/Card";
import Logo from "./../img/logo2.png";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Ubatuba from "./Ubatuba";
import CostaCorais from "./CostaCorais";
import Eua from "./Eua (1)";
import Grecia from "./Grecia";
import Hungria from "./Hungria";
import Italia from "./Italia";
import Maldivas from "./Maldivas";
import Turquia from "./Turquia";
import Floarianolis from "./Florianopolis";
import FernandoNoronha from "./FernandoNoronha";
import Capitolio from "./Capitilio";
import PortoGalinhas from "./PortoGalinhas";

import Footer from "./Footer";

export const Home = () => {
  const [activeLink, setActiveLink] = useState("");
  const [showLoaderBrasil, setShowLoaderBrasil] = useState("");
  const [showLoaderMundo, setShowLoaderMundo] = useState("");

  const handleClick = (e, id) => {
    e.preventDefault();
    //log pra ativar o click do botão
    setActiveLink(id);
    if (id === "brasil") {
      setShowLoaderBrasil(id);
    } else if (id === "mundo") {
      setShowLoaderMundo(id);
    }
    setTimeout(() => {
      if (id === "brasil") {
        setShowLoaderBrasil("");
      } else if (id === "mundo") {
        setShowLoaderMundo("");
      }
      const botao = document.getElementById(id);
      if (botao) {
        botao.scrollIntoView({ behavior: "smooth" });
      }

      // carregar loading por 2 segundos
    }, 2000);
  };

  return (
    <>
      <div className="App-header">
        <div className="container-principal">
          <div className="container-logo-titulo">
            <img
              className="img-logo"
              src={Logo}
              alt="Logo da página"
              title="Logo da página"
            />
            <h1 className="item-titulo">Diário de Viagens</h1>
            <h2>Seu roteiro de viagens</h2>
            <p>"A vida é curta, os destinos são infinitos."</p>
          </div>

          <nav className="contaner-links">
            <button
              className="btn btn-primary"
              onClick={(e) => handleClick(e, "brasil")}
            >
              Brasil
              {showLoaderBrasil === "brasil" && <Loader />}
            </button>
            <button
              className="btn btn-primary"
              onClick={(e) => handleClick(e, "mundo")}
            >
              Internacional
              {showLoaderMundo === "mundo" && <Loader />}
            </button>

            <Link className="App-link" to="/contatos">
              Contato
            </Link>
            <Link className="App-link" to="/sobre-nos">
              Sobre Nós
            </Link>
          </nav>
        </div>
      </div>

      <main>
        <div className="container-principal ">
          <div className="principal">
            <h3>Bem-Vindo à Sua Jornada de Descoberta</h3>
            <h4>
              Junte-se a nós nesta jornada de descoberta. O Brasil e o mundo
              estão cheios de maravilhas esperando para serem exploradas.
              Prepare-se para criar memórias inesquecíveis, conhecer novas
              culturas e fazer novos amigos ao redor do mundo{" "}
            </h4>
            <h3>Sua próxima aventura começa aqui!</h3>
            <p>
              {" "}
              Seja você um viajante experiente em busca de novos horizontes ou
              alguém que planeja sua primeira aventura, esta é sua porta de
              entrada para um mundo de destinos deslumbrantes, dicas úteis e
              roteiros emocionantes.
            </p>
            <p>
              Aqui você encontrará inspiração para suas próximas escapadas,
              independentemente de serem destinos exóticos ao redor do mundo ou
              joias escondidas em nosso amado Brasil. Destinos de sonho pelo
              mundo, prepare-se para se perder em um mundo repleto de destinos
              deslumbrantes. De Paris a Tóquio, de Nova Iorque a Bangkok, nossas
              sugestões abrangem os quatro cantos do globo. Explore culturas
              únicas, maravilhas naturais e experiências peculiares em alguns
              dos lugares mais fascinantes da terr, dicas essenciais para viajar
              com confiança
            </p>
            <p>
              Viajar é uma oportunidade para crescer, aprender e se divertir,
              mas também requer preparação. Nossas dicas práticas cobrem tudo,
              desde planejamento e documentação até saúde e segurança,
              mantenha-se seguro, saudável e agradável de cada momento de sua
              viagem com tranquilidade.
            </p>
            <p>
              Roteiros personalizados para uma experiência inesquecível, nossos
              roteiros de viagem são projetados para ajudá-lo a explorar os
              destinos escolhidos de maneira eficiente e autêntica. Desde
              itinerários urbanos que incluem os principais pontos turísticos
              até aventuras rurais fora do caminho batido, estamos aqui para
              ajudá-lo a aproveitar ao máximo cada destino.
            </p>
            <p>
              Compartilhando a paixão pela viagem, viajar é mais do que apenas
              visitar lugares, é sobre conectar-se com a cultura local, conhecer
              pessoas incríveis e criar memórias difíceis. Estamos apaixonados
              por compartilhar nossas experiências de viagem, dicas e histórias
              antigas, para que você possa embarcar em suas próprias aventuras
              com confiança. prepare-se para a sua próxima jornada
            </p>
          </div>
          <h3 className="texto-titulo">Destinos Nacionais </h3>
          <div className="container-brasil " id="brasil">
            <div className="conteiner-grup">
              <Card
                foto="ubatuba.jpg"
                texto=" Ubatuba é conhecida como a Capital Paulista do Surf, e no Parque Estadual da Serra do Mar há muitas outras opções como o trekking que percorrem praias desertas
      "
                titulo="Ubatuba-SP"
                destinos={"/ubatuba"}
              />
              <Card
                foto="capitolio.jpg"
                texto="Capitólio é um famoso destino de ecoturismo em Minas gerais, conhecido como “Mar de Minas” pelo Lago de Furnas, onde fica sua principal atração, o cânion de Furnas. "
                titulo="Capitólio-MG"
                destinos={"/capitolio"}
              />{" "}
            </div>
            <div className="conteiner-grup">
              <Card
                foto="costa-corais.png"
                texto="A Costa dos Corais é um dos mais belos roteiros pelo litoral do Brasil, reunindo alguns dos melhores destinos do Brasil em meio a praias paradisíacas."
                titulo="Costa dos Corais"
                destinos={"/costa-corais"}
              />
              <Card
                foto="fernando-de-Noronha.jpg"
                texto="Fernando de Noronha é um lugar onde a natureza ganhou contornos surpreendentes. A geografia privilegiada tem o mais belo conjunto de ilhas do Brasil  "
                titulo="Fernando de Noronha-PE"
                destinos={"/fernando-noronha"}
              />
            </div>
            <div className="conteiner-grup">
              <Card
                foto="porto-de-galinhas-praia.jpg"
                texto="Porto de Galinhas é conhecida por suas águas cristalinas, piscinas naturais, areias douradas e coqueirais exuberantes"
                titulo="Porto de Galinhas-PE"
                destinos={"/porto-galinhas"}
              />
              <Card
                foto="praia-florianopolis.webp"
                texto="Florianópolis oferece uma combinação única de natureza exuberante, gastronomia rica e vida noturna vibrante "
                titulo="Floriánopolis-SC"
                destinos={"/florianopolis"}
              />
            </div>
          </div>
          <h3 className="texto-titulo">Destinos Internacionais </h3>
          <div className="container-brasil " id="mundo">
            <div className="conteiner-grup">
              <Card
                foto="grecia.jpg"
                texto="  Descubra a beleza eterna da Grécia! Das antigas ruínas de Atenas às deslumbrantes ilhas gregas banhadas pelo sol, este é um país que celebra a história, a cultura e a hospitalidade. 
      "
                titulo="Grécia"
                destinos={"/grecia"}
              />
              <Card
                foto="hungria.jpg"
                texto="Explore a magia da Hungria! De Budapeste, a deslumbrante 'Pérola do Danúbio', às pitorescas cidades termais e vinhedos em Eger e Tokaj, a Hungria é um país rico em história "
                titulo="Hungria"
                destinos={"/hungria"}
              />{" "}
            </div>
            <div className="conteiner-grup">
              <Card
                foto="italia.jpg"
                texto="Bem-vindo à Itália, a terra da arte, história e paixão! Das ruas antigas de Roma à elegância renascentista de Florença, passando pelas cidades românticas de Veneza e Verona"
                titulo="Itália"
                destinos={"/italia"}
              />
              <Card
                foto="orlando.jpg"
                texto="Das luzes brilhantes de Nova York à beleza natural de Yosemite, do encanto do sul de Charleston às paisagens majestosas do Grand Canyon, os EUA oferecem uma experiência única em cada canto"
                titulo="Estados Unidos"
                destinos={"/estados-unidos"}
              />
            </div>
            <div className="conteiner-grup">
              <Card
                foto="turquia.jpeg"
                texto="Das maravilhas históricas de Istambul às paisagens espetaculares da Capadócia e às praias encantadoras da Riviera Turca, este país é uma jornada através do tempo e da natureza"
                titulo="Turquia"
                destinos={"/turquia"}
              />
              <Card
                foto="maldives.webp"
                texto="Com suas praias de areia branca, águas cristalinas e recifes de coral coloridos, este arquipélago é um refúgio de beleza natural e tranquilidade. "
                titulo="Maldivas"
                destinos={"/maldivas"}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer color=" #000" texto=" © 2023 Diario de viagens." />
    </>
  );
};
