'use strict';

import { Image } from "./image";

export function createImage(image, width, height, parent) {
  let appendTo = document.querySelector(parent);
  let appending = document.createElement('img');
  appending.setAttribute('src', image.path);
  appending.setAttribute('width', width);
  appending.setAttribute('height', height);
  appending.setAttribute('alt', image.path);
  console.log(appending);
  appendTo.appendChild(appending);
}
