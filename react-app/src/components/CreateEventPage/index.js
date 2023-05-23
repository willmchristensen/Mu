import './CreateEventPage.css';
import ContentHeader from '../ContentHeader';
import FormNavBar from '../FormNavBar';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent } from '../../store/event';
import { useHistory,useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { editOneEvent } from '../../store/event';
import { getOneEvent } from '../../store/event';

const CreateEventPage = () => {
	const {eventId} = useParams();
	const event = useSelector(state => state.event.singleEvent);
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [date,setDate] = useState();
    const [location,setLocation] = useState();
    const [imageUrl,setImageUrl] = useState();
	const [formTitle, setFormTitle] = useState('');

	const currentUser = useSelector((state) => state.session.user)
	const dispatch = useDispatch();
	const history = useHistory();

    const handleSubmit = async (e) => {
		e.preventDefault();
        const data = {
			'title': title,
            'description': description,
            'date': date,
            'location': location,
            'image_url': imageUrl,
			'owner_id': currentUser.id,
        }
		const payload = {'eventId':eventId, 'item': data}
		if(eventId){
			await dispatch(editOneEvent(payload))
		}else {
			await dispatch(createEvent(data))
		}
		history.push('/')
    }

	const handleCancel = (e) => {
		e.preventDefault();
		history.push('/events');
	}

	useEffect(()=>{
		if(eventId) {
			dispatch(getOneEvent(eventId))
			setFormTitle('Edit Event')
		}else {
			setFormTitle('Create Event')
		}
    },[dispatch, eventId])
// ---------------THIS IS SO COOL-----------------------------
	useEffect(()=>{
		if(eventId && event) {
			setDate(event.date ? new Date(event.date).toISOString().split('T')[0] : '')
			setTitle(event.title)
			setDescription(event.description)
			setLocation(event.location)
			setImageUrl(event.imageUrl)
		}
    },[eventId, event])

    return(
        <div className="create-event-container">
			<FormNavBar pages={['Lineup', 'Details', 'Profile', 'Promotional']}/>
            <form
				className='create-event-form'
				onSubmit={handleSubmit}
			>
				<ContentHeader content={formTitle} />
				<div className="form-section">
					<ContentHeader content={'Basic'} />
					<div className="form-row-column">
						<label for='title'>
						title
						</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
					</div>
					<div className="form-row-column">
						<label for='description'>
						description
						</label>
						<input
							type="text"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
						/>
					</div>
					<div className="form-row-column">
						<label for='date'>
							date
						</label>
							<input
								type="date"
								value={date}
								onChange={(e) => setDate(e.target.value)}
								required
							/>
					</div>
					<div className="form-row-column">
						<label for='location'>
						location
						</label>
						<input
							type="text"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							required
						/>
					</div>
					<div className="form-row-column">
						<label for='imageUrl'>
						imageUrl
						</label>
						<input
							type="text"
							value={imageUrl}
							onChange={(e) => setImageUrl(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className="form-section">
					<ContentHeader content={'Venue'} />
					<div className="form-row">
						<label for='venueknown'>Venue Known</label>
						<input type="radio" />
						<label form='venuetba'>Venue TBA</label>
						<input type="radio" />
					</div>
					<div className="form-row">
						<label for='venue'>Venue</label>
						<input type="text" />
					</div>
				</div>
				<div className="form-buttons">
					<button type='cancel' className='oval-button-area small-button' onClick={handleCancel}>Cancel</button>
					<button type='submit' className='oval-button-area small-button'>submit</button>
				</div>
            </form>
        </div>
    )
}

export default CreateEventPage;
