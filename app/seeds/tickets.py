from app.models import db, Ticket, environment, SCHEMA
from sqlalchemy.sql import text


def seed_tickets():
    ticket1 = Ticket(
        price = 99.99,
        event_id = 1
    )
    ticket2 = Ticket(
        price = 100.11,
        event_id = 2
    )
    ticket3 = Ticket(
        price = 77.43,
        event_id = 3
    )
    ticket4 = Ticket(
        price = 43.44,
        event_id = 4
    )
    ticket5 = Ticket(
        price = 88.11,
        event_id = 5
    )
    ticket6 = Ticket(
        price = 92.22,
        event_id = 6
    )

    ticket7 = Ticket(
        price = 33.33,
        event_id = 7
    )
    ticket8 = Ticket(
        price = 11.11,
        event_id = 8
    )


    all_tickets = [ticket1, ticket2, ticket3, ticket4,ticket5,ticket6,ticket7,ticket8]
    add_tickets = [db.session.add(ticket) for ticket in all_tickets]
    db.session.commit()


def undo_tickets():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.tickets RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM tickets"))

    db.session.commit()
