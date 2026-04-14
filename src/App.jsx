import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import './index.css';
import fotoPerfil from './assets/foto_perfil.png';
import fotoLogo from './assets/logo_e.png';
import iconeClaroEscuro from './assets/icone-claro-escuro.png';
import ContactForm from './components/ContactForm';
import Rodape from './components/Rodape';


const meusProjetos = [
  {
    id: 1,
    titulo: "Projeto 01 - Sistema Anti-Bullying",
    descricao: "Esse sistema tem como objetivo receber denúncias de bullying ocorridos no ambiente escolar.",
    status: "Ajustes",
    link: "https://github.com/erynaldo/projeto-bullying"
  },
  {
    id: 2,
    titulo: "Projeto 02 - Sistema Espaço do Aluno",
    descricao: "Sistema de login para que o aluno possa acessar seus materiais, apostilas, atividades, ver as notas.",
    status: "Finalizado",
    link: "https://github.com/erynaldo/ceti.sjb"
  },
  {
    id: 3,
    titulo: "Projeto 03 - Sistema para Prefeituras",
    descricao: "Sistema para que as Prefeituras possam oferecer serviços aos usuários, como disponibilizar contra-cheques aos servidores municipais, boletos de IPTU ou outros documentos aos cidadãos.",
    status: "Iniciado",
    link: "https://github.com/erynaldo/meu-app-react"
  },
  {
    id: 4,
    titulo: "Projeto 04 - Plataforma de Aluguel de Filmes",
    descricao: "Sistema foi desenvovido para ser uma plataforma de aluguel de filmes, não precisa de assinatura, o cliente aluga um filme e ele fica disponível por alguns dias para assistir.",
    status: "Finalizado",
    link: "https://github.com/erynaldo/projet-plataforma-filmes"
  },
  {
    id: 5,
    titulo: "Projeto 05 - Calculadora de IMC",
    descricao: "Sistema para Nutricionistas e / ou Profissionais da Saúde para calcular o IMC de um paciente.",
    status: "Iniciado",
    link: "https://github.com/erynaldo/first-project-portifolio"
  },
  {
    id: 6,
    titulo: "Projeto 06 - Jogo da Velha",
    descricao: "Joguinho da Velha para passar o tempo.Desenvolvido em HTML, CSS e Javascript.",
    status: "Ajustes",
    link: "https://github.com/erynaldo/projeto-jogo-da-velha"
  }
];

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const alternarTema = () => setTemaEscuro(!temaEscuro);

  return (
    <div className={`${temaEscuro ? 'dark-theme' : ''}`} style={{ minHeight: '100vh' }}>
      <header>
        <div id="logo-nome">
          <img src={fotoLogo} alt="Logo de Erinaldo" id="logo" />
          <h1>Erinaldo</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Cadastre-se</a></li>
            <li>
              <div id="btn-tema" onClick={alternarTema}>
                {/* {temaEscuro ? 'Claro' : 'Escuro'} */}
                <img src={iconeClaroEscuro} alt="Icone Claro-Escuro" id="ico-claro-escuro" />
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <main>

        <section id="sobre">
          {/* <h2>Sobre Mim</h2> */}
          <img src={fotoPerfil} alt="Foto de Erinaldo Cardoso" />
          <p><span id="titulo-sobre-mim">Sobre Mim</span><span id="sobre-mim">Olá, meu nome é Erinaldo Cardoso</span> <br /> Atualmente estou cursando Tecnologia em Sistemas para Internet pela UAPI/UESPI, modalidade semi-presencial e em breve se Deus quiser estarei formado. A paixão pela área de TI vem
            desde cedo, desde os meus 14 anos. Antes de iniciar esse curso eu já me identificava muito com essa área da
            programação, especialmente desenvolvimento web. Enfim, em 2024, surgiu a oportunidade de poder fazer esse curso e estou gostando muito, aproveitando ao máximo para aprender sobre esse mundo da programação.
            <br /><br /><a href="https://github.com/erynaldo" target="_blank" className="meu-link">Meu Github</a><a href="https://www.linkedin.com/in/erinaldo-cardoso-709bb31a3/" target="_blank" className="meu-link">Meu Linkedin</a>
          </p>
        </section>

        <section id="projetos">
          <h2>Meus Projetos</h2>
          <div className="projetos-container">
            {meusProjetos.map((projeto) => (
              <ProjectCard
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                status={projeto.status}
                link={projeto.link}
              />
            ))}
          </div>
        </section>

        <section id="contato">
          <h2>Cadastre-se para receber minha newsletter</h2>
          <ContactForm />
        </section>

        <footer>
          <Rodape />
        </footer>

      </main>

    </div>
  );
}

export default App;