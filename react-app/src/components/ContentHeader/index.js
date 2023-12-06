import './ContentHeader.css'
const ContentHeader = ({content}) => { 
    return (
        <h2 className='content-header'>
            {/* custom css triangle to mimic their content header */}
            <div className="triangle-container">
                <div className="triangle">
                </div>
            </div>
            <div className="content-header-content-container">
                {content.toUpperCase()}
            </div>
        </h2>
    )
}
export default ContentHeader;