// Write your code in this file!
let currentUser = 'skywalker';

let welcomeMessage = `Welcome to Flatbook, ${currentUser}, !`;

//using the previous variable and change to uppper case
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// slice (start - 0 first character  ,    end - up to and not including)
let shortGreeting = `Welcome, ${currentUser.slice(0,1)}, !`;