import './ExtraLargeImage.css';
const ExtraLargeImage = ({src}) => {
    return (
        <div className="extra-large-image-container">
            <img src={src} alt="xxl-image-container" />
        </div>
    )
}
export default ExtraLargeImage