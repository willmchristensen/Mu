from app.models import db, Event, environment, SCHEMA, User
from sqlalchemy.sql import text
from datetime import datetime

def seed_events():
    event1 = Event(
        title="Daft Punk Alive 2023",
        description="For the first time since 2006, the legendary French duo will be hitting the stage once again! This is a line up you do not want to miss.",
        artists=["Daft Punk", "Kraftwerk", "The Chemical Brothers", "Justice"],
        owner_id= 1,
        date=datetime(2023,7,29),
        location="Fresno, California",
        image_url="https://www.dancemusicnw.com/wp-content/uploads/2016/02/Daft-Punk-Alive-2007-Bionic-League.jpg",
    )
    event2 = Event(
        title="KI/KI",
        description="The new-age queen of techno is making another appearance. Accompanying her will be a suite of seasoned veterans in the new scene.",
        artists=["KI/KI","Dj Heartstrings", "Narciss", "Dj Boring", "Mall Grab"],
        owner_id= 2,
        date=datetime(2023,9,29),
        location="Berlin, Germany",
        image_url="https://geo-media.beatport.com/image_size/590x404/ff0db451-71bb-4f97-b5f1-5a60a9f26f39.jpg",
    )
    event3 = Event(
        title="Grimes",
        description="She is magical, and her guests are extraordinary.",
        artists=["Grimes","Purity Ring","Overmono"],
        owner_id= 3,
        date=datetime(2023,11,29),
        location="San Francisco, California",
        image_url="https://www.billboard.com/wp-content/uploads/media/grimes-pitchfork-650-430.jpg?w=650&h=430&crop=1",
    )
    event4 = Event(
        title="Death Cab for Cutie",
        description="The exciting alternative rock band will be performing an acoustic rendition of Plans.",
        artists=["Death Cab for Cutie","The Postal Service", "Modest Mouse"],
        owner_id= 4,
        date=datetime(2023,8,11),
        location="Bellingham, Washington",
        image_url="https://media.npr.org/assets/img/2023/01/06/death-cab-for-cutie-1-credit-jimmy-fontaine_wide-a7efbe9aa358c71eac7dee986c9cc6950c039279-s800-c85.webp",
    )
    event5 = Event(
        title="Pink Floyd",
        description="The kings of psychadelia are back for more.",
        artists=["Pink Floyd","Jimmy Hendrix", "The Doors"],
        owner_id= 1,
        date=datetime(2023,9,12),
        location="London, England",
        image_url="https://cdn.britannica.com/64/23164-050-A7D2E9D9/Pink-Floyd.jpg?w=400&h=300&c=crop",
    )
    event6 = Event(
        title="Tame Impala",
        description="These kids have made quite a legacy that will certainly leave a mark in history.",
        artists=["Tame Impala", "MGMT", "Foster The People", "Mac Demarco"],
        owner_id= 2,
        date=datetime(2024,1,1),
        location="Los Angeles, California",
        image_url="https://pbs.twimg.com/profile_images/1188863090646904832/2fi9Reuh_400x400.jpg",
    )
    event7 = Event(
        title="Vladmir Dubyshkin",
        description="Taking techno where it has never been before.",
        artists=["Vladmir Dubyshkin","Stephan Bodzin", "Nina Kraviz"],
        owner_id= 3,
        date=datetime(2024,3,21),
        location="Warsaw, Poland",
        image_url="https://f4.bcbits.com/img/0015092723_10.jpg",
    )
    event8 = Event(
        title="Kate Bollinger",
        description="Indie pop singer-songwriter with an enchanting voice.",
        artists=["Kate Bollinger", "Goth Babe", "Cigarettes After Sex"],
        owner_id= 4,
        date=datetime(2023,7,29),
        location="Richmond, Virginia",
        image_url="https://f4.bcbits.com/img/0026693528_10.jpg",
    )
   
    event_attendees = User.query.all()
    event1.attendees.extend(event_attendees)
    event2.attendees.extend(event_attendees)
    event3.attendees.extend(event_attendees)
    event4.attendees.extend(event_attendees)
    event5.attendees.extend(event_attendees)
    event6.attendees.extend(event_attendees)
    event7.attendees.extend(event_attendees)
    event8.attendees.extend(event_attendees)

    # for user in event_attendees: 
    #     events_owned = Event.query.filter_by(owner_id=user.id).all()
    #     user.events.extend(events_owned)

    all_events = [event1, event2, event3, event4, event5, event6, event7, event8]
    add_events = [db.session.add(event) for event in all_events]
    db.session.commit()


def undo_events():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.events RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM events"))

    db.session.commit()
