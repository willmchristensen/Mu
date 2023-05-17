import './ImageCard.css'

const ImageCard = ({image}) => {

    return (
        <div className="image-container">
            <img 
                src={image} 
                alt="basic-alt" 
            />
        </div> 
    )

}

export default ImageCard