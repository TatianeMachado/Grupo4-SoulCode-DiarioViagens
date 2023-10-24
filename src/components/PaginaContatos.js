import { useEffect, useState } from "react";
import Loader from "./Loader";
import Contato from "./Contato";
import Footer from "./Footer";

const PaginaContatos = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {loading ? <Loader /> : <Contato />}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer color=" #007bff" texto=" © 2023 Diario de vigens." />
    </>
  );
};

export default PaginaContatos;
