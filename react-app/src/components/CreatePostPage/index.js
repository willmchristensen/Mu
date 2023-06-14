import './CreatePostPage.css';
import FormNavBar from '../FormNavBar';
import ContentHeader from '../ContentHeader';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { createPost, editOnePost, getOnePost } from '../../store/post';
const CreatePostPage = () => {
    const {postId} = useParams();
	const post = useSelector(state => state.post.singlePost);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [imageUrl,setImageUrl] = useState('');
	const [musicUrl,setMusicUrl] = useState('');
    const [formTitle, setFormTitle] = useState('');
	const [errors, setErrors] = useState({});
	const [isDisabled, setIsDisabled] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const currentUser = useSelector((state) => state.session.user)
	const dispatch = useDispatch();
	const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            'title': title,
            'description': description,
            'image_url': imageUrl,
			'user_id': currentUser.id,
			'music_url': musicUrl,
        }
		const payload = {'postId': postId, 'item': data}
        if(postId) {
			if(!title || !description || !imageUrl){
				setIsDisabled(true);
				setIsSubmitted(true);
			}else {
				await dispatch(editOnePost(payload)).then(history.push('/magazine'));
			}
        }else {
			if(!title || !description || !imageUrl){
				setIsDisabled(true);
				setIsSubmitted(true);
			}else {
				await dispatch(createPost(data)).then(history.push('/magazine'));
			}
        }
    }

    const handleCancel = (e) => {
		e.preventDefault();
		history.push('/magazine');
	}

	useEffect(()=>{
		if(postId) {
			dispatch(getOnePost(postId))
			setFormTitle('Edit Post')
		}else {
			setFormTitle('Create Post')
		}
    },[dispatch, postId])

	useEffect(()=>{
		if(postId && post) {
			setTitle(post.title)
            setDescription(post.description)
            setImageUrl(post.imageUrl)
			setMusicUrl(post.musicUrl)
		}
    },[postId, post])

	useEffect(() => {
		if(isSubmitted) {
			const errors = {};
			if(!title) errors.title = "Title is required"
			if(!description) errors.description = "Description is required"
			if(!imageUrl) errors.imageUrl = "Image is required"
			setErrors(errors)
			setIsDisabled(Object.values(errors).length > 0)
		}
	  }, [title ,description ,imageUrl,isSubmitted]);

	  if(!currentUser) history.push('/')

    return(
        <div className="create-event-container">
            <FormNavBar pages={['Content', 'Details', 'Profile', 'Promotional']}/>
            <form
                className='create-event-form'
                onSubmit={handleSubmit}
            >
                <ContentHeader content={formTitle} />
                <div className="form-row-column">
                    <label>
						title
					</label>
					{errors.title && <span className='errors'> {errors.title} </span>}
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
                </div>
                <div className="form-row-column">
                    <label>
						description
					</label>
					{errors.description && <span className='errors'> {errors.description} </span>}
					<input
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
                </div>
                <div className="form-row-column">
                    <label>
						imageUrl
					</label>
					{errors.imageUrl && <span className='errors'> {errors.imageUrl} </span>}
					<input
						type="text"
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						required
					/>

                </div>
				<div className="form-row-column">
                    <label>
						musicUrl
					</label>
					{errors.imageUrl && <span className='errors'> {errors.musicUrl} </span>}
					<input
						type="text"
						value={musicUrl}
						onChange={(e) => setMusicUrl(e.target.value)}
						required
					/>

                </div>
                <div className="form-buttons">
					<button
						type='cancel'
						className='oval-button-area small-button'
						onClick={handleCancel}
					>
						Cancel
					</button>
					<button
						type='submit'
						className='oval-button-area small-button'
						disabled={isDisabled}
					>
						Submit
					</button>
				</div>
            </form>
        </div>
    )
}

export default CreatePostPage;
