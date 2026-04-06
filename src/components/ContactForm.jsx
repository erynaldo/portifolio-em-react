import React, { useState } from 'react';


const ContactForm = () => {
  const [stateMessage] = useState(null);

  const [formData, setFormData] = useState({ nome: '', email: '', msg: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.msg) {
      alert("É necessário preencher todos os campos antes de enviar.");
    } else {
      alert(`Obrigado, ${formData.nome}! Sua mensagem foi enviada com sucesso.`);
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
        <label for="msg">Mensagem:</label>
        <textarea
          id="msg"
          value={formData.msg}
          onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
        />
      </div>
      <button type="submit">Enviar Mensagem</button>
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};

export default ContactForm;