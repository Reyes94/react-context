import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Favoritos() {

  const { photos } = useContext(UserContext)
  const galeriaFavoritos = photos.filter((e) => e.liked);       //filtrar fotos seleccionadas

  return (
    <div>
      <h1>Fotos favoritas</h1>
      {galeriaFavoritos.length === 0 ?
        (<div>
          <h3>Haz click en tus fotos favoritas para verlas en esta sección</h3>
        </div>) :
        (<div className="p-3 galeria grid-columns-4">
          {galeriaFavoritos                                            //map de las fotos seleccionadas
            .map((item) => (
              <div className="position foto" id={item.id} key={item.id} style={{ backgroundImage: `url(${item.src.tiny})` }}>
              </div>
            ))}
        </div>)}
    </div>
  );
}


//se crea galeriaFavoritos para luego poder usar operador ternario en el return y así poder mostrar mensaje a usuario
//en caso de que no haya seleccionado fotos favoritas