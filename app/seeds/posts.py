from app.models import db, Post, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

def seed_posts():
    post1 = Post(
        title="Teenage Engineering unveils new handheld field recorder, TP-7",
        description="Swedish electronics company Teenage Engineering has announced its newest product, a compact audio recorder. The TP-7 is designed to register 128 GB of sound, music and voice in high-quality resolution for interviews, podcasts, voice memos, live performances and field recordings. The device features a motorised tape reel for visual feedback as well as grabbing the recording, scrubbing, pausing and menu navigation. Users will also be able to scrub audio through its side-mounted rocker. ",
        image_url="https://imgproxy.ra.co/_/quality:66/w:1000/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL25ld3MvMjAyMy90ZWVuYWdlLWVuZ2luZWVyaW5nLXRwLTctZmllbGQtcmVjb3JkZXIuanBn",
        user_id=1,
    )
    post2 = Post(
        title="Daft Punk to premiere unreleased track, 'Infinity Repeating,' in Paris this week",
        description="Daft Punk are debuting an unreleased song this Thursday, May 11th.'Infinity Repeating,' featuring The Strokes' Julian Casablancas and The Voidz, will premiere at the Pompidou Center in Paris. Visitors will experience the track in ultra-high fidelity through a 30-speaker sound system and view the debut screening of the accompanying video.",
        image_url="https://imgproxy.ra.co/_/quality:66/w:1000/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL25ld3MvMjAyMy9kYWZ0LXB1bmstcHJlbWllcmUtaW5maW5pdHktcmVwZWF0aW5nLmpwZw==",
        user_id=2,
    )
    post3 = Post(
        title="RA.884 Etapp Kyle",
        description="From '90s trance to Skee Mask, this is a delightfully eclectic session from the Ukrainian techno star.",
        image_url="https://imgproxy.ra.co/_/quality:66/w:484/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3BvZGNhc3QvcmE4ODQtZXRhcHBreWxlY3ZyLmpwZw==",
        artist="Etapp Kyle",
        user_id=3,
    )
    post4 = Post(
        title="Overmono - Good Lies",
        description="Overmono make the leap for the mainstream with their long-awaited debut album, which ups the ante when it comes to melody, hooks and all things pop.",
        image_url="https://imgproxy.ra.co/_/quality:66/w:484/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9hMzQ5MzkyNDMwNF8xMC1jb3Zlci5qcGc=",
        music_url="https://bandcamp.com/EmbeddedPlayer/album=3875264052/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=888794823/transparent=true/",
        artist="Overmono",
        song="Is U",
        album="Good Lies",
        user_id=4
    )
    post5 = Post(
        title="Moving Alone",
        description="Three emotional tracks for peak time dancefloors, working out, or riding fast on your bike. All tracks are produced in the BunkerBauer studios in Copenhagen.",
        image_url="https://f4.bcbits.com/img/a2100632888_10.jpg",
        music_url="https://bandcamp.com/EmbeddedPlayer/album=1196960908/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=2203840495/transparent=true/",
        artist="DJ IBON",
        song="Lullaby For Dry Eyes",
        album="Moving Alone",
        user_id=1
    )
    post6 = Post(
        title="A Celestial Body",
        description="Emotional track from Mikkel Rev.",
        image_url="https://f4.bcbits.com/img/a3552343973_10.jpg",
        music_url="https://bandcamp.com/EmbeddedPlayer/album=876465648/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=2670500126/transparent=true/",
        artist="Mikkel Rev",
        song="A Celestial Body",
        album="UTE07",
        user_id=2
    )
    post7 = Post(
        title="Shockwave Planners",
        description="Another masterpiece from AIROD.",
        image_url="https://f4.bcbits.com/img/a1508976167_10.jpg",
        music_url="https://bandcamp.com/EmbeddedPlayer/album=3213808033/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=2317980078/transparent=true/",
        artist="AIROD",
        song="Shockwave Planners",
        album="Focus EP",
        user_id=3
    )    
    post8 = Post(
        title="Rush / Can't Stop Thinking About",
        description="Another masterpiece from Logic1000.",
        image_url="https://f4.bcbits.com/img/a3342773429_10.jpg",
        music_url="https://bandcamp.com/EmbeddedPlayer/album=2126083106/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        artist="Logic1000",
        song="Rush",
        album="Rush / Can't Stop Thinking About",
        user_id=4
    )
    post9 = Post(
        title="5am Nostalgia",
        description="Another masterpiece from Lobec.",
        image_url="https://f4.bcbits.com/img/a3063094923_10.jpg",
        music_url="https://bandcamp.com/EmbeddedPlayer/album=3863629574/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=4117592769/transparent=true/",
        artist="Lobec",
        song="5am Nostalgia",
        album="5am Nostalgia",
        user_id=4
    )        
    post10 = Post(
        title="Kolter - Ying Yang by Pilot",
        description="Another masterpiece from Pilot.",
        image_url="https://f4.bcbits.com/img/a1642185986_10.jpg",
        music_url="https://bandcamp.com/EmbeddedPlayer/album=339988435/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        artist="Pilot",
        song="Ying Yang",
        album="Kolter - Ying Yang",
        user_id=1
    )     
    
    all_posts = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10]
    add_posts = [db.session.add(post) for post in all_posts]
    db.session.commit()


def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))

    db.session.commit()
