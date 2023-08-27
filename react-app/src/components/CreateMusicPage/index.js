import './CreateMusicPage.css';
import MusicCard from '../MusicCard';
import PodcastCard from '../PodcastCard';
import FormNavBar from '../FormNavBar';
import ContentHeader from '../ContentHeader';
import AreaButton from '../Magazine/AreaButton';
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { createPost, editOnePost, getOnePost, getAllPosts } from '../../store/post';

const CreateMusicPage = () => {
		//TODO:UPDATE MUSIC
		// grab music from url (from edit button)
		// img url in form
	const { postId } = useParams();
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
			'image_url': imageUrl,
			'description': description,
			'user_id': currentUser.id,
		}
		console.log('HANDLE SUBMIT:',data )
		const payload = { 'postId': postId, 'item': data }
		// if editing a music post
		if (postId) {
			if (!title || !description || !musicUrl) {
				setIsDisabled(true);
				setIsSubmitted(true);
			} else {
				await dispatch(editOnePost(payload)).then(history.push('/music'));
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
		if (postId) {
			dispatch(getOnePost(postId))
			setFormTitle('Edit Music')
		} else {
			setFormTitle('Create Music')
		}
	}, [dispatch, postId])

	useEffect(() => {
		if (postId && post) {
			setTitle(post.title)
			setDescription(post.description)
			setMusicUrl(post.musicUrl)
			// add image url
		}
	}, [postId, post])

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
			<div className="content-header-container">
				<div className="content-header-wrapper">
					<ContentHeader content={'Albums'} />
				</div>
			</div>
			<div className="music-cards-container">
				<div className="music-cards-wrapper">
					{
						allMusic.map(m => {
							return (
								<MusicCard music={m} />
							)
						})
					}
				</div>
				<div className="button">
					<AreaButton area={'albums'} />
				</div>
			</div>
			<div className="content-header-container">
				<div className="content-header-wrapper">
					<ContentHeader content={'Singles & EPs'} />
				</div>
			</div>
			<div className="music-cards-container">
				<div className="music-cards-wrapper">
					{
						allMusic.map(m => {
							return (
								<MusicCard music={m} />
							)
						})
					}
				</div>
			<div className="button">
					<AreaButton area={'singles & EPs'} />
			</div>
			</div>
			<div className="content-header-container">
				<div className="content-header-wrapper">
					<ContentHeader content={'Podcasts'} />
				</div>
			</div>
			<div className="music-cards-container">
				<div className="music-cards-wrapper">
					{
						allMusic.map(m => {
							return (
								<PodcastCard music={m} />
							)
						})
					}
				</div>
				<div className="button">
						<AreaButton area={'podcasts'} />
				</div>
			</div>
			<div className="content-header-container">
				<div className="content-header-wrapper">
					<ContentHeader content={'Mixes'} />
				</div>
			</div>
			<div className="music-cards-container">
				<div className="music-cards-wrapper">
					{
						allMusic.map(m => {
							return (
								<MusicCard music={m} />
							)
						})
					}
				</div>
				<div className="button">
					<AreaButton area={'mixes'} />
				</div>
			</div>
			<div className="content-header-container">
				<div className="content-header-wrapper">
					<ContentHeader content={'Playlists'} />
				</div>
			</div>
			<div className="music-cards-container">
				<div className="music-cards-wrapper">
					{
						allMusic.map(m => {
							return (
								<MusicCard music={m} />
							)
						})
					}
				</div>
			<div className="button">
					<AreaButton area={'playlists'} />
			</div>
						</div>
			<div className="content-header-container">
				<div className="content-header-wrapper">
					<ContentHeader content={'RA Reccomends'} />
				</div>
			</div>
			<div className="music-cards-container">
				<div className="music-cards-wrapper">
					{
						allMusic.map(m => {
							return (
								<PodcastCard music={m} />
							)
						})
					}
				</div>
				<div className="button">
						<AreaButton area={'RA Reccomends'} />
				</div>
			</div>
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
