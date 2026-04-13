import React, { useState } from 'react';


const ContactForm = () => {
  const [stateMessage] = useState(null);

  const [formData, setFormData] = useState({ nome: '', email: '', msg: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.msg) {
      alert("É necessário preencher todos os campos.");
    } else {
      alert(`Parabéns ${formData.nome}! Você foi cadastrado com sucesso.`);
      setFormData({ nome: '', email: '', msg: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="campo">
        <label for="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        />
      </div>
      <div class="campo">
        <label for="email">E-mail:</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div class="campo">
        <label for="msg">Telefone:</label>
        <input
          id="msg"
          type="text"
          value={formData.msg}
          onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
        />
      </div>
      <button type="submit">Enviar</button>
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};

export default ContactForm;