from flask import Blueprint, request
from app.models import Event, User, Ticket, event_attendees, db
from flask_login import login_required, current_user
from app.forms import PostForm
from sqlalchemy.orm import joinedload

ticket_routes = Blueprint("tickets", __name__)


@ticket_routes.route('/user/<int:user_id>/tickets')
def get_user_tickets(user_id):
    """
    Query for a specific user's tickets and return a list of dictionaries
    """
    user = User.query.get(user_id)

    if user:
        unique_events = set() 
        user_events = user.events_attended

        for event in user_events:
            if event not in unique_events:
                unique_events.add(event)  

        events = [event.to_dict() for event in unique_events]
        return {'events': events}
    else:
        return {'message': 'User not found'}, 404
    
    # user_tickets = (
    #     Ticket.query
    #     .join(User, User.id == event_attendees.c.users)
    #     .join(Event, Event.id == event_attendees.c.events)
    #     .filter(User.id == user_id)
    #     .all()
    # )

    # response = [ticket.to_dict() for ticket in user_tickets]
    # return { 'tickets': response }



#ALL TICKETS
@ticket_routes.route('')
def get_all_tickets():
    """
    Query for all tickets and returns a list of dictionaries
    """
    all_tickets = Ticket.query.all()
    response = [ticket.to_dict() for ticket in all_tickets]
    return { 'tickets': response }

@ticket_routes.route('/<int:id>')
def get_one_ticket(id):
    """
    Query for ticket by id
    """
    ticket = Ticket.query.get(id)
    response = ticket.to_dict()
    return { 'ticket': response }

@ticket_routes.route('/buy/<int:event_id>', methods=['POST'])
@login_required  # Use login_required to ensure the user is authenticated
def buy_ticket(event_id):
    event = Event.query.get(event_id)
    if not event:
        return {"message": "Event not found"}, 404

    current_user.add_attended_event(event)
    event.tickets_purchased += 1
    db.session.commit()
    
    return {"message": "Ticket purchased successfully"}