# Snek Charmer
### Sam Ching, Andrew Liu

## Description of what we built
Initially, Andrew was inspired by his experience in corporate recruiting, where people would often act "snaky" in order to get a leg up on others. He wanted to make a game in cookie-clicker style where users could be as snaky as they want. We wanted to get more familiar with React Native, so we chose that as our technology.

In this game, the user taps an image of Donald Trump on a $20 bill in order to become "snekier." Once the user obtains enough sneks, they have the ability to purchase additional items that expedite the snek-accumulating process. Ultimately, the user's goal is to become as sneky as possible.

## Who did what
Sam implemented the MVP functionality, namely the clicking, purchasing sequence, and "snekiness" tracking functionality, along with setting up the nav bar and some preliminary design.

Andrew added stat-tracking functionality, worked on cleaning up the design / adding some new design elements, and added in the full set of tiers of purchase options. He also added in a rough animation of a death snake that pops up in random locations when the user taps on Trump.

We worked together on some bug fixes, e.g., making the purchase options disappear when the user doesn't have enough sneks, making sure the image loads fast enough for the animation, and working on fixing an issue where the scrolling for purchase options wasn't working.

## What we learned
We learned how to work in React Native, using Expo.io on our phones to test the app. In creating and implementing the App, we learned how to create React Native components and also became more familiar with styling in React Native.

Specifically, we learnt how to use the different touches / button presses and views on React Native.

## What didn't work
Animating the snake to pop in random locations was difficult, and it doesn't work as smoothly as we would've liked. Because the page re-renders every 250ms, the animation often gets cut out before it finishes animating. We didn't have time to find a solution for this.

## Future Ideas

1. Individual Profile
2. Status Upgrades (SPG points / Weekends at the Hamptons / House in Greenwich) to be bought with the snake points but does not increase the snek accumulation. Statuses can be shown on the profile page.
3. Leaderboard of different sneks (viewable profiles)
4. Snek Battles (Snek eat Snek world / fight and win the other snek's points)
