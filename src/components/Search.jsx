import { useState } from "react";
import { AddSelection } from "./AddSelection";

const Search = (props) => {
  const { updateFilmList } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      updateFilmList(search, type);
    }
  }

  const handleType = (event) => {
    setType(event.target.value);
    updateFilmList(search, event.target.value);
  }

  return <div className="row search">
    <div className="col s12">
      <div className="input-field">
        <input
          className="validate"
          placeholder="search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn btn-search purple darken-4"
          onClick={() => updateFilmList(search, type)}
        >
          Search
        </button>
        <AddSelection type={type} cb={handleType} />
      </div>
    </div>
  </div>
}

export { Search }