import './PageHeader.css'

const PageHeader = ({header,subHeader}) => {
    return (
        <div className="page-header-container">
            <div className="main-header">
                <h1>{header}</h1>
            </div>
            <div className="sub-header">
                <h2>{subHeader}</h2>
            </div>
        </div>
    )
}

export default PageHeader;