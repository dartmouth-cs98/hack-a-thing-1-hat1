# Snek Charmer
### Sam Ching, Andrew Liu

## Description of what we built
Initially, Andrew was inspired by his experience in corporate recruiting, where people would often act "snaky" in order to get a leg up on others. He wanted to make a game in cookie-clicker style where users could be as snaky as they want. We wanted to get more familiar with React Native, so we chose that as our technology.

In this game, the user taps an image of Donald Trump on a $20 bill in order to become "snekier." Once the user obtains enough sneks, they have the ability to purchase additional items that expedite the snek-accumulating process. Ultimately, the user's goal is to become as sneky as possible.

## Who did what
Sam implemented the MVP functionality, namely the clicking, purchasing sequence, and "snekiness" tracking functionality, along with setting up the nav bar and some preliminary design.

Andrew added stat-tracking functionality, worked on cleaning up the design / adding some new design elements, and added in the full set of tiers of purchase options. He also added in a rough animation of a death snake that pops up in random locations when the user taps on Trump.

We worked together on some bug fixes, e.g., making the purchase options disappear when the user doesn't have enough sneks, making sure the image loads fast enough for the animation, and working on fixing an issue where the scrolling for purchase options wasn't working.

For hack-a-thing-2, we realized that the quality of our code from hack-a-thing-1 wasn't ideal, so we wanted to make sure our code properly handled state changes; in addition, we added additional stat tracking, refined the rules for conditional display of purchase options, and added snek statuses for users.

Sam started on refactoring the code to make sure state changes weren't happening in the render function. Andrew finished refactoring the code and removed redundancies with long if-else ladders. Andrew also added statuses for users based on their lifetime snek earnings, tweaked the conditional logic and styling for displaying purchase options, and created a new stats page to track status and snek stats.

## What we learned
We learned how to work in React Native, using Expo.io on our phones to test the app. In creating and implementing the App, we learned how to create React Native components and also became more familiar with styling in React Native.

Specifically, we learned how to use the different touches / button presses and views on React Native.

## What didn't work
Animating the snake to pop in random locations was difficult, and it doesn't work as smoothly as we would've liked. Because the page re-renders every 150ms, the animation often gets cut out before it finishes animating. We didn't have time to find a solution for this.

## Future Ideas

1. Status Upgrades (SPG points / Weekends at the Hamptons / House in Greenwich) to be bought with the snake points but does not increase the snek accumulation. Statuses can be shown on the profile page.
2. Publish on App Store

## How does this hack-a-thing inspire you or relate to your possible project ideas?
We enjoyed working in React Native and if we were to work on a mobile app, we would strongly consider building it using React Native. We also hope to publish this app on the App Store at some point, despite the fact that it is a purely time-wasting app that will only make the world less productive.
