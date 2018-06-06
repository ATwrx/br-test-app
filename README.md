# Sample App for BR-studios 
## Technologies Used

* React
* React-Router
* Webpack
* es6 / babel
* Google Map API
* Sass / Scss
* Motion, Hammer touch libraries (For the Details component)
* Zeit.Now (Staging Deployments)

Also, ***Semantic-UI-React*** for early styling prototypes

## Project Folder Structure (excluding npm folders)
```shell
/br-test-app
|──public                     # HTML base deployment + CDN Links
└───src                       
    ├───assets                # Img's and Scss partials
    │   ├───images
    │   └───scss
    ├───components            # React Components
    │   ├───App
    │   ├───AppBar
    │   ├───Details
    │   ├───Footer
    │   └───GoogleMap
    └───utils                 # Utility functions
```    

## Component Structure    
```shell
/Component
├───Component.js
├───Component.css
├───Component.scss
```
NOTE: Files in /components that end with .scss are watched and compiled during development. 
To create new components you simply make a named folder containing a .js and .scss of the same name.

### To install:

```shell
git clone https://github.com/atwrx/br-test-app
cd br-test-app
npm i
npm start
```

### To continue building: 
```shell 
git clone https://github.com/atwrx/br-test-app
cd br-test app
npm i
npm run watch-scss
``` 
open another terminal window in the ./br-test-app directory
```shell
cd br-test-app
npm start
```



