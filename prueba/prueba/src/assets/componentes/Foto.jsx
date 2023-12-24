import Titulo from "../componentes/Titulo";
import FotoPortada from "../imagenes/foto_back_portada.jpeg";

const Foto = () => {
  return (
    <div className="contenedor_imagen">
      <Titulo />
      <h2 className="subtitulo"> Tienda de Pinturas Originales </h2>
      <img className="foto" src={FotoPortada} alt="" />
    </div>
  );
};

export default Foto;
