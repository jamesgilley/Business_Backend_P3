# HuddleRoom

Welcome to HuddleRoom, a vertically-integrated application for self-service employee management. Managers and employees alike can use this app to assign and view shifts, share messages, contact managers, and post announcements. Please visit us at our live site!

[Live Deployment Link](http://huddleroom.herokuapp.com/)

### Features:

- Secure user authentication for any login.
- Managerial and employee accounts have different permissions.
- Employee account sign-up with customizable validation.
- Managerial creation and deletion of employee accounts.
- Managerial creation of schedules and shifts.
- Non-volatile messaging system and announcements board.
- Desktop and Mobile-friendly layout.

### Future Features:

- Employees may assign their own availability through the app.
- Employee accounts may securely contain more information about their job position.
- Vacation/Time-off requests may be automated.
- Schedule generation may be automated.
- Updated UI as more functions and features are introduced.
- Color Themes

### Technologies and Important Packages

- React
- MongoDB
- Mongoose
- Node.js
- Nodemon

# Development Team

- Jacky Tong (Scrum master, Wireframes, Deployment, Presentation)
  - https://github.com/tongjac/
- Soumya Singh (Backend functionality for employee profile, employee profile database and front end development for employee page)
  - https://github.com/sosingh1226
- Alexis Arando (Front end design and development of react pages, navigation, components, front and backend functionality of the schedule page, schedule database)
  - https://github.com/lex4736
- Victor Tran (Backend functionality for user authentication, database for authentication, user verification and front end development for user authentication and announcements page)
  - https://github.com/Victortran415
- James Gilley (Module appearances, Frontend/Backend communication, Update to semantic code)
  - https://github.com/jamesgilley

# Starting The Project Locally

- `git clone` or `git pull` according to if you're starting your local from scratch or just updating.
- In the base directory, run `npm install`. (It is helpful to temporarily disable antivirus since some team members have encountered it blocking crucial package files from downloading.)
- `cd client/ & npm install` again in that sub-directory. There may be depreciation warnings but all dependencies are currently intact as of March 23, 2021.
- `cd ..` to go back the base directory and run `npm build`. Wait for the build to complete, then run `npm run dev` to start the development client.
- Open `http://localhost:3000` in browser with console or wait for it to launch automatically after building. Port 8080 is the "live" version and will not reflect changes yet.
- `Ctrl + C` or `Commmand key + C` to end the development server.

### Thanks for using our app!
