from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from .event_attendees import event_attendees

class Event(db.Model):
    __tablename__ = "events"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    artists = db.Column(db.JSON)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    # date = db.Column(db.DateTime, nullable=False)
    date = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)
    image_url = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime)
    tickets_purchased = db.Column(db.Integer, default=0)
    tickets = db.relationship("Ticket", backref="event", cascade="all, delete-orphan")
    # genre_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("genres.id")))
    # genre = db.relationship("Genre", back_populates="events")

    attendees = db.relationship(
    "User",
    secondary=event_attendees,
    back_populates="events_attended",
    cascade="all",  # Remove delete-orphan cascade
    uselist=True
    )

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "artists": self.artists,
            "ownerId": self.owner_id,
            "date": self.date,
            "location": self.location,
            "imageUrl": self.image_url,
            "attendees": [attendee.to_dict() for attendee in self.attendees],
            "tickets_purchased": self.tickets_purchased,
            "createdAt": str(self.created_at),
            "updatedAt": str(self.updated_at)
        }
