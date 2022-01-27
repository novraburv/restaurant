import makeHome from './home'

export function render() {

    // create header
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    const ul = document.createElement('ul');
    ul.classList.add('nav-list');

    const tabs = ['home', 'menu', 'contact'];
    tabs.forEach(tab => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute('data-tab-name', tab);
        a.classList.add('nav-link');
        a.textContent = tab;
        a.addEventListener('click', selectRender)

        li.append(a);
        ul.append(li);
    });

    nav.append(ul);
    header.append(nav);

    // create main section
    const main = document.createElement('main');
    const home = makeHome();
    main.append(home);

    // create footer
    const footer = document.createElement('footer');
    const year = new Date().getFullYear();
    footer.textContent = `Company ${year}. All rights reserved.`;

    return [header, main, footer];
}

function selectRender(e) {
    const main = document.querySelector('main');
    main.innerHTML = '';

    if (e.target.dataset.tabName === 'home') {
        const home = makeHome();
        main.append(home);
    }
    if (e.target.dataset.tabName === 'menu') {

    }
}