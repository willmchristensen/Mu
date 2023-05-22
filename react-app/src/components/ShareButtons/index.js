import './ShareButtons.css';
const ShareButtons = ({orientation}) => {
    const shareButtons = orientation == 'row' ? 'row-share-buttons' : 'column-share-buttons';
    return (
        <div className={shareButtons}>
            <span className="share-header">
                Share
            </span>
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