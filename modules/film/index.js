import Component from '../render/Component';
import httpRequest from '../httpRequest';

export default class Film extends Component {
  render() {
    return httpRequest('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe').then((film) => {
      window.__selectedFilm = film;
      const { title, original_title, original_title_romanised, image, description } = film;

      return `
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
    });
  }
}
