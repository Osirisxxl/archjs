// https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518

/**
 * @param {String} html representing a single element
 * @return {Element}
 */
export function htmlToElement(html) {
  const template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;

  return template.content.firstChild;
}

/**
 * @param {String} html representing any number of sibling elements
 * @return {NodeList}
 */
export function htmlToElements(html) {
  const template = document.createElement('template');
  template.innerHTML = html;

  return template.content.childNodes;
}
