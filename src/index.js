import 'normalize.css';
import './styles/styles.css';
import { render } from './scripts/render';

(function load() {
	const app = document.querySelector('#app');
	const r = render();

	app.append(...r);

	return;
})();

