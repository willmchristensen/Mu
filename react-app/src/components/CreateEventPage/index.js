import './CreateEventPage.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent } from '../../store/event';

const CreateEventPage = () => {
    const [title,setTitle] = useState('titletitletitletitletitletitletitle');
    const [description,setDescription] = useState('descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription');
    const [date,setDate] = useState();
    const [location,setLocation] = useState('location');
    const [imageUrl,setImageUrl] = useState('https://archives.bulbagarden.net/media/upload/thumb/7/75/Iris_Dragonite.png/800px-Iris_Dragonite.png');
	const currentUser = useSelector((state) => state.session.user)
	const dispatch = useDispatch();

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
		const res = await dispatch(createEvent(data))
        if(res.ok){
			return res
		}else{
			return {'no worky': res}
		}
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

export default CreateEventPage;