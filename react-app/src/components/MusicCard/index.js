import './MusicCard.css'
import MusicImageCard from '../MusicImage'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const MusicCard = ({music}) => {
    // console.log(music)
    return (
        <div className="music-card-container">
            {/* 
                TODO: 
                MUSIC-IMAGE COMPONENT with default image -- use previous
                        && 
                IMAGE-URL IN CREATE MUSIC
            */}
            <div className="music-card-image">
                {/* <img src={music.imageUrl} alt="music-image-alt" className=""/> */}
                <MusicImageCard image={music.imageUrl}></MusicImageCard>
            </div>
            <div className="music-card-content">
                <div className="music-card-title">
                    <NavLink
                         to={`/music/${music.id}`}
                         className='music-image-link'
                    ><h3>{music.title}</h3></NavLink>
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