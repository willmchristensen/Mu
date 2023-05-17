from flask import Blueprint, request
from app.models import Event, db
from flask_login import login_required, current_user
from app.forms import EventForm

event_routes = Blueprint("events", __name__)

@event_routes.route('')
def get_all_events():
    """
    Query for all events
    """
    all_events = Event.query.all()
    response = [event.to_dict() for event in all_events]
    return { 'events': response }
@event_routes.route('/<int:id>')
def get_one_event(id):
    """
    Query for event by id
    """
    event = Event.query.get(id)
    response = event.to_dict()
    return { 'event': response }
@event_routes.route('/new', methods=["POST"])
@login_required
def create_one_event():
    """
    create event
    """
    form = EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_event = Event(
            owner_id = data['owner_id'],
            title = data['title'],
            description = data['description'],
            date = data['date'],
            location = data['location'],
            image_url = data['image_url']
        )
        db.session.add(new_event)
        db.session.commit()
        return {
            "event": new_event.to_dict()
        }

    return {
        "errors": form.errors
    }

@event_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_one_event(id):
    """
    Delete event
    """
    event = Event.query.get(id)
    if current_user.id == event.owner_id:
        db.session.delete(event)
        db.session.commit()
        return "Event Deleted"
    else:
        return {
            "errors": "You must be the owner of a event to delete that event."
        }

@event_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_one_event(id):
    """
    Edit event
    """
    form = EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        event = Event.query.get(id)

        if current_user.id == event.owner_id:
            event.title = data['title']
            event.description = data['description']
            event.date = data['date']
            event.location = data['location']
            event.image_url = data['image_url']            

            db.session.commit()
            return {
                "event": event.to_dict()
            }
        else:
            return {"errors": "You must be the owner of a event to edit that event."}

    return {
        "errors": form.errors
    }

