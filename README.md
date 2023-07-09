# New changes made
Before getting started you need to configure firebase. follow the instructions given below

Go to [firebase.com](https://firebase.google.com/)
Click on get started and add a project 
Disable google analistyic report for the project (you can find the toggle icon during the steps of creating new project)
Now you will be redirected to your project homepage.
There you can see "add an app to get started" click the web icon to add a web app
Follow the instructions showed there and copy your config code and paste it to the file named firebase.ts(src\components\config\firebase.ts).

Then at the homepage click on cloud firestore.
Click on create database.
Click production mode and click next.
Select cloud firestore location.

Then click on start collection.
Name the collection id as todo
For document id click on auto id
Then for the filed add field name as "taskName" and type as "string" then put a "random_value".
Then create another field by clicking the + icon and name it as "id" "number" "random_value"
Then create another field by clicking the + icon and name it as "completed" "boolean" "random_value"
(avoid quotes) 
Thats it t=now click on save.

Your project database is ready now.

Install the package named uuid through terminal in your code.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
