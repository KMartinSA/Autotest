<h1 align="center"> ✈️ FlagXpedia </h1>

### Figure 1. Main Page


How well do you know your flags? This app created in React is a fun way to learn the flags of the world!! As you can see in the image (Figure 1) above that the app randomly picks an image of flag with the country as its value. 
All you need to do is add the matching country into the input and click submit. Then the app will tell you if you are correct or not. Once you have clicked next the submit button is disabled so you can only submit once. 
### Figure 2. Correct Div


Shows the correct response
### Figure 3. Wrong Div


Shows the wrong response
### Figure 4. Next Button







Question counter has been increased by one. Submit button is disabled to prevent multiple submits. 
### Figure 5. Start New Quiz

This resets all the counters to be zero, so you can start the quiz again.
### Figure 6. Resets Quiz after 10 questions have been submitted




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

### Figure 9. Classname in camel case




### Figure 10. Matching CSS 




### Figure 11. Const names







<h2 align="center" color="Blue"> ⚛️ Automated Testing</h2>

Automating testing is REACT has an inbuilt testing functionality of called Jest that uses react dom module to see if elements are the application as expected. The test that are used are in a file called App.test.js, you can run it in the VSC terminal at any time with the following command:

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### TDD Testing
Testing in this manner means that I could see the errors as I am building the application, that is a forward approach to testing. 


### Figure 12. Smoke Test (Jest)




This will just check that Jest is installed in our node modules by using a simple mathematics equation
### Figure 13. React DOM 



The react dom will look at the elements in the application for example I can check text is displayed in the app, any input, labels or buttons by alt text or text you have used for them.

### Figure 14. Snapshots



Snapshots will visualise the actual logic of the application for instance if you are expected to see 1 once you have started a new quiz this will be reflected in the application

<h2 align="center" color="Blue"> 📇 Manual Testing via Excel</h2>

For manual testing I created a simple test case scenario with Excel that you can see below that just checks for most of the components in the app being displayed. Then a few to check functionality. I cover any manual testing for any scenario that the jest testing may not of been covered, giving the appp more test coverage. This is done to ensure less defects would be found in later development or testing:

### Figure 15. Manual testing 1


### Figure 16. Manual testing 2

<h2 align="center" color="Blue"> 🖱️ Accessibility </h2>

Accessbility is very important on any application that is built for indivduals who are either visually or orally impaired. One part of this is to label every element with an alt-text, aria label or role that is fittng for its type. The labelling of these elements means that any software can read the elements of the page to an end user. Alongside this I needed to check that contrasting colours are done clearly so can still be seen by someone visually impaired. 

### Figure 17. Alt-text Labelling



### Figure 18. Lighthouse Accessibility Check



### Figure 19. Fixes to Pass Accessibility



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
