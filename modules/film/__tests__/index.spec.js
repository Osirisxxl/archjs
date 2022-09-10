import Film from '../index';
import httpRequest from '../../httpRequest';

jest.mock('../../httpRequest');

describe('Film component', () => {
  beforeEach(() => {
    httpRequest.mockResolvedValue({
      title: 'My film',
      original_title: 'M0N F1LM',
      original_title_romanised: 'Mon film',
      image: 'https://url.of/my/movie/poster',
      description: 'A beautiful film description',
    });
  });

  it('should render a film', async () =>
    expect(await new Film().render()).toMatchInlineSnapshot(`
      "
              <article>
                <h2>My film - M0N F1LM</h2>
                <h3>Mon film</h3>
                <div>
                  <img src="https://url.of/my/movie/poster" alt="movie's main poster"/>
                  <br/>
                  <p>A beautiful film description</p>
                </div>
              </article>
            "
    `));
});
