import "./Card.css"

const Card = ({name,species,onClose,image,gender}) => {
   return (
      <div>
         <button className="boton" onClick={onClose}>X</button>
         <h2 className="h2">{name}</h2>
         <h2 className="specie">{species}</h2>
         <h2 className="gender">{gender}</h2>
         <img className="img" src={image} alt="Rick Imagen" />
      </div>
   );
}

export default Card;