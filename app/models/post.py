from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from sqlalchemy import Enum

class Post(db.Model):
    __tablename__ = "posts"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    image_url = db.Column(db.String, nullable=False)
    music_url = db.Column(db.String)
    artist = db.Column(db.String)
    song = db.Column(db.String)
    album = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "artist": self.artist,
            "song":self.song,
            "album":self.album,
            "imageUrl":self.image_url,
            "userId":self.user_id,
            "createdAt": str(self.created_at),
            "updatedAt": str(self.updated_at)
        }
