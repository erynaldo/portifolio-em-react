import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import './index.css';
import fotoPerfil from './assets/foto_perfil.png';
import fotoLogo from './assets/logo_e.png';
import ContactForm from './components/ContactForm';


const meusProjetos = [
  {
    id: 1,
    titulo: "Projeto 01 - Sistema Anti-Bullying",
    descricao: "Esse sistema tem como objetivo receber denúncias de bullying ocorridos no ambiente escolar.",
    link: "https://github.com/erynaldo/projeto-bullying"
  },
  {
    id: 2,
    titulo: "Projeto 02 - Sistema Espaço do Aluno",
    descricao: "Sistema de login para que o aluno possa acessar seus materiais, apostilas, atividades, ver as notas.",
    link: "https://github.com/erynaldo/ceti.sjb"
  },
  {
    id: 3,
    titulo: "Projeto 03 - Sistema para Prefeituras",
    descricao: "Sistema para que as Prefeituras possam oferecer serviços aos usuários, como disponibilizar contra-cheques aos servidores municipais, boletos de IPTU ou outros documentos aos cidadãos.",
    link: "https://github.com/erynaldo/meu-app-react"
  },
  {
    id: 4,
    titulo: "Projeto 04 - Plataforma de Aluguel de Filmes",
    descricao: "Sistema foi desenvovido para ser uma plataforma de aluguel de filmes, não precisa de assinatura, o cliente aluga um filme e ele fica disponível por alguns dias para assistir.",
    link: "https://github.com/erynaldo/projet-plataforma-filmes"
  },
  {
    id: 5,
    titulo: "Projeto 05 - Calculadora de IMC",
    descricao: "Sistema para Nutricionistas e / ou Profissionais da Saúde para calcular o IMC de um paciente.",
    link: "https://github.com/erynaldo/first-project-portifolio"
  },
  {
    id: 6,
    titulo: "Projeto 06 - Jogo da Velha",
    descricao: "Joguinho da Velha para passar o tempo.Desenvolvido em HTML, CSS e Javascript.",
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
          <h1>Erinaldo Cardoso</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#projetos">Meus Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
            <li>
              <button id="btn-tema" onClick={alternarTema}>
                {temaEscuro ? 'Claro' : 'Escuro'}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <img src={fotoPerfil} alt="Foto de Erinaldo Cardoso" />
          <p>Sou formado em Administração Pública pela UESPI, servidor público municipal, atualmente cursando
            Tecnologia em Sistemas para Internet pela UAPI/UESPI no pólo de Brasileira. A paixão pela área de TI vem
            desde cedo, mas precisamente desde os meus 14 anos, quando fiz o primeiro
            curso de informática. Em 2016 fiz o curso Técnico de Informática, em 2019 iniciei Ciência da Computação
            pelo IFCE, estava cursando o 3º período, mas devido a problema de saúde acabei desistindo. Em 2024
            iniciei Tecnologia em Sistemas para Internet. De 2019 pra cá, me identifiquei muito com a área da
            programação, especialmente desenvolvimento web. Enfim, procuro sempre aprender mais nessa área, sei um
            pouco das linguagens Javascript e Python.</p>
        </section>

        <section id="projetos">
          <h2>Meus Projetos</h2>
          <div className="projetos-container">
            {meusProjetos.map((projeto) => (
              <ProjectCard
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                link={projeto.link}
              />
            ))}
          </div>
        </section>

        <section id="contato">
          <h2>Entre em Contato</h2>
           <ContactForm />
        </section>

      </main>

    </div>
  );
}

export default App;