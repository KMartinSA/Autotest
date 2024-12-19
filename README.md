[![codecov](https://codecov.io/gh/KMartinSA/Autotest/graph/badge.svg?token=9QRIRJRT3Q)](https://codecov.io/gh/KMartinSA/Autotest)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ea9ce03a-42a6-4dc7-a849-4b48a08ffd42/deploy-status)](https://app.netlify.com/sites/soft-kitten-3a1ff4/deploys)

<h1 align="center"> ✈️ FlagXpedia </h1>

### Figure 1. Main Page

![Home Page](https://github.com/user-attachments/assets/880778c5-b17a-4312-b7f8-2725cfbfe6f9)

How well do you know your flags? This app created in React is a fun way to learn the flags of the world!! As you can see in the image (Figure 1) above, the app randomly picks an image of a flag with the country as its value. 
All you need to do is add the matching country into the input and click submit. Then the app will tell you if you are correct or not. Once you have clicked next the submit button is disabled so you can only submit once. 

### Figure 2. Correct Response

![Correct Response](https://github.com/user-attachments/assets/17cee054-9056-4764-b90e-f6e1a1270886)

Shows the correct response if you add in the correct Country Name that matches the flag
### Figure 3. Wrong Response

![Wrong Response](https://github.com/user-attachments/assets/108db682-8c87-4da5-8bd1-42718a47d301)

Shows the wrong response if you add in the incorrect Country Name that does not match the flag
### Figure 4. Next Button
![After Pressing Next button](https://github.com/user-attachments/assets/7f599a4f-af8b-4ab7-a7af-eec8b5799490)

After you have submitted your previous answer, you can click the next button to show you the next flag and clear the previous results.

<h2 align="center">🧮 Code Management: Git Project </h2>

To manage my tasks on this project I have been using Git Project, creating issues for each task, with an appropriate label, and then assigning them to someone. Using a Kanban board we can track the progress of those tickets by whether they are ready, in progress, being reviewed, or in the Done column. The tasks should be appropriately broken down into sensible reasonable chunks of coding. For example adding one feature like a submit form, fixing a bug, or improving code for full audit transparency of the work in progress.


### Figure 5. Git Project Board
![GitProject](https://github.com/user-attachments/assets/a0500657-a074-465a-a7ad-dd5bf49b3bf6)


### Figure 6. Accessibility with Pull Request aligned 

![Pull Request connected to issue](https://github.com/user-attachments/assets/06dc9d6f-aa94-404a-b5d9-d0dd71056df7)

## Code Review
One essential part of the tasks is having another person assess your code, this is known as another form of testing called static testing. Asking for peer reviews is just as important as testing, these peer reviews are really useful for instance feedback on your code, for instance having names for elements or stored variables that are clear and make sense to another developer. Testing on this format can find what can be referred to as "code smells" where your code is using bad practices but doesn't fail in compiling or any functionality. 

### Figure 7. Code Review

![Code Review](https://github.com/user-attachments/assets/a1c267f7-5c3b-4f0a-baa4-d872e99d130c)


## Version Control
A good reason why we use GitHub as a tool to save our code other than it is open source and free, is that it comes with a version control built in. Subsequently, this means that every change to your code is recorded for auditing purposes. Therefore if someone submitted code that broke a live system or another functionality due to a dependency. Version controls give all developers an easy way to roll back to the latest working version. As there is normally more than one developer working on the same repository, conflicts can emerge. When you process a merge into the main/default branch then GitHub compares all the changes. When GitHub detects two lines of code with different changes it creates a merge conflict. Hence a developer has to manually tell Github which version of code is to be selected. 

### Figure 8. Version Control - Commit Branch in Visual Studio Codes

![Version Control](https://github.com/user-attachments/assets/fcf24d6a-02bc-4778-af12-301c2ad4da06)

### Figure 9. Merge Conflicts Readme

![Merge Conflicts from pulling into local branch](https://github.com/user-attachments/assets/a91617f7-3d2e-442e-a1d0-82819046b0d2)


### Figure 10. Merge Conflict Resolved

![Merge Conflict resolved](https://github.com/user-attachments/assets/3d7c4f43-a802-4e7d-a85a-8eae4a3576e1)


Please see the Code Review of suggestions on changing the code name

<h2 align="center" color="Blue"> 💻 Creating the App: Code Practise</h2>

For this app I used the standard coding practice of creating simplified function names, using all my classnames in camelcase which is a better practice when using Javascript. 
All the different sections are broken down for a reader to establish each function of a code partition and well indented for clarity. 

### Figure 11. Classname in camel case for Correct Result

![ClassName of Correct Result](https://github.com/user-attachments/assets/d13eddb6-6b14-4f01-8260-385197be2861)

As you can see in this image I have used the first word in lowercase and the second word as a capital letter for the first letter (submitButton), with no spaces as Javascript doesn't like spaces between text unless it's set as a string. 

### Figure 12. Matching CSS in Colour Result

![Matching CSS of Correct Results](https://github.com/user-attachments/assets/422168da-4b3d-46ad-bac3-070f0a31e6de)

In this image, I have set some styling of the submit button to make it a lot nicer and stand out against the darker background, I have rounded the buttons so they don't seem as formal. 

### Figure 13. Const names for Country Value
![Const Names](https://github.com/user-attachments/assets/3c4c3760-1996-4079-9051-ce7a9aa4d4da)

### Figure 14. Const names used in a form

![Const name used in form](https://github.com/user-attachments/assets/75a4f418-b369-44ea-840e-aef4a45a3f38)


To set the country value I have created a variable (const) where the country name that is added to the input is added into this variable of countryValue

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

You can also use other npm commands to test, build, and eject if you don't mind reading further on those.

<h2 align="center" color="Blue"> ⚛️ Testing the App </h2>

Testing for any application is vital to ensure that all the elements of the app are viewed, and usable and that any functionality works as expected. There are various testing approaches that we can use in this instance there are methods listed as different versions of hats (timestuff n.d.). In this instance, I have started using a blue hat method by looking at what I am testing and why. I am testing the code, functionality, accessibility, and app elements, as this is a small app I am not looking at security, performance, or stress testing currently. The next step is white hat testing which looks at the tools and resources I need for testing, as this is a react app. I can utilize some of the built-in libraries to cover all our testing with JEST and react-dom snapshots and for accessibility. I will use Lighthouse which is a built-in tool of Chrome. 
 
Two of the main methods for testing are Automation and manual testing. Many testers still use both to this day to cover more.  

### Automated Testing
Automated testing is where you can use software or tools to do your testing, this saves a lot of time and effort compared to manual testing. When testing is set up like this from the beginning of development it reduces the defects being raised, the amount of time fixing bugs and tech debt from increasing.

REACT has an inbuilt testing functionality called Jest that uses the react-dom module to see if elements are the application as expected. The tests that are used are in a file called App.test.js, you can run it in the VSC terminal at any time with the following command:

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### TDD Testing
Testing in this manner means that I can forward develop, creating tests before I develop that would fail. Once you have built the element these tests will then pass.

### Figure 15. Smoke Test (Jest)

![Jest Smoke Test](https://github.com/user-attachments/assets/4e3c7b04-6fe1-4562-ace8-20d0d9f1ee54)

This will check that Jest is installed in our node modules by using a simple mathematics equation
### Figure 16.1. React DOM tests

### Figure 16.2. React DOM Failure - Placeholder Text
![React DOM Tests Failure](https://github.com/user-attachments/assets/fb90b93c-aed1-4c04-98b9-0a807f4acf5e)

![React DOM Tests Failure Reason](https://github.com/user-attachments/assets/06ef4d19-b22c-4115-9479-8fc0d14f2c3e)

### Figure 16.3. React DOM Failure Fix
![React DOM Tests Failure Fix](https://github.com/user-attachments/assets/129ff47d-61eb-4dd9-b003-5a81713f08da)

### Figure 16.4. React DOM Passes
![React DOM Tests Passed](https://github.com/user-attachments/assets/1bf7a2b8-a462-4427-9773-fd092e00313f)

### Figure 17 Snapshot Depreciated

![Snapshot Depreciator](https://github.com/user-attachments/assets/2a222d11-8d24-4153-a913-0105a9cffc8c)

Snapshots would visualize the actual logic of the application for instance, if you were to add text for the flags then Snapshots can render that action and check for the outcome unfortunately, as this has been deprecated, all the learning for snapshots is outdated.

<h2 align="center" color="Blue"> 📇 Manual Testing via Excel</h2>

For manual testing, I created a simple test case scenario with Excel that checks for most of the components in the app being displayed. Then a few to check functionality. Manual testing can be longer than automated testing but could find defects that a machine would not be able to detect, for instance, decisions that are made in functionality, and workflows. I will use manual testing as an end-to-end test for my application. 


### Figure 18. Manual Testing

![Manual Tests](https://github.com/user-attachments/assets/3fcc785f-7616-4d7f-87aa-3a767288b8e4)


<h2 align="center" color="Blue"> 🖱️ Accessibility </h2>

Accessibility is important in any application for individuals who are either visually or orally impaired.
Most speech recognition software would be able to recognise HTML elements, for instance, if you have <input> in your code, most accessibility will read out the elements and text. 
An alternative way for unrecognisable elements is to label every HTML element with an alt-text, aria-label, or role. Alongside, this I needed to check that contrasting colours were done so could still be seen by someone visually impaired. For testing accessibility for my app, I have used Lighthouse which is a built-in functionality in Google Chrome. It does a lot of automatic accessibility but it has limited functionality so you may need to cover extra accessibility testing manually.  

[Manual Test Log](https://nchlondonacuk-my.sharepoint.com/:x:/g/personal/km3366a_nulondon1_onmicrosoft_com/EXlBmKqpo-xKlq407Xf6p0MBHqx1T1K1bXlrn7GBxVmwVg?e=ut297H)
### Figure 19. Lighthouse Accessibility Check

![Accessibility Results at 92%](https://github.com/user-attachments/assets/cb325ba2-6497-44e2-9a56-cf3bc70fb0b4)

### Figure 20. Fixes to Pass Accessibility: Changed colour for better contrasting

![Accessibility Fix from Coral to a Dark blue](https://github.com/user-attachments/assets/0dc781ec-ec37-4a2d-a715-478aa1891af1)

### Figure 21. Accessibility Passes

![Accessibility Results at 100%](https://github.com/user-attachments/assets/b4bec218-7a75-4c60-96e1-ea424e947edd)

<h2 align="center" color="Blue"> 🖱️ Deployment of App </h2>

I am using Netlify to deploy my build into separate environments that I can use for development, this won't break the main application for users. 
Netlify uses the node build module to create many online hosted environments. The environments are built from the code in my respiratory whenever I make code changes they get reflected in your environments. Netlify hosts my application online with a randomly changed DNS alternatively you can connect your DNS to this build.

### Node JS Build Success

![Build Success](https://github.com/user-attachments/assets/4557c67d-cef9-400d-b8f8-bb866ebdcd5e)


From your GitHub, you can see if your node build has been successful. 
### Figure 20. Netlify deployments

![Netlify Deployments](https://github.com/user-attachments/assets/1cdd28bc-4775-4cc2-963e-74ba13221f67)


You can see in Figure 20 I have Netlify set up with two sets of environments
### Figure 21. Netlify Production Branch

![Netlify - Production Build](https://github.com/user-attachments/assets/520c670a-1621-4ce8-ab3d-97338c99d962)

Here is an image of my Prod branch
### Figure 22. Netlify Development Branch



In this image, you can see some of the changes I am working on, with the new counters added

## Coverage

You may have noticed that I have a couple of badges on the top of this page. One is to show how much code has been tested in an application.

### Figure 23. Coverage Table 

![Code Coverage - Test Results Table](https://github.com/user-attachments/assets/50ad09da-5277-41c8-9481-78e541ed7534)


### Figure 24. Coverage Data

![Code Coverage - Test Results](https://github.com/user-attachments/assets/4c7186ed-bc00-42bd-a0b7-452781d4e562)



## Start Deployment

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

## References
Timestuff, (N.d.). The 6 thinking hats of software. Timestuff [online]. https://testuff.com/wp-content/uploads/6-Thinking-Hats-and-Software-Testing.pdf (Accessed:16/12/24)
