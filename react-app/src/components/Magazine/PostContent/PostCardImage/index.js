import './PostCardImage.css'

const PostCardImage = ({image}) => {

    return (
        <div className="post-image-container">
            <img 
                src={ image ? image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png' } 
                alt="basic-alt" 
                className='post-image'
            />
        </div> 
    )

}

export default PostCardImage