import './AreaButton.css';

const AreaButton = ({area}) => {

    return (
        <div className="area-button">
            <button className="oval-button-area">
                {`View more ${area}`}
            </button>
        </div>
    )

}

export default AreaButton;