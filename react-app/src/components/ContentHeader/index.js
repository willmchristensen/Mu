import './ContentHeader.css'
// TODO: implement types and change padding according to type of content header
const ContentHeader = ({content}) => { 
    return (
        <h2 className='content-header'>
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