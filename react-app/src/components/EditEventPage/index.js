import './EditEventPage.css';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editOneEvent } from '../../store/event';

const EditEventPage = ({event}) => {
	const bruh = new Date(event.date)
    const [title,setTitle] = useState(event.title);
    const [description,setDescription] = useState(event.description);
    const [date,setDate] = useState(bruh.toISOString().split('T')[0]);
    const [location,setLocation] = useState(event.location);
    const [imageUrl,setImageUrl] = useState(event.imageUrl);
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
		const payload = {'eventId':event.id, 'item': data}
		await dispatch(editOneEvent(payload))
		history.push('/')
    }

    return(
        <div className="create-event-container">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label>
					title
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</label>
                </div>
                <div className="form-row">
                    <label>
					description
					<input
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</label>
                </div>
                <div className="form-row">
                    <label>
						date
						<input
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							required
						/>
					</label>
                </div>
                <div className="form-row">
                    <label>
					location
					<input
						type="text"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						required
					/>
				</label>
                </div>
                <div className="form-row">
                    <label>
					imageUrl
					<input
						type="text"
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						required
					/>
				</label>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default EditEventPage;