import './CreatePostPage.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createPost } from '../../store/post';
const CreatePostPage = () => {
    const [title,setTitle] = useState('titletitletitletitletitletitletitle');
    const [description,setDescription] = useState('descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription');
    const [type,setType] = useState('Song');
    const [imageUrl,setImageUrl] = useState('https://archives.bulbagarden.net/media/upload/thumb/7/75/Iris_Dragonite.png/800px-Iris_Dragonite.png');
	const currentUser = useSelector((state) => state.session.user)
	const dispatch = useDispatch();
	const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            'title': type,
            'description': description,
            'type': type,
            'image_url': imageUrl,
			'user_id': currentUser.id,
        }
        await dispatch(createPost(data))
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
						type
						<input
							type="text"
							value={type}
							onChange={(e) => setType(e.target.value)}
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

export default CreatePostPage;