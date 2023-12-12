const baseURL = "https://hmoisesgb.github.io/wdd230/";
const linksURL = "https://hmoisesgb.github.io/wdd230/data/links.json";
const weekContainer = document.querySelector('#weekContainer');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let list = document.createElement('li');
        list.textContent = `${week.week}: `;
        let links = week.links;
        links.forEach((link, index) => {
            let anchor = document.createElement('a');
            anchor.setAttribute('href',link.url);
            anchor.textContent = `${link.title} `;
            list.appendChild(anchor);

            if (index < links.length - 1) {
                let separator = document.createTextNode(' | ');
                list.appendChild(separator);
            }
        });
        weekContainer.appendChild(list);
    });
}

getLinks();