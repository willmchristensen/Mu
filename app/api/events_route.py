from flask import Blueprint, request
from app.models import Event, db
from flask_login import login_required, current_user
# from app.forms import SpaceForm, QuestionForm

event_routes = Blueprint("events", __name__)

#ALL SPACES
@event_routes.route('')
def get_all_events():
    """
    Query for all events and returns a list of dictionaries
    """
    all_events = Event.query.all()
    response = [event.to_dict() for event in all_events]
    return { 'events': response }

#ALL SPACES
@event_routes.route('/<int:id>')
def get_one_event(id):
    """
    Query for event by id
    """
    event = Event.query.get(id)
    response = event.to_dict()
    return { 'event': response }