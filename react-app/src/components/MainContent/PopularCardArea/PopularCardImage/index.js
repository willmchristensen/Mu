import './PopularCardImage.css'

const PopularCardImage = ({image}) => {

    return (
        <div className="popular-image-container">
            <img 
                src={image} 
                alt="basic-alt" 
                className='post-image'
            />
        </div> 
    )

}

export default PopularCardImage