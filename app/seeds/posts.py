from app.models import db, Post, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

def seed_posts():
    post1 = Post(
        title="Teenage Engineering unveils new handheld field recorder, TP-7",
        description="Swedish electronics company Teenage Engineering has announced its newest product, a compact audio recorder. The TP-7 is designed to register 128 GB of sound, music and voice in high-quality resolution for interviews, podcasts, voice memos, live performances and field recordings. The device features a motorised tape reel for visual feedback as well as grabbing the recording, scrubbing, pausing and menu navigation. Users will also be able to scrub audio through its side-mounted rocker. ",
        type="Article",
        image_url="https://imgproxy.ra.co/_/quality:66/w:1000/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL25ld3MvMjAyMy90ZWVuYWdlLWVuZ2luZWVyaW5nLXRwLTctZmllbGQtcmVjb3JkZXIuanBn",
        user_id=1,
    )
    post2 = Post(
        title="Daft Punk to premiere unreleased track, 'Infinity Repeating,' in Paris this week",
        description="Daft Punk are debuting an unreleased song this Thursday, May 11th.'Infinity Repeating,' featuring The Strokes' Julian Casablancas and The Voidz, will premiere at the Pompidou Center in Paris. Visitors will experience the track in ultra-high fidelity through a 30-speaker sound system and view the debut screening of the accompanying video.",
        type="Article",
        image_url="https://imgproxy.ra.co/_/quality:66/w:1000/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL25ld3MvMjAyMy9kYWZ0LXB1bmstcHJlbWllcmUtaW5maW5pdHktcmVwZWF0aW5nLmpwZw==",
        user_id=2,
    )
    post3 = Post(
        title="RA.884 Etapp Kyle",
        description="From '90s trance to Skee Mask, this is a delightfully eclectic session from the Ukrainian techno star.",
        image_url="https://imgproxy.ra.co/_/quality:66/w:484/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3BvZGNhc3QvcmE4ODQtZXRhcHBreWxlY3ZyLmpwZw==",
        type="Mix",
        artist="Etapp Kyle",
        user_id=3,
    )
    post4 = Post(
        title="Overmono - Good Lies",
        description="Overmono make the leap for the mainstream with their long-awaited debut album, which ups the ante when it comes to melody, hooks and all things pop.",
        image_url="https://imgproxy.ra.co/_/quality:66/w:484/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9hMzQ5MzkyNDMwNF8xMC1jb3Zlci5qcGc=",
        music_url="https://overmono.bandcamp.com/track/is-u",
        type="Review",
        artist="Overmono",
        song="Is U",
        album="Good Lies",
        user_id=4
    )
    all_posts = [post1, post2, post3, post4]
    add_posts = [db.session.add(post) for post in all_posts]
    db.session.commit()


def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM Posts"))

    db.session.commit()
