from app.models import db, User, environment, SCHEMA, Event
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password',
        profile_img_url="https://cdn-icons-png.flaticon.com/512/479/479341.png")
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password',
        profile_img_url="https://upload.wikimedia.org/wikipedia/en/a/ac/Marnie1.jpg")
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password',
        profile_img_url="https://i.pinimg.com/originals/a2/6b/00/a26b00f442747a4f1682feb1cedecb3f.jpg")
    will = User(
        username='willmc', email='will@aa.io', password='password',
        profile_img_url="https://archives.bulbagarden.net/media/upload/thumb/7/75/Iris_Dragonite.png/800px-Iris_Dragonite.png"
    )

    events_visited = Event.query.all()
    demo.events_attended.extend(events_visited)
    marnie.events_attended.extend(events_visited)
    bobbie.events_attended.extend(events_visited)
    will.events_attended.extend(events_visited)


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(will)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        
    db.session.commit()