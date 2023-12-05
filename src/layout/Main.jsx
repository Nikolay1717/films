import { Component } from "react"
import { Movies } from "../components/Movies"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search";
import { NotFound } from "../components/NotFound";

class Main extends Component {
  render() {
    const { updateFilmList, movies, isLoading } = this.props;

    return <main className="container content">
      <Search updateFilmList={updateFilmList}/>
      {
        movies.length ? (
          <Movies movies={movies} />
        ) : (
          isLoading ? (
            <Preloader />
          ) : (
            <NotFound />
          )
        )
      }
    </main>
  }
}

export { Main }