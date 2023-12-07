import { Header } from './layout/Hader';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';
import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('matrix');
  const [searchType, setSearchType] = useState('all');

  const setSearch = (text, type) => {
    setSearchText(text);
    setSearchType(type);
  }

  useEffect(() => {
    setLoading(true);
    let resource = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`;
    if (searchType !== 'all') {
      resource = resource + `&type=${searchType}`;
    }
    fetch(resource)
      .then(res => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
        };
      })
      .catch((err) => {
        console.error(err);
        setMovies([]);
      });
    setLoading(false);
  }, [searchText, searchType]);

  return <>
    <Header />
    <Main
      movies={movies}
      setSearch={setSearch}
      isLoading={isLoading}
    />
    <Footer />
  </>
}

export default App;
