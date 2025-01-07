import { useEffect } from "react";

function MovieList() {
    const movies = ["Project X","La vida de Brian","American Pie"];

    const HTMLMovies = movies.map((movie, index) => {
        return <p key={movie}>{movie} - {index + 1}</p>

    })

    useEffect(() => {
      console.log("Component MoveList mounted");
    }, [])

    useEffect(() => {
      return  () => {
        console.log("Component MovieList unmounted");
      }
    },[])


  return (
    <section>
    <h2>Movies</h2>

    {HTMLMovies}
    </section>

  )
}


export default MovieList