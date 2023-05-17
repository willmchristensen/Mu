from .db import db , environment, SCHEMA, add_prefix_for_prod


event_attendees = db.Table(
    "event_attendees",
    db.Model.metadata,
    db.Column("users", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"))),
    db.Column("events", db.Integer, db.ForeignKey(add_prefix_for_prod("events.id")))
)

if environment == "production":
    event_attendees.schema = SCHEMA

if environment == "production":
    event_attendees.schema = SCHEMA
