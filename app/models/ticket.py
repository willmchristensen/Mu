from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from sqlalchemy import Numeric

class Ticket(db.Model):
    __tablename__ = "tickets"

    if environment == "production":
     __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(Numeric(precision=8,scale=2), nullable=False)
    
    event_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("events.id")), on_delete="NO ACTION");
   

    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime)

    def to_dict(self):
       return {
          'id':self.id,
          'event_id': self.event_id,
          'price': self.price,
          'event': self.event,
          "createdAt": str(self.created_at),
          "updatedAt": str(self.updated_at)
       }