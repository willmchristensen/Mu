import './SquareImageCard.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const SquareImageCard = ({post}) => {

    return (
        <NavLink
            className="square-post-image-container"
            to={`/posts/${post.id}`}
        >
            <img
                src={post.imageUrl}
                alt="basic-alt"
            />
        </NavLink>
    )

}

export default SquareImageCard
