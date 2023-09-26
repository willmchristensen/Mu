import './Series.css'
import SeriesCard from "./SeriesCard";
import ContentHeader from '../../ContentHeader';
const Series = ({posts}) => {
    return (
        <>
            <div className="series-section">
                <ContentHeader content={'FILM SERIES'} />
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
            <div className="series-section-two">
            <ContentHeader content={'FEATURE SERIES'} />
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
