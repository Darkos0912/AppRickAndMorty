import "./searchBar.css"

const SearchBar = (props) => {

   const {onSearch} = props;

   return (
      <div>
         <input type='search'/>
         <button className="botton" onClick={onSearch}>Agregar</button>
      </div>
   );
}

export default SearchBar;
