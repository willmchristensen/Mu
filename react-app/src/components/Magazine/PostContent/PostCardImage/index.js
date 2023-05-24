import './PostCardImage.css'

const PostCardImage = ({image}) => {
    const handleImageError = (e) => {
        e.target.src = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
    }
    return (
        <div className="post-image-container">
            <img 
                src={ image } 
                alt="basic-alt" 
                className='post-image'
                onError={handleImageError}
            />
        </div> 
    )

}

export default PostCardImage