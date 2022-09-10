import Component from '../render/Component';
import httpRequest from '../httpRequest';

export default class Film extends Component {
  render() {
    return httpRequest('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe').then(
      (film) => `
        <article>
          <h2>${film.title} - ${film.original_title}</h2>
          <h3>${film.original_title_romanised}</h3>
          <div>
            <img src="${film.image}" alt="movie's main poster"/>
            <br/>
            <p>${film.description}</p>
          </div>
        </article>
      `,
    );
  }
}
