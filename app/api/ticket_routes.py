from flask import Blueprint, request
from app.models import Event, User, Ticket, db
from flask_login import login_required, current_user
from app.forms import PostForm

ticket_routes = Blueprint("tickets", __name__)

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