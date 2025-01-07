function MovieList() {
    const movies = ["Project X","La vida de Brian","American Pie"];

    const HTMLMovies = movies.map((movie, index) => {
        return <p key={movie}>{movie} - {index + 1}</p>

    })


  return (
    <section>
    <h2>Movies</h2>

    {HTMLMovies}
    </section>

  )
}


export default MovieList