import './ShareButtons.css';
const ShareButtons = ({orientation}) => {
    const shareButtons = orientation == 'row' ? 'row-share-buttons' : 'share-buttons';
    return (
        <div className={shareButtons}>
            <h1 className="share-header">
                share
            </h1>
            <button className="share-button circle-button">
                <i class="fab fa-facebook"></i>
            </button>
            <button className="share-button circle-button">
                <i class="fab fa-twitter"></i>   
            </button>
            <button className="share-button circle-button">
                <i class="fab fa-whatsapp"></i>
            </button>
            <button className="share-button circle-button">
                <i class="fas fa-link"></i>
            </button>
        </div>
    )
}
export default ShareButtons;