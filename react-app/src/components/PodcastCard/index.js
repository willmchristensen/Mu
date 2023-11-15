import './PodcastCard.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
const PodcastCard = ({music}) =>  { 

    return (
        <div className="podcast-card-container">
            <NavLink 
                className="podcast-card-image"
                to={`music/${music.id}`}
            >
                <img 
                    src={music.imageUrl} 
                    alt="podcast-alt" 
                    className="podcast-image" 
                />
            </NavLink>
            <div className="podcast-card-title">
                <NavLink 
                className="podcast-title"
                    to={`music/${music.id}`}
                >
                    <h3>{music.title}</h3>
                </NavLink>
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