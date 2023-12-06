import './ExtraLargeImage.css';
// DEFAULT IMAGE COMPONENT: *onError* with src, component changes the e.target.src to a default link
const ExtraLargeImage = ({src}) => {
    const handleImageError = (e) => e.target.src = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
    return (
        <div className="extra-large-image-container">
            <img 
                src={src} 
                onError={handleImageError} 
                alt="extra-large-container" 
            />
        </div>
    )
}
export default ExtraLargeImage