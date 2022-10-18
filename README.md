# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](</public/iteractive-rating(iPhone-SE).png>)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Next.js](https://nextjs.org/) - React framework
- [CSS Modules ](https://css-tricks.com/css-modules-part-1-need/) - For styles

### What I learned

:Has() CSS pseudo-class:

```css
.form label:has(input[type='radio']:checked) {
  color: var(--White);
  background-color: var(--Orange);
}
```

### Useful resources

- [React-Hook-Form](https://react-hook-form.com) - Performant, flexible and extensible forms with easy-to-use validation.

## Author

- Website - [Hugo Méndez](https://hugomendez.dev)
- Frontend Mentor - [@Hugomndez](https://www.frontendmentor.io/profile/Hugomndez)
