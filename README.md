# Quizzical Solo Project - Scrimba Module 11: React Basics 

## About The Project

This solo project is the culmination of the React Basics module, which taught the following skills and concepts:

- Why React, JSX, custom components, styling and static pages
- Props, mapping data
- Event listeners, state, conditional rendering, forms, side-effects

The project was built alone, from scratch. A Figma file was provided for the design spec and showed the suggested layout for the start screen, the quiz screen with answers selected and the quiz screen with answers checked.

The requirements of the project were as follows:

- There should be two screens - start and questions
- Pull 5 questions from the OTDB (Open Trivia Databas)e API
- Tally correct answers after "Check answers" is clicked and display score at the bottom.
- The app should be styled and polished

All requirements were met and the following additional functionality incorporated:

- A select box was added to the start page so the player can choose their difficulty level
- If the player fails to select an answer for one of the questions then all the incorrect answers display as incorrect on checking answers
- React confetti displays (for pages wider than 800px only) in the case that all five answers are correct.
- The number of rounds and the selected difficulty level are displayed at the top of the quiz page

## How I approached the project

Vite was used to create a local React app. The structure is on four levels and comprises the parent App() component, with the Start() component and the Quiz() component on the second level. Quiz() is parent to CheckButton(), PlayAgainButton() and QuestionSet(), and the map() method is used to to render five QuestionSet() componenets. Each QuestionSet() is parent to four Answer() components which are in turn rendered using .map(). Conditional styling was used in the Answers() component to indicate the correct and selected answers in different states.
All the state variables are contained in App(), and all the questions and answers data is stored in a single array of objects which is set using a call to the OTDB API.

## Reflections

- React confetti is quite limited as it does not respond to screen resize, so it can end up looking a bit messy.
- The Figma suggested font-sizes were followed. However, these are quite small and hard to read, especially when coupled with the .5 opacity value. Depending on the target audience, the font-sizes and contrasts etc could be increased.
-Engagement with the Scrimba Discord Community was really helpful, particularly for using the technology surrounding npm packages (e.g. npm he) and how to use the Vite React App.  

Frances Hitchcock, 15 March 2023

