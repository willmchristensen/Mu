import './MusicCard.css'
import MusicImageCard from '../MusicImage'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const MusicCard = ({music}) => {
    // console.log(music)
    return (
        <div className="music-card-container">
            <MusicImageCard music={music}></MusicImageCard>
            <div className="music-card-content">
                <div className="music-card-record-label">
                    <h3 className='record-label'>RECORD LABEL</h3>
                </div>
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
                <div className="music-card-user">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" alt="user-image" className="user-profile-pic" />
                    <span className="user-name">
                        User Name
                    </span>
                </div>
            </div>
        </div>
    )
}
export default MusicCard;