import './CreateMusicPage.css';
import MusicCard from '../MusicCard';
import PodcastCard from '../PodcastCard';
import FormNavBar from '../FormNavBar';
import ContentHeader from '../ContentHeader';
import AreaButton from '../Magazine/AreaButton';
import MusicDetails from '../MusicDetails';
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { createPost, editOneMusicPost, getOnePost, getAllPosts } from '../../store/post';

const CreateMusicPage = () => {
		//TODO:UPDATE MUSIC
		// grab music from url (from edit button)
		// img url in form
	const { musicId } = useParams();
	console.log('------------------------------musicId OUTSIDE OF HANDLE SUBMIT', musicId);
	const post = useSelector(state => state.post.singlePost);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [musicUrl, setMusicUrl] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [formTitle, setFormTitle] = useState('');
	const [errors, setErrors] = useState({});
	const [isDisabled, setIsDisabled] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const currentUser = useSelector((state) => state.session.user)
	// TODO: READ MUSIC
	const posts = useSelector(state => state.post.posts);
	const sessionUser = useSelector(state => state.session.user);
	const allPosts = Object.values(posts);
	const allMusic = allPosts.filter(p => p?.musicUrl?.length > 0);
	const dispatch = useDispatch();
	const history = useHistory();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			'music_url': musicUrl,
			'title': title,
			// 'artist': artist,
			// 'song': song,
			// 'album': album,
			// 'title': title,
			'image_url': 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
			'description': description,
			'user_id': currentUser.id,
		};
		const payload = { 'musicId': musicId, 'item': data };
		// if editing a music post
		if (musicId) {
			console.log('------------------------------musicID INSIDE OF EXISITING MUSIC ID', musicId);
			if (!title || !description || !musicUrl) {
				setIsDisabled(true);
				setIsSubmitted(true);
			} else {
				await dispatch(editOneMusicPost(payload)).then(history.push('/music'));
			}
		} else {
			if (!title || !description || !musicUrl) {
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
	// grab post
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
			// TODO: add image url
		}
	}, [musicId, post])

	useEffect(() => {
		if (isSubmitted) {
			const errors = {};
			if (!title) errors.title = "Title is required"
			if (!description) errors.description = "Description is required"
			if (!musicUrl) errors.musicUrl = "Music URL is required"
			setErrors(errors)
			setIsDisabled(Object.values(errors).length > 0)
		}
	}, [title, description, musicUrl, isSubmitted]);

	useEffect(()=>{
        dispatch(getAllPosts())
    },[])

	if (!currentUser) history.push('/');
	if(!posts || !allPosts.length) return null;

	return (
		<>
			<div className="create-event-container">
				<FormNavBar pages={['Content', 'Details']} />
				<form
					className='create-event-form'
					onSubmit={handleSubmit}
				>	
					{/* formTitle: 
						fills the title of the page with either create or edit music based on the presence of an id in the url params
						*/}
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
							Music Url
						</label>
						{errors.musicUrl && <span className='errors'> {errors.imageUrl} </span>}
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
		</>
	)
}

export default CreateMusicPage;