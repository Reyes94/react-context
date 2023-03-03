import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Galeria from "../components/Galeria";

export default function Home() {

   const {error} = useContext(UserContext)

    return (
        <div id="Home">
            <h1>Natural Pic</h1>
             <Galeria /> 
            <h3>{error}</h3>                
        </div>
    );
}

//en caso que no se logre acceder a la API, el error se mostrará al usuario a través de un mensaje