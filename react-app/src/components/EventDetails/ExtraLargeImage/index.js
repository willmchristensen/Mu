import './ExtraLargeImage.css';
const ExtraLargeImage = ({src}) => {
    const handleImageError = (e) => {
        e.target.src = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
    }
    return (
        <div className="extra-large-image-container">
            <img src={src} onError={handleImageError} alt="xxl-image-container" />
        </div>
    )
}
export default ExtraLargeImage