import './PodcastCard.css'

const PodcastCard = ({music}) =>  { 

    return (
        <div className="podcast-card-container">
            <div className="podcast-card-image">
                <img src={music.imageUrl} alt="podcast-image-alt" className="podcast-image" />
            </div>
            <div className="podcast-card-title">
                <h3 className="podcast-title">
                    {music.title}
                </h3>
            </div>
            <div className="podcast-card-description">
                <p className="podcast-description">
                    {music.description}
                </p>
            </div>
        </div>
    )
    

}
export default PodcastCard;