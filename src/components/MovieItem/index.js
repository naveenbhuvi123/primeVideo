import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {MovieDetails} = props
  const {thumbnailUrl, videoUrl} = MovieDetails
  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} className="image-url" alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              id="closeButton"
              data-testid="closeButton"
              aria-label="Close menu" // Add aria-label for accessibility
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="video-player">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
