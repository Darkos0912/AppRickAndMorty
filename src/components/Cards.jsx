import Card from './Card';

const Cards = (props) => {
   const { characters } = props;
   return (
      <div>
         {
            characters.map((character)=>{
               return <Card
               key={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={() => alert('Emulamos que se cierra la card')}
             />
            })
         }
      </div>
   );
}

export default Cards;