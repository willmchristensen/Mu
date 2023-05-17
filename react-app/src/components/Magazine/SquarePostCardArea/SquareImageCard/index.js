import './SquareImageCard.css'

const SquareImageCard = ({image}) => {

    return (
        <div className="square-post-image-container">
            <img 
                src={image} 
                alt="basic-alt" 
            />
        </div> 
    )

}

export default SquareImageCard