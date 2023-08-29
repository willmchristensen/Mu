import './MusicImageCard.css'

const MusicImageCard = ({image}) => {

    const handleImageError = (e) => {
        e.target.src = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
    }
    if(!image) return null;
    return (
        <div
            className="news-image-container"
        >
            <img
                src={image.length > 10 ? image : 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'}
                alt="basic-alt"
                onError={handleImageError}
            />
        </div>
    )

}

export default MusicImageCard
