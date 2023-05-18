import './PostPreview.css';

const PostPreview = ({post, type}) => {
    // conditional rendering a descriptive component for a variety of content cards.
    if(!post) return null

    // classes----------
    const dynamicTitle = type === 'large' ? 'big-title' : 'post-title';
    const textClass = type === 'news' ?  "post-preview-text" : "news-preview-container";
    const options = { day: 'numeric', month: 'long', year: 'numeric'}
    // data-----------
    let date = new Date(post.createdAt).toLocaleDateString('en-US', options);
    let [month, day,year] = date.split(' ');
    let formattedDate = `${day} ${month} ${year}`;
    const time = post.createdAt.substring(11,16);
    const sentence = post.description.split('.')[0].trim();
    
    return (

        <div className="post-preview-container">

            { 
               type !== 'large' && <div className="time-type">
                    <div className="time">
                        {type !== 'square' && time}
                    </div>
                    {type !== 'square' && <i class="fas fa-circle"></i>}
                    <div className="type">
                        {type !== 'square' && post.type}
                        {type == 'square' && formattedDate}
                    </div>
                </div> 
            }
            <div className={textClass}>
                <div className="single-post-title">
                    <h3 className={dynamicTitle}>
                        {post.title}
                    </h3>
                </div>

                <div className="single-post-sentence">
                    {sentence}
                </div>
            </div>

        </div>
            
    )

}

export default PostPreview;