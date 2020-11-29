# React Calculator

## Description
I built a simple calculator using React without following any guides, just to see how far I could get. It's built with only functional components and React hooks combined with "vanilla" CSS. 

## Lessons
* Re-learning the basics of CSS: After using CSS frameworks for all my recent projects, figuring out how to do some simple formatting and mobile responsiveness proved difficult using just basic CSS. 
* The usefulness of useEffect: For an app that required calculation to be done "in the background", the useEffect hook was very useful. Combining useEffect with a "helper" function to calculate the equations was the key that got the calculator working while maintaining state properly.
* Learning to use React state for "remembering" or changing things, instead of falling back on vanilla Javascript. I learned this while trying to make the calculator start a new equation if the user pressed a number after a previous equation was finished. At first I attempted to create the logic based on the value of the input field (since it's a string during the equation building process, but a number after the calcuation is done). Due to the nature of React state this didn't work. After multiple other attempts, I finally created a state variable with a boolean value that kept track of whether an equation was "done" or not. This in turn affected the outcome of a number press (and after that first number press post-equation completion, the equation state was changed again).
* More to come...

## Bugs and Additions
* Connect to localStorage to save past equations.
* Add additional operators (like %) and enable positive/negative button.


