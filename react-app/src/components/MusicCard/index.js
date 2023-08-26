const MusicCard = (music) => {
    console.log(music)
    return (
        <div className="music-card-container">
            <div className="music-card-wrapper">
                {/* <div className="music-card-image">
                    <img src={music.musicUrl} alt="music-image" className=""/>
                </div> */}
                <div className="music-card-content">
                    <div className="music-card-title">
                        <h1> {music.music.title}</h1>
                    </div>
                    {/* <div className="music-card-description">
                        {music.description}
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default MusicCard;