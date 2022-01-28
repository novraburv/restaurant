"use strict"

import '../styles/contact.css'
import janaKundeQR from '../images/jana-kunde-qr.png';

export default function makeContact() {
	const contact = {
		name: 'Jana Kunde',
		address: '83412 Wintheiser Plaza Toledo, OH 43697',
		phone: '665-341-4125'
	}

	const contactContainer = document.createElement('div');
	contactContainer.classList.add('contact-container');

	const qr = document.createElement('img');
	qr.setAttribute('src', janaKundeQR);
	qr.setAttribute('alt', 'Representative Jana Kunde QR code');

	const name = document.createElement('h2');
	name.textContent = contact.name;

	const address = document.createElement('p');
	address.textContent = contact.address;

	const phone = document.createElement('p');
	phone.textContent = contact.phone;

	contactContainer.append(qr, name, address, phone);

	return contactContainer;
}