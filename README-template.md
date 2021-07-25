## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### The challenge

Users should be able to:

<!-- - Login using SAWO sdk (the passwordless way) -->

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](https://github.com/pragatiagrawal31/ip-tracker/blob/master/images/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/pragatiagrawal31/ip-tracker)
- Live Site URL: [Add live site URL here](https://tracking-ipaddress.netlify.app/)

## My process

- Started with designing HTML page prototype for IP Tracker
- learnt to integrate [IP Geolocation API by IPify](https://geo.ipify.org/) and use it to get IP details
- For the map API, used [LeafletJS](https://leafletjs.com/) and integrated it's API after multiple failures to do so
- Added styling and optimized the view for various devices
- Locally run and tested the IP Tracker app, works fine. Initiallly had harcoded current IP details in HTML, later modified function to show user's IP addred by default on loading.. works fine
- Made new git public repository, set it's remote and hosted the code at Github
  Tried deploying on heroku, but since I made a static site according to the need of integrating API's ( didn't used js framework, instead used, vanilla js), so for deploying on Heroku, either my site had to had some backend, which could have been done using PHP as in - middleware japproach was to create a blank composer.json file adn also create a php file that includes our main 'index.html` file and then deploy on Heroku using PHP as the build framework.
- I tried keeping files clean, and not just add .php file for deploying and hence deployed on Netlify (as it deploys only statis files too)
- Went ahead for Sawo's API integration and have tried everything I could think and try and debug to integrate ot with vanilla js, HTML, CSS project I made, but to no use. Started learning Vue Js framework for integrating Sawp Api and then move ahead with moving the current IP tracker project to Vue too, and then used a router to redirect after Sawo authentication to this IP Tracker project component in Vue

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla js
