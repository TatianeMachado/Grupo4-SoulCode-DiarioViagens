import Footer from "./Footer";
import Loader from "./Loader";
import Sobre from "./Sobre";
import { useEffect, useState } from "react";
const PaginaSobre = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {loading ? <Loader /> : <Sobre />}
      <br />

      <Footer color=" #007bff" texto=" © 2023 Diario de vigens." />
    </>
  );
};
export default PaginaSobre;
