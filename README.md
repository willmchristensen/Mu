# Mu
      
Mu is a clone of Resident Advisor. Mu provides a place to discuss and share information regarding the electronic music industry. 
![mu-splash](https://github.com/willmchristensen/Mu/assets/88559384/f8a3010c-e70b-420b-bcb7-bd7a27faf692)


#Live Link: 
[Mu](https://mu-zfwi.onrender.com)

#Technologies Used:
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3.9%2B-blue.svg)](https://www.python.org/downloads/release)
[![Flask](https://img.shields.io/badge/Flask-2.0%2B-brightgreen.svg)](https://palletsprojects.com/p/flask/)
[![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-1.4%2B-red.svg)](https://www.sqlalchemy.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white)](https://redux.js.org/)

- ORM: SQLAlchemy
- Backend: Flask
- Frontend: React
- State Management: Redux

#Contact Me!
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/will-christensen-85531317a/)

## Getting started
1. Clone this repository:

   ` https://github.com/willmchristensen/Mu `
   
2. Install dependencies into the react-app and the (flask) app by making a terminal for each one and then run the following:

   * `npm install`
   * `pipenv install -r requirements.txt`

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `mu_schema` schema, defined
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
