import 'simpledotcss';

import renderInDOM from './modules/render';
import Title from './modules/title';
import Film from './modules/film';

renderInDOM('header', new Title());
renderInDOM('main', new Film());