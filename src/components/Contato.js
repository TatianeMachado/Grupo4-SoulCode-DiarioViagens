import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../components/Contato.css";

const Contato = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [mostrarModal, setMostrarModal] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    if (data.nome || data.email || data.texto) {
      setMostrarModal(true);
      return;
    }
    setMostrarModal(true);
  };

  const closeModal = () => {
    setMostrarModal(false);
  };

  return (
    <>
      <h1 className="contato">Contato</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome:</label>
        <br />
        <input
          type="text"
          placeholder="Deixe seu nome"
          {...register("nome", {
            required: "O campo de nome não pode ser vazio!",
            minLength: {
              value: 2,
              message: "O nome deve ter pelo menos 2 caracteres",
            },
          })}
        />
        {errors.nome && <span>{errors.nome.message}</span>}

        <br />
        <br />

        <label>Email:</label>
        <br />
        <input
          type="email"
          placeholder="Digite seu email"
          {...register("email", {
            required: "O campo de email não pode ser vazio!",
            minLength: {
              value: 2,
              message: "O email deve ter pelo menos 2 caracteres",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <br />
        <br />

        <label>Digite sua mensagem:</label>
        <br />
        <textarea
          placeholder="Digite sua mensagem"
          {...register("texto", {
            required: "O campo de mensagem não pode ser vazio!",
            minLength: {
              value: 2,
              message: "A mensagem deve ter pelo menos 2 caracteres",
            },
          })}
        />
        {errors.texto && <span>{errors.texto.message}</span>}

        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>

      {mostrarModal && (
        <>
          <div
            style={{
              position: "fixed",
              zIndex: "1",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
            onClick={closeModal}
          ></div>
          <div
            className="modal"
            style={{
              display: "block",
              position: "fixed",
              zIndex: "2",
              width: "100%",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Seus dados foram enviados com sucesso
                    <p>Obrigado!</p>
                  </h5>
                  <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={closeModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p> Aguarde, em breve entraremos em contato.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={closeModal}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contato;
