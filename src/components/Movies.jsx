import { Movie } from "./Movie"

function Movies(props) {
  const { movies } = props;

  return <div className="movies">
    {
      movies.map(el => (
        <Movie
          key={el.imdbID}
          {...el}
        />
      ))
    }
  </div>
}

export { Movies }