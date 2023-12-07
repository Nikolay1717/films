import { Movies } from "../components/Movies"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search";
import { NotFound } from "../components/NotFound";

function Main(props) {
  const { setSearch, movies, isLoading } = props;

  return <main className="container content">
    <Search setSearch={setSearch} />
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

export { Main }