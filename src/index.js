import 'normalize.css';
import burger from './images/hamburger-5630646_1920.jpg'

(function load() {
	const app = document.querySelector('#app');
	const r = render();

	app.append(...r);

	return;
})();

function render() {

	// create header
	const header = document.createElement('header');
	const nav = document.createElement('nav');
	const ul = document.createElement('ul');

	const tabs = ['home', 'menu', 'contact'];
	tabs.forEach(tab => {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.setAttribute('href', '#');
		a.textContent = tab;

		li.append(a);
		ul.append(li);
	})

	nav.append(ul);
	header.append(nav);

	// create main section
	const main = document.createElement('main');
	const heroTextContainer = document.createElement('div');
	heroTextContainer.classList.add('hero-text-container');

	const h1 = document.createElement('h1');
	h1.textContent = 'Lorem ipsum dolor sit amet.';

	const para = document.createElement('p');
	para.textContent = "I don't know what it means, but the burger here is the best one around the block.";

	const button = document.createElement('button');
	button.textContent = 'Order Now';

	const image = document.createElement('img');
	image.setAttribute('src', burger);
	
	heroTextContainer.append(h1, para, button);
	main.append(heroTextContainer, image);

	// create footer
	const footer = document.createElement('footer');
	const year = new Date().getFullYear();
	footer.textContent = `Company ${year}. All rights reserved.`;

	return [header, main, footer];
}