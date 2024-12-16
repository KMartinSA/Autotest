<h1 align="center"> ✈️ FlagXpedia </h1>

### Figure 1. Main Page






How well do you know your flags? This app created in React is a fun way to learn the flags of the world!! As you can see in the image (Figure 1) above, the app randomly picks an image of a flag with the country as its value. 
All you need to do is add the matching country into the input and click submit. Then the app will tell you if you are correct or not. Once you have clicked next the submit button is disabled so you can only submit once. 

### Figure 2. Correct Div


Shows the correct response
### Figure 3. Wrong Div


Shows the wrong response
### Figure 4. Next Button



After you have submitted your previous answer, you can click the next button to show you the next flag and clears the previous results

<h2 align="center">🧮 Code Management: Git Project </h2>

To manage my tasks on this project I have been using Git Project, creating issues for each task, with an appropriate label, then assigning them to someone. Using a Kanban board we can track the progress of those tickets by whether they are ready, in progress, being reviewed, or in the Done column. The tasks should be appropriately broken down into sensible reasonable chunks of coding. For example adding one feature like a submit form, fixing a bug, or improving code for full audit transparency of the work in progress.

### Figure 5. Git Project Board
![GitProject](https://github.com/user-attachments/assets/a0500657-a074-465a-a7ad-dd5bf49b3bf6)


### Figure 6. The task with Pull Request aligned 


## Code Review
One essential part of the tasks is having another person assess your code, this is known as another form of testing called static testing. Asking for peer reviews is just as important as testing, these peer reviews are really useful for instance feedback on your code, for instance having names for elements or stored variables that are clear and make sense to another developer. Testing on this format can find what can be referred to as "code smells" where your code is using bad practices but doesn't fail on compiling or in any functionality. 

### Figure 7. Code Review


Please see the Code Review of suggestions on changing the code name

<h2 align="center" color="Blue"> 💻 Creating the App: Code Practise</h2>

For this app I used the standard coding practice of creating simplified function names, using all my classnames in camelcase which is a better practice when using Javascript. 
All the different sections are broken down for a reader to establish each function of a code partition and well indented for clarity. Please see the image below as an example:


### Figure 9.1. Classname in camel case for submitButtion



As you can see in this image I have used the first word in lowercase and the second word as a capital letter for the first letter (submitButton), with no spaces as Javascript doesn't like spaces between text unless it's set as a string. 

### Figure 9.2. Matching CSS in submitButton



In this image, I have set some styling of the submit button to make it a lot nicer and stand out against the darker background, I have rounded the buttons so they don't seem as formal. 

### Figure 10.1. Const names for Country Value


To set the country value we have created a variable (const) where the country name that is added to the input is added into this variable of countryValue

<h2 align="center"> ⏰ Get Started: Running the App</h2>

### Initial Set Up:

You would need to have Node.js installed: [Node JS Download for Mac/Windows](https://nodejs.org/en/download/package-manager)

Then you need to have Git bash installed (if not already via another application): [GIT Bash](https://git-scm.com/downloads/win)

Install an IDE like Visual Studio Code:  [Visual Studio Code](https://code.visualstudio.com/)

After you have those installed please clone the above repo with
[Git Repo Link](https://github.com/KMartinSA/Autotest)

Run command:
`npm start`

This runs the app in your local machine as below:\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

You can also use other npm commands like test, build, and eject if you don't mind reading further on those.

<h2 align="center" color="Blue"> ⚛️ Testing the App </h2>

Testing for any application is vital to make sure that all the elements of the app are viewed, and usable and that any functionality works as expected. There are various forms of testing approaches that we can use in this instance that are listed as different versions of hats (time stuff). In this instance, I have started with using a blue hat and looking at what I am testing and why. I am testing the code, functionality, accessibility, and app elements, as this is a small app I am not looking at security, performance, or stress testing currently. The next step is white hat testing which looks at the tools and resources I need for testing, as this is a react app. I can utilize some of the built-in libraries to cover all our testing with JEST and react-dom snapshots, and for accessibility, I will use Lighthouse which is a built-in tool of Chrome. 
 


Two of the main methods you can implement testing with are either Automation or Manual, many places will still use both to cover all aspects.

### Automated Testing
Automated testing is where you can use software or tools to do your testing, this can save a lot of time and effort compared to 

Automating testing is REACT has an inbuilt testing functionality called Jest that uses the react-dom module to see if elements are the application as expected. The tests that are used are in a file called App.test.js, you can run it in the VSC terminal at any time with the following command:

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









### Figure 14. Snapshots




Snapshots will visualize the actual logic of the application for instance if you are expected to see 1 once you have started a new quiz this will be reflected in the application

<h2 align="center" color="Blue"> 📇 Manual Testing via Excel</h2>

For manual testing, I created a simple test case scenario with Excel that you can see below that just checks for most of the components in the app being displayed. Then a few to check functionality. I cover any manual testing for any scenario that the jest testing may not have been covered, giving the app more test coverage. This is done to ensure fewer defects would be found in later development or testing:


### Figure 15. Manual testing 1


### Figure 16. Manual testing 2


<h2 align="center" color="Blue"> 🖱️ Accessibility </h2>

Accessibility is very important in any application that is built for individuals who are either visually or orally impaired. One part of this is to label every element with an alt-text, aria-label, or role that is fit for its type. The labeling of these elements means that any software can read the elements of the page to an end user. Alongside this I needed to check that contrasting colors are done so can still be seen by someone visually impaired. 




### Figure 17. Alt-text Labelling



### Figure 18. Lighthouse Accessibility Check



### Figure 19. Fixes to Pass Accessibility




<h2 align="center" color="Blue"> 🖱️ Deployment of App </h2>

For deployment, we are using a technology called Netlify to deploy my build into separate environments that we can use for developing and testing purposes

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single-build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
