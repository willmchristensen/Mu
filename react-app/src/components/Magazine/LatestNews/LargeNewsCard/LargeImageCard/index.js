import './LargeImageCard.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const LargeImageCard = ({post}) => {
    console.log('------------------------------', post);
    if(!post) return null
    return (
        <div className="large-image-container">
            <NavLink
                className='large-image-link'
                to={`posts/${post.id}`}
            >
                <img 
                    src={post.imageUrl} 
                    alt="basic-alt" 
                /> 
            </NavLink>
        </div> 
    )

}

export default LargeImageCard