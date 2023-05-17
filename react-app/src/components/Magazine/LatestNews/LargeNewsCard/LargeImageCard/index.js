import './LargeImageCard.css'

const LargeImageCard = ({image}) => {

    return (
        <div className="large-image-container">
            <img 
                src={image} 
                alt="basic-alt" 
            />
        </div> 
    )

}

export default LargeImageCard