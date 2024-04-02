import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="primeVideo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-image"
        alt="prime video"
      />
      <div className="action-movies-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
