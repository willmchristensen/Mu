import './SeriesImageCard.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const SeriesImageCard = ({image}) => {

    return (
        <div className="series-image-container">
            <img
                src={image}
                alt="basic-alt"
            />
        </div>
    )

}

export default SeriesImageCard
