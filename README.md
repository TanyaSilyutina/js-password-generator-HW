# JavaScript: Password Generator

*My 3rd homework for the UW bootcamp*

Link to the deployed app: [Password Generator - GitHubPages](https://tanyasilyutina.github.io/js-password-generator-HW/)

Password Generator is an application that creates random passwords based on selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript. 

The application includes multiple prompts to collect user input and determine password criteria.

The below example illustrates a prompt that collects the desired password length:


![promt example](./Assets/Screenshot%202023-03-30%20at%208.53.41%20PM.png)


After intercating with multiple promts, user sees a randomly generated password in the application window:

![password example](./Assets/Screenshot%202023-03-30%20at%209.01.15%20PM.png)

The below assignment requirements have been implemented in my application:

* WHEN user clicks the button to generate a password 
  THEN they are presented with a series of prompts for password criteria

* WHEN prompted for password criteria <br />
THEN user selects which criteria to include in the password


* WHEN prompted for the length of the password <br />
THEN user chooses a length of at least 8 characters and no more than 128 characters


* WHEN asked for character types to include in the password <br />
THEN user confirms whether or not to include lowercase, uppercase, numeric, and/or special characters


* WHEN user answers each prompt <br />
THEN their input should be validated and at least one character type should be selected


* WHEN all prompts are answered <br />
THEN a password is generated that matches the selected criteria


* WHEN the password is generated <br />
THEN the password is either displayed in an alert or written to the page

An unexpected challenge I came across was activating the 'cancel' button so that the user can exit the application.

The below resources have been used to complete my JS code:
* [Create an array range with n numbers]( https://www.freecodecamp.org/news/javascript-range-create-an-array-of-numbers-with-the-from-method/)<br />
*Used in lines 8 - 12 in script.js file*
<br />

* [Math.random function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) <br />
*Used in lines 91 - 93 in script.js file*



