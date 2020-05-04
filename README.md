![Star Wars Logo](src/logo.svg "Star Wars Logo")

# Star Wars React SPA

___

[Версия на русском языке](README_ru.md)

___

[https://al3xsus.github.io/Star-Wars-React-SPA/](https://al3xsus.github.io/Star-Wars-React-SPA/)

___

A simple SPA dedicated to the Star Wars universe.
Technology stack: React (create-react-app), Semantic UI React, SPA.
The API [https://swapi.dev/](https://swapi.dev/) was used to obtain information.
Color palette source - [https://loading.io/color/feature/StarWars-Yoda](https://loading.io/color/feature/StarWars-Yoda)

## How it works

SPA consists of three sections - Films, People, Starships.
Each of the sections has a search and filter panel, a list of objects, and a pagination panel.

How to search? Type the desired search expression (every section has its own hint for the desired field) and click on 
the search icon.

How to filter? Select the desired operation from the drop-down list, type the desired value for filtration and click on 
the filter icon.

How to reset the result? Clear the search and click on the icon again.

When you click on an object, a modal window with more complete information will appear on the screen. Part of 
information requiring additional loading will be presented as links. If you click on the button on the right, those 
information links will be downloaded and processed.

**ATTENTION. Sometimes an API can take a very long time to respond. That is why getting all data is derived by separate 
functionality.**

## Scripts

Run from the project folder:

### `yarn add`

To install modules

### `yarn start`

To launche the application in development mode at [http: // localhost: 3000] (http: // localhost: 3000).

### `yarn build`

To build project in the `build` folder.

### `yarn global add serve`

To install a local server.

### `serve -s build`

To run built project on a local server.

## Screenshots

Homepage

![Homepage](screenshots/screenshot_1.png?raw=true "Homepage")

The top of the section and the search and filter panel

![Upper section](screenshots/screenshot_2.png?raw=true "Upper section")

The bottom of the section and the pagination panel

![Bottom of the section](screenshots/screenshot_3.png?raw=true "Bottom of the section")

Search results

![Search results](screenshots/screenshot_4.png?raw=true "Search results")

Filter Results

![Filter Results](screenshots/screenshot_5.png?raw=true "Filter Results")

Modal window without additional data loading

![Modal window without additional data loading](screenshots/screenshot_6.png?raw=true "Modal window without additional
data loading")

Modal window with all data downloaded

![Modal window with all data downloaded](screenshots/screenshot_7.png?raw=true "Modal window with all data downloaded")
