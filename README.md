# duck-tracker
A scientist is able to crowd source how much park-goers are feeding the ducks in the park. This app lets park-goers fill out essential data for the scientist to use.

## Running the Application

In order to run the application locally, please follow the following instructions:

1. `git clone` the repository
2. `cd` into the `duck-tracker` root directory
3. run `npm install`
4. `cd` into the `client` directory
3. run `npm install`
6. `cd` into the `backend` directory
3. run `npm install`
8. `cd` into the `duck-tracker` root directory
6. run `npm start` to launch the web app

# Homepage:
![thehome](https://user-images.githubusercontent.com/22223464/75649581-74f61700-5c08-11ea-86e4-239f5e38e673.JPG)
# Form page:
![thebigform](https://user-images.githubusercontent.com/22223464/75649573-6f003600-5c08-11ea-9744-36563cc52f28.JPG)
# Data page:
![thedata](https://user-images.githubusercontent.com/22223464/75649579-71629000-5c08-11ea-84b2-ef18af975631.JPG)
# Form page on small screen:
![theform](https://user-images.githubusercontent.com/22223464/75649584-77587100-5c08-11ea-98c7-97bab6ddded6.JPG)

# My Approach:
The scientist's collected data is not private so I figured it would be fine if users could see it. There doesnt necessarily need to be any data shown on the website since it is only being used by the scientist. If the scientist was familiar with quering databases or using database viewers my '/duckdata' page would be unnecessary. In the end it shows data in a React table, with a CSV download button for the scientist to further analyze the data. Non-scientist users can see the data as well which is acceptable.
A MERN (Mongo, Express, React, Node) web app was chosen for a few reasons but mainly I wanted to become more familiar with React and JavaScript. The MongoDB Atlas cloud database fits easily with a project like this and React makes creating appealing UI much less time consuming, so it seemed like a good choice. I have worked with React components in the past but this was my first time setting up a React app and using it on my own. 

# What needs improvement:
After my first few commits I wanted to deploy the project on Heroku so I could demonstrate my DevOps abilities and proper git workflow but decided they were lower priority. The main functionality and features were more important. Travis tests, unit tests, code coverage, and static analyzers, were not used either due to time.

Other features to add in the future:
 - Data to be sortable in the table
 - Alerts for successful/failed form submits
 - Overhaul UI - give it a unique look
 - Field validation - show valid locations and foods in a drop-down, ensure timeFed is not a future time
 - Error messages - currently any errors thrown are just written to console, not shown to user
 - Consolidate packages - currently npm install needs to be run three times instead of once
  
# Approximate time spent: 13 Hours
I wanted to challenge myself and showcase my ability to learn a new technology quickly. Mongo, Node, and Express were in my "comfort zone" but setting up a React app was new to me.

# Technologies:

MongoDB Atlas - No-SQL cloud database: 
chosen because it is efficient, flexible, and quick to program with.

Express - JS server framework:
chosen because it works very well with Node.

Node - JS runtime environment:
chosen to develop the full-stack in JS.

React - JS UI library:
chosen to develop good looking UI easily.
