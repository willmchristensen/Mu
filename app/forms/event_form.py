from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField, DateField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Post

class EventForm(FlaskForm):
    owner_id = IntegerField('owner_id',validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    # date = DateField('date', validators=[DataRequired()])
    date = StringField('date', validators=[DataRequired()])
    location = StringField('location',validators=[DataRequired()])
    image_url = StringField('image_url',validators=[DataRequired()])