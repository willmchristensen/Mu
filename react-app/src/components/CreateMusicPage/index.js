import './CreateMusicPage.css';
import FormNavBar from '../FormNavBar';
import ContentHeader from '../ContentHeader';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { createPost, editOneMusicPost, getOnePost } from '../../store/post';

const CreateMusicPage = () => {

	// if edit, grab particular post from state object
	const { musicId } = useParams();
	const post = useSelector(state => state.post.singlePost);
	const currentUser = useSelector((state) => state.session.user);

	// state variables pieces of state data within a functional component
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [musicUrl, setMusicUrl] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [formTitle, setFormTitle] = useState('');
	const [errors, setErrors] = useState({});
	const [isDisabled, setIsDisabled] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			'music_url': musicUrl,
			'title': title,
			'image_url': imageUrl ? imageUrl : 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
			'description': description,
			'user_id': currentUser.id,
		};
		const payload = { 'musicId': musicId, 'item': data };
		// if editing a music post
		if (musicId) {
			if (!title || !description || !musicUrl || !imageUrl) {
				setIsDisabled(true);
				setIsSubmitted(true);
			} else {
				await dispatch(editOneMusicPost(payload)).then(history.push('/music'));
			}
		} else {
			if (!title || !description || !musicUrl || !imageUrl) {
				setIsDisabled(true);
				setIsSubmitted(true);
			} else {
				await dispatch(createPost(data)).then(history.push('/music'));
			}
		}
	}
	const handleCancel = (e) => {
		e.preventDefault();
		history.push('/music');
	}

	useEffect(() => {
		if (musicId) {
			dispatch(getOnePost(musicId))
			setFormTitle('Edit Music')
		} else {
			setFormTitle('Create Music')
		}
	}, [dispatch, musicId])
	useEffect(() => {
		if (musicId && post) {
			setTitle(post.title)
			setDescription(post.description)
			setMusicUrl(post.musicUrl)
			setImageUrl(post.imageUrl)
		}
	}, [musicId, post])

	useEffect(() => {
		if (isSubmitted) {
			const errors = {};
			if (!title) errors.title = "Title is required"
			if (!description) errors.description = "Description is required"
			if (!musicUrl) errors.musicUrl = "Music URL is required"
			if (!imageUrl) errors.imageUrl = "Image URL is required"
			setErrors(errors)
			setIsDisabled(Object.values(errors).length > 0)
		}
	}, [title, description, musicUrl, isSubmitted]);

	if (!currentUser) history.push('/');

	return (
		<>
			<div className="create-event-container">
				<FormNavBar pages={['Content', 'Details']} />
				<form
					className='create-music-form'
					onSubmit={handleSubmit}
				>
					<ContentHeader content={formTitle} />
					<div className="form-row-column">
						<label>
							Title
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
							Description
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
							Image Url
						</label>
						{errors.imageUrl && <span className='errors'> {errors.description} </span>}
						<input
							type="text"
							value={imageUrl}
							onChange={(e) => setImageUrl(e.target.value)}
							required
						/>
					</div>
					<div className="form-row-column">
						<div className="tooltip-container">
							<label>
								Music Url
							</label>
							{errors.musicUrl && <span className='errors'> {errors.imageUrl} </span>}
							<input
								type="text"
								value={musicUrl}
								onChange={(e) => setMusicUrl(e.target.value)}
								required
							/>
							<div className="tooltip errors">
								<span>must enter valid bandcamp embedded player url</span>
							</div>
						</div>
						<label>
							Example Music Url:
						</label>
						<div className="helpers-container">
							<div className="helper-images-container">
								<div className="helper-image-row">
									<div className="helper-image">
										<div className="helper-text">
											<h3 className='form-nav-item-number'>1</h3>
											<span>Embed Album</span>
										</div>
										<img src="/1.png" alt="example-music-url" />
									</div>
									<div className="helper-image">
										<div className="helper-text">
											<h3 className='form-nav-item-number'>2</h3>
											<span>Select large style</span>
										</div>
										<img src="/2.png" alt="example-music-url" />
									</div>
								</div>
								<div className="helper-image-row">
									<div className="helper-image">
										<div className="helper-text">
											<h3 className='form-nav-item-number'>3</h3>
											<span>Copy embed code</span>
										</div>
										<img src="/3.png" alt="example-music-url" />
									</div>
									<div className="helper-image">
										<div className="helper-text">
											<h3 className='form-nav-item-number'>4</h3>
											<span>Paste into notepad and copy text inside src</span>
										</div>
										<img src="/4.png" alt="example-music-url" />
									</div>
								</div>
							</div>
						</div>
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
		</>
	)
}

export default CreateMusicPage;
