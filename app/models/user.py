from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .event_attendees import event_attendees

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profile_img_url=db.Column(db.String(255))
    hashed_password = db.Column(db.String(255), nullable=False)
    posts = db.relationship("Post", cascade="all, delete", backref="user")
    events_attended = db.relationship("Event", secondary=event_attendees, back_populates="attendees")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
    # ------------ATTEND EVENT------------
    def add_attended_event(self,event):
        if event not in self.events_attended:
            self.events_attended.append(event);
            event.tickets_purchased += 1
            db.session.commit()

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profile_img_url': self.profile_img_url,
        }
