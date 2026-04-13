import React from 'react';
import fotoProjeto from '../assets/img-projeto.png';

function ProjectCard({ titulo, descricao, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-projeto">
            <article>
                {/* <article className="card-projeto"> */}
                <img src={fotoProjeto} alt="Foto de Erinaldo Cardoso" className="img-projeto"/>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                {/* <a href={link} target="_blank" rel="noopener noreferrer">Ver no GitHub</a> */}
            </article>
        </a>
    );
}

export default ProjectCard;