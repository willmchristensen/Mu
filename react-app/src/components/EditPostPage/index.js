import './EditPostPage.css';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editOnePost } from '../../store/post';

const EditPostPage = ({post}) => {
    const [title,setTitle] = useState(post.title);
    const [description,setDescription] = useState(post.description);
    const [imageUrl,setImageUrl] = useState(post.imageUrl);
	const currentUser = useSelector((state) => state.session.user)
	const dispatch = useDispatch();
	const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            'title': title,
            'description': description,
            'image_url': imageUrl,
			'owner_id': currentUser.id,
        }
		const payload = {'postId':post.id, 'item': data}
		await dispatch(editOnePost(payload))
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

export default EditPostPage;
