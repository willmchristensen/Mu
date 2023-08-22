from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,SelectField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Post

class PostForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    image_url = StringField('music_url')
    artist = StringField('artist')
    song = StringField('song')
    album = StringField('album')
    user_id = StringField('user_id')
    music_url = StringField('music_url')
