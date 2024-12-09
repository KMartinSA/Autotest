<h1 align="center"> ✈️ FlagXpedia </h1>

### Figure 1. Main Page

![Main Page](https://github.com/user-attachments/assets/293f0455-7ed6-4807-aef9-aa9e0a8abf71)

How well do you know your flags? This app created in React is a fun way to learn the flags of the world!! As you can see in the image (Figure 1) above that the app randomly picks an image of flag with the country as its value. 
All you need to do is add the matching country into the input and click submit. Then the app will tell you if you are correct or not. Once you have clicked next the submit button is disabled so you can only submit once. 
### Figure 2. Correct Div


Shows the correct response
### Figure 3. Wrong Div


Shows the wrong response
### Figure 4. Next Button

![Next Button disables Submit Button](https://github.com/user-attachments/assets/8de38295-3e2b-4809-94f5-786c18e43b5b)

Question counter has been increased by one. Submit button is disabled to prevent multiple submits. 
### Figure 5. Start New Quiz

This resets all the counters to be zero, so you can start the quiz again.
### Figure 6.1. Question/Flag 10 before submit

![Flag 10](https://github.com/user-attachments/assets/8949553b-92d9-4f0f-a2a2-f22cd05934e8)


### Figure 6.2. Question/Flag 10 after submit

![Starts again at Flag 1](https://github.com/user-attachments/assets/715f2abf-6532-43bf-b363-cc7b4a82e39a)


<h2 align="center">🧮 Code Management: Git Project </h2>

To manage my tasks on this project I have been using Git Project, creating issues for each task, with an appropriate label, then assigning them to someone. Using a kanban board we can track the progress of those tickets by if they are ready, in progress, being reviewed or in the Done column.

### Figure 7. Git Project Board
![GitProject](https://github.com/user-attachments/assets/a0500657-a074-465a-a7ad-dd5bf49b3bf6)


## Code Review

### Figure 8. Code Review

<h2 align="center">Get Started</h2>

### Initial Set Up:

You would need to have Node.js installed please see link here:  for both windows and Mac
Then you need to have Git bash installed (if not already via another application): 

Install an IDE like Visual Studio Code: 

After you have those installed please clone above repo with
[Git Repo Link](https://github.com/KMartinSA/Autotest)

Run command:
`npm start`

This runs the app in your local machine as below:\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

You can also use other npm commands like test, build and eject please read further on for those.

<h2 align="center" color="Blue"> 💻 Creating the App: Code Practise</h2>

For this app I used standard coding practise of creating simplied function names, using all my classnames in the camelcase that is a better pratise when using Javascript. 
All the different section are broken down for a reader to clearly establish each function of a code partition and well indented for clarity. Please see image below as an example:

### Figure 9.1. Classname in camel case for Flagscounter

![ClassName of Flag Counter](https://github.com/user-attachments/assets/10a8fa34-fc15-44c3-a183-b688613b2237)

### Figure 9.2. Matching CSS in flagscounter

![Matching CSS of Flag Counter](https://github.com/user-attachments/assets/c083ccde-4cdb-4859-a25f-91618ca0f3ef)

### Figure 10.1. Const names for counters
![Const Names](https://github.com/user-attachments/assets/351a6c26-b2a9-4291-9068-6dd94cb85017)


### Figure 10.2. Const name used in a function

![Const Names used in a if function](https://github.com/user-attachments/assets/25b379c1-8851-41df-818e-40f8a2f4b047)



<h2 align="center" color="Blue"> ⚛️ Automated Testing</h2>

Automating testing is REACT has an inbuilt testing functionality of called Jest that uses react dom module to see if elements are the application as expected. The test that are used are in a file called App.test.js, you can run it in the VSC terminal at any time with the following command:

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### TDD Testing
Testing in this manner means that I could see the errors as I am building the application, that is a forward approach to testing. 

### Figure 11. Smoke Test (Jest)

![Jest Smoke Test](https://github.com/user-attachments/assets/4e3c7b04-6fe1-4562-ace8-20d0d9f1ee54)

This will just check that Jest is installed in our node modules by using a simple mathematics equation
### Figure 12.1. React DOM tests
![React DOM Tests](https://github.com/user-attachments/assets/e5ab441c-0c0b-40bb-9eb8-f7a422f06ac6)



### Figure 12.2. React DOM Failure - Placeholder Text
![React DOM Tests Failure](https://github.com/user-attachments/assets/fb90b93c-aed1-4c04-98b9-0a807f4acf5e)

![React DOM Tests Failure Reason](https://github.com/user-attachments/assets/06ef4d19-b22c-4115-9479-8fc0d14f2c3e)



### Figure 12.3. React DOM Failure Fix
![React DOM Tests Failure Fix](https://github.com/user-attachments/assets/129ff47d-61eb-4dd9-b003-5a81713f08da)



### Figure 12.4. React DOM Passes
![React DOM Tests Passed](https://github.com/user-attachments/assets/1bf7a2b8-a462-4427-9773-fd092e00313f)



The react dom will look at the elements in the application for example I can check text is displayed in the app, any input, labels or buttons by alt text or text you have used for them.

### Figure 13. Snapshots



Snapshots will visualise the actual logic of the application for instance if you are expected to see 1 once you have started a new quiz this will be reflected in the application

<h2 align="center" color="Blue"> 📇 Manual Testing via Excel</h2>

For manual testing I created a simple test case scenario with Excel that you can see below that just checks for most of the components in the app being displayed. Then a few to check functionality. I cover any manual testing for any scenario that the jest testing may not of been covered, giving the appp more test coverage. This is done to ensure less defects would be found in later development or testing:

### Figure 14.1. Manual testing 1



### Figure 14.2. Manual testing 2

<h2 align="center" color="Blue"> 🖱️ Accessibility </h2>

Accessbility is very important on any application that is built for indivduals who are either visually or orally impaired. One part of this is to label every element with an alt-text, aria label or role that is fittng for its type. The labelling of these elements means that any software can read the elements of the page to an end user. Alongside this I needed to check that contrasting colours are done clearly so can still be seen by someone visually impaired. 

### Figure 15. Alt-text Labelling



### Figure 16. Lighthouse Accessibility Check



### Figure 17. Fixes to Pass Accessibility



<h2 align="center" color="Blue"> 🖱️ Deployment of App </h2>

For deployment we are using a technology called Netlify to deploy my build into seperate environments that we can use for developing and testing purposes

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
