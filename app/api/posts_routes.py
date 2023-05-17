from flask import Blueprint, request
from app.models import Post, db
from flask_login import login_required, current_user
from app.forms import PostForm

post_routes = Blueprint("posts", __name__)

#ALL SPACES
@post_routes.route('')
def get_all_posts():
    """
    Query for all posts and returns a list of dictionaries
    """
    all_posts = Post.query.all()
    response = [post.to_dict() for post in all_posts]
    return { 'posts': response }
@post_routes.route('/<int:id>', methods=["GET"])
def get_one_post(id):
    """
    Query for post by id
    """
    print('WE IN HERE AT GET ONE POST FAM')
    post = Post.query.get(id)
    response = post.to_dict()
    return { 'post': response }
@post_routes.route('/new', methods=["POST"])
@login_required
def create_one_post():
    """
    create post
    """
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_post = Post(
            title = data['title'],
            description = data['description'],
            type = data['type'],
            user_id = data['user_id'],
            image_url = data['image_url']
        )
        db.session.add(new_post)
        db.session.commit()
        return {
            "post": new_post.to_dict()
        }

    return {
        "errors": form.errors
    }

@post_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_one_post(id):
    """
    Delete post
    """
    post = Post.query.get(id)
    if current_user.id == post.owner_id:
        db.session.delete(post)
        db.session.commit()
        return "post Deleted"
    else:
        return {
            "errors": "You must be the owner of a post to delete that post."
        }

@post_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_one_post(id):
    """
    Edit post
    """
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        post = post.query.get(id)

        if current_user.id == post.owner_id:
            post.title = data['title']
            post.description = data['description']
            post.type = data['type']
            post.user_id = data['user_id']
            post.image_url = data['image_url']            
            
            db.session.commit()
            return {
                "post": post.to_dict()
            }
        else:
            return {"errors": "You must be the owner of a post to edit that post."}

    return {
        "errors": form.errors
    }
