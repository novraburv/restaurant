import burger from '../images/burger.jpg';
import pizza from '../images/pizza.jpg';
import sandwich from '../images/sandwich.jpg';
import friedChicken from '../images/friedchicken.jpg';
import salad from '../images/salad.jpg';
import meatball from '../images/meatball.jpg';

import '../styles/menu.css';

export default function makeMenu() {
	const menu = [];
	menu.push(new Food('burger', 25, burger));
	menu.push(new Food('pizza', 15, pizza));
	menu.push(new Food('sandwich', 22, sandwich));
	menu.push(new Food('fried chicken', 18, friedChicken));
	menu.push(new Food('salad', 12, salad));
	menu.push(new Food('meatball', 21, meatball));

	const foodsContainer = document.createElement('div');
	foodsContainer.classList.add('foods-container');

	menu.forEach(food => {
		const card = document.createElement('div');
		card.classList.add('card');

		// put image into its wrapper
		const imageWrapper = document.createElement('div');
		imageWrapper.classList.add('card-image-wrapper');

		const image = document.createElement('img');
		image.classList.add('card-image');
		image.setAttribute('src', food.image);
		image.setAttribute('alt', `image of ${food.name}`);

		imageWrapper.append(image);

		// put menu details into textWrapper
		const textWrapper = document.createElement('div');
		textWrapper.classList.add('card-text-wrapper');

		const name = document.createElement('div');
		name.classList.add('card-name');
		name.textContent = String(food.name).toUpperCase();

		const price = document.createElement('div');
		price.classList.add('card-price');
		price.textContent = `$ ${food.price}`;

		textWrapper.append(name, price);

		card.append(imageWrapper, textWrapper);
		foodsContainer.append(card);
	})

	return foodsContainer;
}

class Food {
	constructor(name, price, image) {
		this.name = name;
		this.price = price;
		this.image = image;
	}
}