# Mu
      
Mu is a clone of Resident Advisor. Mu provides a place to discuss and share information regarding the electronic music industry. 

Check out [Mu](https://mu-zfwi.onrender.com)

## Index

[MVP Feature List](https://github.com/willmchristensen/Mu/wiki/MVP-Feature-List) |
[Database Scheme](https://github.com/willmchristensen/Mu/wiki/Database-Schema) |
[User Stories](https://github.com/willmchristensen/Mu/wiki/User-Stories) |
[Wire Frames](https://github.com/willmchristensen/Mu/wiki/Wireframes) |

## Technologies Used


## Getting started
1. Clone this repository:

   ` https://github.com/willmchristensen/Mu `
   
2. Install dependencies into the react-app and the (flask) app by making a terminal for each one and then run the following:

   * `npm install`
   * `pipenv install -r requirements.txt`

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


# Features:
  
1. ## Events (Full CRUD)
   * Logged in users can create events.
   
   * Any user can view their events.
   
   * Logged in users can edit their events.
   
   * Logged in users can delete their events.

2. ## POSTS (Full CRUD)
   * Logged in users can create posts.

   * Any user can view their posts.
   
   * Logged in users can edit their posts.
   
   * Logged in users can delete their posts.
    
3. ## MUSIC (Full CRUD)
   * Logged in users can post music.
   
   * Any user can listen to their music.
   
   * Logged in users can edit their music.
   
   * Logged in users can delete their music.

4. ## TICKETS (Full CRUD)
   * Logged in users can buy tickets to events.
   
   * Any user can add an ticket to their cart.
   
   * Logged in users can edit cart.

# Bonus Features:
5. ## AWS
   * When submitting a post, logged in users can upload music files of approved file extensions.

6. ## SEARCH
   * Any user can search events, clubs, and posts.
