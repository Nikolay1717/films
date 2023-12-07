import { useState } from "react";
import { AddSelection } from "./AddSelection";

const Search = (props) => {
  const { setSearch } = props;

  const [searchText, setSearchText] = useState('');
  const [searchType, setSearchType] = useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      setSearch(searchText, searchType);
      // console.log(searchText, searchType);
    }
  }

  const handleType = (event) => {
    setSearchType(event.target.value);
    setSearch(searchText, event.target.value);
  }

  return <div className="row search">
    <div className="col s12">
      <div className="input-field">
        <input
          className="validate"
          placeholder="search"
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn btn-search purple darken-4"
          onClick={() => setSearch(searchText, searchType)}
        >
          Search
        </button>
        <AddSelection type={searchType} cb={handleType} />
      </div>
    </div>
  </div>
}

export { Search }