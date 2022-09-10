import {htmlToElements} from "./htmlStringToElements";

export default (htmlSelector, component) => {
  const htmlElements = htmlToElements(component.render());

  document
    .querySelector(htmlSelector)
    .append(...htmlElements);
}