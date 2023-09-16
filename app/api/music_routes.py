from flask import Blueprint, request
from app.models import Post, db
from flask_login import login_required, current_user
from app.forms import PostForm

post_routes = Blueprint("music", __name__)

@post_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_music(id):
    """
    Edit music
    """
    print('we are inside edit music')
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        post = Post.query.get(id)

        if current_user.id == post.user_id:
            post.title = data['title']
            post.description = data['description']
            post.image_url = data['image_url']
            if data['music_url']:
                post.music_url = data['music_url']

            db.session.commit()
            return {
                "post": post.to_dict()
            }
        else:
            return {"errors": "You must be the owner of a post to edit that post."}

    return {
        "errors": form.errors
    }