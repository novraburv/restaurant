"use strict"

import burger from '../images/hamburger-5630646_1920.jpg';
import '../styles/home.css';

export default function makeHome() {
        const heroContainer = document.createElement('div');
        heroContainer.classList.add('hero-container');

        // put copy text here
        const heroTextContainer = document.createElement('div');
        heroTextContainer.classList.add('hero-text-container');

        const h1 = document.createElement('h1');
        h1.textContent = 'Lorem ipsum dolor sit amet.';

        const para = document.createElement('p');
        para.textContent = "I don't know what it means, but the burger here is the best one around the block.";

        const button = document.createElement('button');
        button.textContent = 'Order Now';
        button.classList.add('hero-cta');

        heroTextContainer.append(h1, para, button);

        // put hero image here
        const heroImageContainer = document.createElement('div');
        heroImageContainer.classList.add('hero-image-container');

        const image = document.createElement('img');
        image.setAttribute('src', burger);
        image.classList.add('hero-image');

        heroImageContainer.append(image);

        heroContainer.append(heroTextContainer, heroImageContainer);

        return heroContainer;
}