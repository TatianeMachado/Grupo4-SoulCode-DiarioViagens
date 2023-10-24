import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import "./Comentario.css";

const Comentario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [comentario, setComentario] = useState("");

  const onSubmit = (userData) => {
    console.log(userData);
    if (!userData.name.trim()) {
      return;
    }

    setSubmitted(true);
    const dataAtual = new Date();
    const dataFormatada = format(dataAtual, "dd/MM/yyyy HH:mm", {
      locale: ptBR,
    });
    setComentarios([
      ...comentarios,
      { comentario: userData.name, data: dataFormatada },
    ]);
    setShowModal(true); // Mostra a modal ao submeter o formulário
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <label>Deixe seu comentário:</label>
        <br />
        <input
          type="text"
          placeholder="Deixe seu comentário"
          {...register("name", {
            required: "O campo de comentário não pode ser vazio!",
            minLength: {
              value: 2,
              message: "O comentário deve ter pelo menos 2 caracteres",
            },
          })}
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />

        <button type="submit">Enviar</button>
        <br />
        {errors.name && <span>{errors.name.message}</span>}
      </form>
      {comentarios.length > 0 && (
        <div>
          {comentarios.map((add, index) => (
            <p key={index}>
              <p>
                {add.comentario}
                <br />
                <small>Postado em: {add.data}</small>
              </p>
            </p>
          ))}
        </div>
      )}
      {comentario && !submitted && <div></div>}

      {showModal && (
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
                  <h5 className="modal-title">Comentário postado</h5>
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
                  <p>Obrigado por comentar.</p>
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

export default Comentario;
