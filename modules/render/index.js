import {htmlToElements} from "./htmlStringToElements";

export default async (htmlSelector, component) => {
  const htmlElements = htmlToElements(await component.render());

  document
    .querySelector(htmlSelector)
    .append(...htmlElements);
}