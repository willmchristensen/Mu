import './MusicCard.css'

const MusicCard = ({music}) => {
    console.log(music)
    return (
        <div className="music-card-container">
            {/* 
                TODO: 
                MUSIC-IMAGE COMPONENT with default image -- use previous
                        && 
                IMAGE-URL IN CREATE MUSIC
            */}
            <div className="music-card-image">
                <img src={music.imageUrl} alt="music-image-alt" className=""/>
            </div>
            <div className="music-card-content">
                <div className="music-card-title">
                    <h3>{music.title}</h3>
                </div>
                <div className="music-card-description">
                    <p className="music-description">
                        {music.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default MusicCard;