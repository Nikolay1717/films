function Movie(props) {
  const {Title, Year, imdbID, Type, Poster} = props;

  return <div className="card movie">
    <div id={imdbID} className="card-image">
      {
        Poster === 'N/A' ? (
          <img src="http://placehold.it/200x280/88cc00.gif&text=No image" alt="no imagegeg"></img>
        ) : (
          <img src={Poster} alt={Title} />
        )
      }
    </div>
    <div className="card-title">{Title}</div>
    <div className="card-content">
      <p>{Year}<span className="right">{Type}</span></p>
    </div>
  </div>
}

export { Movie }