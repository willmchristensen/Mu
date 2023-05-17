import './SeriesCard.css'
import ImageCard from "../../LatestNews/NewsCardComponents/ImageCard"

const SeriesCard = () => {
    return (
        <div className="series-card-container">
            {/* <ImageCard image={}/> */}
            <img src="https://imgproxy.ra.co/_/quality:66/w:300/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL2ZlYXR1cmVzL3Nlcmllcy9oZC1mZWF0dXJlcy1lbGlqYWgtMDIuanBn" alt="" />
            <h3>The Art Of Djing</h3>
        </div>
    )
}

export default SeriesCard;