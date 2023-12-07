import "./PageHeader.css";

const PageHeader = ({ header, subheader }) => {
  return (
    <>
      <div className="page-header-container">
        <div className="header-wrapper">
          <div className="main-header">
            <span className="main-header">
              <h1>{header}</h1>
            </span>
          </div>
        </div>
      </div>
      <div className="page-subheader-container">
        <div className="page-subheader-wrapper">
          <div className="sub-header">
            <h2>{subheader && subheader.split(".")[0]}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
