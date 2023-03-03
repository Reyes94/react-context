import "../assets/css/galeria.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Heart from "./Heart";

export default function Galeria() {

    const { photos, setPhotos } = useContext(UserContext)

    function handleClick(id) {
        const index = photos.findIndex((ele) => ele.id == id)              //acceder al id
        photos[index].liked = photos[index].liked ? false : true           //cambios en la foto al ser seleccionada
        setPhotos([...photos])
    }

    return (
        <div className="galeria grid-columns-5 p-3">
            {photos.map((item) => (
                <div onClick={(e) => handleClick(e.currentTarget.id)} className="position foto" id={item.id} key={item.id} style={{ backgroundImage: `url(${item.src.tiny})` }}>
                    <div className="absolute">
                        <p>{item.alt}</p>
                    </div>
                    <Heart className="icon" filled={item.liked} />
                </div>
            ))}
        </div>
    );
}


//Heart se le puede agregar clase por {...props} en componente Heart.jsx