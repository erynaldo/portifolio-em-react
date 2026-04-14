import React from 'react';
import fotoProjeto from '../assets/img-projeto.png';

function ProjectCard({ titulo, descricao, status, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-projeto">
            <article>
                {/* <article className="card-projeto"> */}
                <img src={fotoProjeto} alt="Foto de Erinaldo Cardoso" className="img-projeto"/>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <span className="status-projeto">{status}</span>
                <p className="projeto-git">Ver o projeto no Github</p>
            </article>
        </a>
    );
}

export default ProjectCard;