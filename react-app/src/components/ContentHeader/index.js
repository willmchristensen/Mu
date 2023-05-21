import './ContentHeader.css'

const ContentHeader = ({content}) => { 
    return (
        <h2 className='content-header'>
            {/* <div className="slash-container">
                <div className="slash"></div>
            </div> */}
            <div className="triangle-container">
                <div className="triangle">
                </div>
            </div>
            <div className="content-header-content-container">
                {content}
            </div>
        </h2>
    )
}
export default ContentHeader;