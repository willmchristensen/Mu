import './PostCardImage.css'

const PostCardImage = ({image}) => {

    return (
        <div className="post-image-container">
            <img 
                src={image} 
                alt="basic-alt" 
                className='post-image'
            />
        </div> 
    )

}

export default PostCardImage