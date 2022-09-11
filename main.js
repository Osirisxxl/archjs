import 'simpledotcss';

import renderInDOM from './modules/render';
import Title from './modules/title';
import Film from './modules/film';
import People from './modules/people';

renderInDOM('header', new Title());
await renderInDOM('main', new Film());
renderInDOM('aside', new People());
