import { de } from "date-fns/locale";
import Comentario from "./Comentario";
import Ubatuba from "./Ubatuba";
import Loader from "./Loader";
import { useEffect, useState } from "react";
const PaginaDestinos = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return <>{loading ? <Loader /> : <Ubatuba />}</>;
};
export default PaginaDestinos;
