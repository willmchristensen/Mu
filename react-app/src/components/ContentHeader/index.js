import './ContentHeader.css'

const ContentHeader = ({content}) => { 
    return (
        <h1 className='content-header'>
            <span className="slash">
                /
            </span> 
            {content}
        </h1>
    )
}
export default ContentHeader;