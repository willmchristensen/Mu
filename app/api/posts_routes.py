from flask import Blueprint, request
from app.models import Post, db
from flask_login import login_required, current_user
# from app.forms import SpaceForm, QuestionForm

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