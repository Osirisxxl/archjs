import Component from '../render/Component';
import httpRequest from '../httpRequest';
import { redirectToFilm } from '../location/redirectToFilm';

export default class Film extends Component {
  films = [];
  selectedFilm;

  buildSelectOptions() {
    return this.films.reduce((acc, film) => {
      const isSelected = film.id === this.selectedFilm.id;
      return acc + `<option value="${film.id}" ${isSelected ? 'selected' : ''} ">${film.title}</option>`;
    }, '');
  }

  async getSelectedFilm() {
    const [, selectedFilmId] = /filmId=([\w-]+)/g.exec(window.location.search) || [];

    const { url: selectedFilmURL } =
      (selectedFilmId && this.films.find((film) => film.id === selectedFilmId)) || this.films[0];

    return await httpRequest(selectedFilmURL);
  }

  async render() {
    this.films = await httpRequest('https://ghibliapi.herokuapp.com/films?fields=title,url,id');

    this.selectedFilm = await this.getSelectedFilm();
    window.__selectedFilm = this.selectedFilm;
    const { title, original_title, original_title_romanised, image, description } = this.selectedFilm;

    return `
      <select onchange="(${redirectToFilm.toString()})(this.value)">${this.buildSelectOptions()}</select>
      <article>
        <h2>${title} - ${original_title}</h2>
        <h3>${original_title_romanised}</h3>
        <div>
          <img src="${image}" alt="movie's main poster"/>
          <br/>
          <p>${description}</p>
        </div>
      </article>
    `;
  }
}
