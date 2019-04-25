# Aahan's Documentation

## Installation
Please fork this repository, checkout the `submission` branch, run `npm install` (I assume that your version of npm is at least version 10) and then run `npm start`. The latter will open up your web browswer to local host, where you will see the app!

There are some tests in the `__tests__` directory -- these are not rigorous unit tests (if I had more time, I would have made them rigorous) but tests that allowed me to (a) incrementally build this app and (b) make some visual assertions about the correctness of the app's logic. The heart of this app is really the algorithm (everything else is just a matter of display) -- its logic is, briefly, as follows:

- Order all records by the metaphone of (firstName + lastName)
- Define a window size `w`
- Determine which of the first `w` elements match each other, where
    - Two elements match each other if a certain proportion of their fields match, where:
        - Two fields match if the levenshtein distance between their metaphones is above
        a parametrized threshold
- Move the window one element down, so that we work with another window of `w` elements; the
first `w-1` elements correspond to the last `w-1` elements in the former window; there is only
one new element, which is the last item in the new window. Compare this element to all
other elements, to check for duplicates.
- Keep repeating the last step, until we've checked all elements. This should dramatically improve over the naiive `O(n^2)` algorithm, that checks for similarity everywhere.

#

--
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
