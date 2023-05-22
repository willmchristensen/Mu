import './SeriesCard.css'
// import ImageCard from "../../LatestNews/NewsCardComponents/ImageCard"
import SeriesImageCard from '../SeriesImageCard'

const SeriesCard = () => {
    return (
        <div className="series-card-container">
            {/* <ImageCard image={}/> */}
            <SeriesImageCard image={'https://imgproxy.ra.co/_/quality:66/w:300/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL2ZlYXR1cmVzL3Nlcmllcy9oZC1mZWF0dXJlcy1lbGlqYWgtMDIuanBn'} />
            <h3>The Art Of Djing</h3>
        </div>
    )
}

export default SeriesCard;