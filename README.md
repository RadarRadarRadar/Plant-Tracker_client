# Plant Tracker Client: A Description


## Important Links

- [Client Deployed] (https://radarradarradar.github.io/Plant-Tracker_client/)
- [API Repo] (https://github.com/RadarRadarRadar/Plant-Tracker_api)
- [API Deployed] (https://radiant-brushlands-37403.herokuapp.com/)

## Planning Story
This is the frontend for my Plant Tracker API and DB.  It has a simple sign in and sign up page.  Once signed up and signed in you can use the links in the nav bar to add, update, delete and find plants.  There is also an option once signed in to change your password.

I used bootstrap cards to display the plant info when showing an index of plants or searching for a single plant.  Under the hood I have a function that renders the api response onto a card for each plant in the response.  Currently the cards show both the key and value directly from the DB.  In the future I will be decoupling these so as to not be locked into showing the keys in my cards.  Either way having a function format the card for me allows for easy adjustments to how they can be displayed.  This will be especially handy when adding more fields or relationships to the plants.

### User Stories

1. As a user I want to: Sign up
1. As a user I want to: Sign in
1. As a user I want to: Sign out
1. As a user I want to: Change my password
1. As a user I want to: See all the plants in the DB
1. As a user I want to: Add a plant to the DB
1. As a user I want to: Find a specific plant
1. As a user I want to: Modify a plant I own
1. As a user I want to: Remove a plant I own

### Technologies Used

- HTML
- CSS
- Bootstrap
- Jquery
- Javascript
- Ajax

### Unsolved Problems

- When an item in the Navbar is open and it's link is clicked, it should close.
- Create a space in the card for notes.
- Update a plant from it's card.
- Delete a plant from it's card.

## Images

#### Wireframe:
![Front Page](https://media.git.generalassemb.ly/user/32536/files/00002480-5005-11eb-8258-91fc34b47554)
![Sign In %2F Sign Up](https://media.git.generalassemb.ly/user/32536/files/01315180-5005-11eb-8ade-333211c533ed)

![Add Plant](https://media.git.generalassemb.ly/user/32536/files/00002480-5005-11eb-9a9b-96b25c8fb31f)
![Modify Plant](https://media.git.generalassemb.ly/user/32536/files/0098bb00-5005-11eb-8426-85339bb0c4aa)
![My Plants](https://media.git.generalassemb.ly/user/32536/files/0098bb00-5005-11eb-89d9-528097cbf32d)
![Remove Plant](https://media.git.generalassemb.ly/user/32536/files/01315180-5005-11eb-820b-d9ca961021a6)
![Search Plants](https://media.git.generalassemb.ly/user/32536/files/01315180-5005-11eb-9350-e72b0493a688)
