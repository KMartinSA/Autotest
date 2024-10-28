<p align="center">
    <img width="400" src="https://github.com/user-attachments/assets/5480f772-29aa-4c80-9588-802b3cb7bcd1" alt="FlagXpedia Logo">
</p>
<p align="center">
    <img width="400" src="" alt="App_Home_Screen">
</p>

How well do you know your flags? This app created in React is a fun way to learn the flags of the world!! You will see as above an image of randomly picked flag and you just need to enter the matching country, then press submit and voila you will see if you are correct or not. 

<h2 align="center">Get Started</h2>

### Prerequisite:

You would need to have Node.js installed please see link here:  for both windows and Mac
Then you need to have Git bash installed (if not already via another application): 
Install an IDE like Visual Studio Code: 

After you have those installed please clone above repo with
`Git Clone <http:reponame>`

Run command:
`npm start`

This runs the app in your local machine as below:\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

You can also use other npm commands like test, build and eject please read further on for those.

<h2 align="center" color="Blue"> 💻 Creating the App</h2>

For this app I used standard coding practise of creating simplied function names, using all my classnames in the camelcase that is a better pratise when using Javascript. All the different section are borkwn down for a reader to clearly establish each function of a code partition and well indented for clarity. Please see image below as an example:






<h2 align="center" color="Blue"> ⚛️ Testing via Jest</h2>

For testing we used an inbuilt testing functioanly of REACT called Jest that is included in our file App.test.js, you can run it in the VSC terminal at any time with the following command:

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### TDD Testing
Testing in this manner mean that we could see the errors as we are building the application, that is a forward approach to testing. Please see some of the tests below:








Where are testing that you can see the title, slogan, Input label and submit boxes here. One test failed on...getting the new logo to be discovered by the alt text at first as I was trying to add it it in the header 1 <h1> tag. As below:



We resolved that test by adding it to the actual imag tag aand then it could discover the alt tag in this component. As featured below:




<h2 align="center" color="Blue"> 📇 Manual Testing via Excel</h2>

For manual testing I created a simple test case scenario with Excel that you can see below that just checks for most of the components in the app being displayed. Then a few to check functionality. We cover any manual testing for any scenario that the jest testing may not of been covered, giving the appp more test coverage. This is done to ensure less defects would be found in later development or testing. 







<h2 align="center" color="Blue"> 🖱️ Deployment of App </h2>

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<h2 align="center">🧮 Code Management: Git Project </h2>

To manage my tasks on this project I have been using Git Project, creating issues for each task, with an appropriate label then 

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
