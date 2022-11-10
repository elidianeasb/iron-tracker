# Placeholder Project Name

<br>



## Description

Bookkeeping platform for job hunting.



<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and filter by type of restaurant, log in and sign up. 
- **sign up** - As a user I want to sign up on the web page so that I can add favorite restaurants to my list.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **favorite list** - As a user I want to see the list of my favorite and delete them.
- **edit user** - As a user I want to be able to edit my profile.
- **result** - As a user I want to see the list of restaurant filter by my preferences.
- **restaurant listing** - As a user I want to see more details of the restaurant, be able to call them and visit their website and save it as favorites.



<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/private/:id/joblist`               | Private route. Render the `jobList` of the specific User.                  |                                                          |
| `POST`     | `/private/favorites/`              | Private route. Adds a new favorite for the current user.     | { name, cuisine, city, }                                 |
| `DELETE`   | `/private/favorites/:restaurantId` | Private route. Deletes the existing favorite from the current user. |                                                          |
| `GET`      | `/restaurants`                     | Renders `restaurant-list` view.                              |                                                          |
| `GET`      | `/restaurants/details/:id`         | Renders `restaurant-details` view for the particular restaurant. |                                                          |







## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  profilePicture: String, (URL)
  jobList: [JobsId],
}

```



Job model

```javascript
{
  company: String,
  jobTitle: String,
  location: String,
  workplace: [String], (On-site, Remote, Hybrid)
  date: Date,
  contactPerson: String,

  status: [String],
  website: String,
  webUrl: String,

  jobDescription: String,
  userNotes: String,
}

```



<br>

## API's

Bonus:

[LinkedIn API](https://developer.linkedin.com/)

[Google API](https://console.cloud.google.com/)

[Google Maps API](https://developers.google.com/maps)

<br>


## Packages



<br>



## Backlog

[See the Trello board.](https://trello.com/b/ubt7GCdP/ironjobs-project)



<br>



## Links



### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/elidianeasb/Project_2/tree/main)

[Deploy Link](https://project2oct.herokuapp.com/)



<br>



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing) (NOT FINAL)

### Contributors
Elidiane Bezerra - [`elidianeasb`](https://github.com/elidianeasb) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/elidiane-bezerra/)

Rafael Coelho - [`RFCoelho-gh`](https://github.com/RFCoelho-gh) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/rafael-fernandes-coelho/)