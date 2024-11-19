import {FaSearch} from 'react-icons/fa'

function Search({handleSearch}){
    return(
        <div className="search-bar">
           <FaSearch/>
           <input type='text' className="searchText" onChange={(event)=>handleSearch(event.target.value)} placeholder='Search By Title...' ></input>
        </div>
    )
}

export default Search;