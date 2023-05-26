import './Series.css'
import SeriesCard from "./SeriesCard";
const Series = ({posts}) => {
    return (
        <>
            <div className="series-section">
                <h1 className="header">
                    Film Series
                </h1>
                {/* FIXME: shrinky or wrappy */}
                <div className="series-cards-flex-container">
                    <div className="series-cards">
                            {
                                posts.map(p=> {
                                    return(
                                        <SeriesCard />
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
            <div className="series-section">
                <h1 className="header">
                    Feature Series
                </h1>
                <div className="series-cards">
                    {
                        posts.map(p=> {
                            return(
                                <SeriesCard />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Series;
