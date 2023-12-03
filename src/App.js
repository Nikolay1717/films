import { Header } from './layout/Hader';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';
import React from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends React.Component {

  state = {
    movies: [],
    isLoading: true
  }

  componentDidMount() {
    this.updateFilmList('matrix', 'all');
  }

  updateFilmList = (searchText, searchType) => {
    this.setState({ isLoading: true });
    let resource = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`;
    if (searchType && searchType !=='all') {
      resource = resource + `&type=${searchType}`;
    }
    if (searchText) {
      fetch(resource)
        .then(res => res.json())
        .then((data) => {
          if (data.Response === "True") {
            this.setState({ movies: data.Search, isLoading: false });
          } else {
            this.setState({ movies: [], isLoading: false })
          };
        }
        )
        .catch((err) => {
          console.error(err);
          this.setState({ movies: [], isLoading: false });
        });
    } else {
      this.setState({ movies: [], isLoading: false })
    }
  }

  render() {
    return <>
      <Header />
      <Main
        movies={this.state.movies}
        cb={this.updateFilmList}
        isLoading={this.state.isLoading}
      />
      <Footer />
    </>
  }
}
