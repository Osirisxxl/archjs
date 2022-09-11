import Component from '../render/Component';
import httpRequest from '../httpRequest';
import './people.css';
import { buildFilmUrl } from '../location/redirectToFilm';

export default class People extends Component {
  async buildPerson(person) {
    const { name, age, gender, films = [] } = person;
    const filmsWithData = await Promise.all(films.map(httpRequest));
    const filmsElement = filmsWithData.reduce(
      (acc, {id, title}) => acc + `<li><a href="${buildFilmUrl(id)}">${title}</a></li>`,
      '',
    );

    return `
        <article>
            <h6>${name}</h6>
            <p>${age} years old ${gender}</p> 
            <ul>${filmsElement}</ul>
        </article>`;
  }

  async render() {
    const peopleURLs = window.__selectedFilm?.people;

    const people = await Promise.all(peopleURLs.map(httpRequest));

    const peopleElements = await Promise.all(people.map(this.buildPerson));

    return `
        <h5>People in this film</h5>
        ${peopleElements.join('')}
       `;
  }
}
