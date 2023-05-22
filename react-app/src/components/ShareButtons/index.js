import './ShareButtons.css';
const ShareButtons = ({orientation, type}) => {
    const shareButtons = orientation == 'row' ? 'row-share-buttons' : 'column-share-buttons';
    const shareButton = type == 'dark' ? 'dark-share-button' :  'share-button';
    return (
        <div className={shareButtons}>
            <span className="share-header">
                Share
            </span>
            <button className={shareButton}>
                <i class="fab fa-facebook"></i>
            </button>
            <button className={shareButton}>
                <i class="fab fa-twitter"></i>   
            </button>
            <button className={shareButton}>
                <i class="fab fa-whatsapp"></i>
            </button>
            <button className={shareButton}>
                <i class="fas fa-link"></i>
            </button>
        </div>
    )
}
export default ShareButtons;