'use strict';

class Image {
  constructor(path, description, title, active) {
    this.path = path;
    this.description = description;
    this.title = title;
    this.active = active;
  }
}

class Galery {
  constructor() {
    this.images = [];
  }

  init() {
    this.images.push(new Image('./img/african_savanna.jpg', 'It\'s a savanna', 'African Savanna', true));
    this.images.push(new Image('./img/agnel_lake_ceresole_reale.jpg', 'It\'s a lake', 'Agnel Lake', false));
    this.images.push(new Image('./img/selfjord_reflections.jpg', 'It\'s a fjord', 'Selfjord', false));
    this.images.push(new Image('./img/aurora_borealis_northern_lights_iceland.jpg', 'It\'s a light', 'Northern Light', false));
    this.images.push(new Image('./img/autumn_forest.jpg', 'It\'s a forest', 'Autumn Forest', false));
    this.images.push(new Image('./img/baltic_sea.jpg', 'It\'s a sea', 'Baltic Sea', false));
  }

  findImage(src) {
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].path == src) {
        return i;
      }
    }
    return -1;
  }
}

function createImage(image, parent) {
  let appendTo = document.querySelector(`div${parent}`);
  let container = document.createElement('div');
  let appending = document.createElement('img');
  container.classList.add(`${parent.slice(1)}-content`);
  appending.setAttribute('src', image.path);
  appending.setAttribute('alt', image.path);
  if (parent === '#thumbnail') {
    appending.onclick = () => {
      document.querySelector('.main-image-content img').setAttribute('src', image.path);
      document.querySelector('#textBox').innerHTML = `<h2>${image.title}</h2><p>${image.description}</p>`;
    }
    container.appendChild(appending);
    appendTo.appendChild(container);
  } else {
    let textBox = document.createElement('div');
    textBox.innerHTML = `<h2>${image.title}</h2><p>${image.description}</p>`;
    textBox.setAttribute('id', 'textBox');
    container.appendChild(appending);
    container.appendChild(textBox);
    appendTo.insertBefore(container, document.querySelector('#right'));
  }
}

let galery = new Galery();
galery.init();

createImage(galery.images[0], '#main-image');

for (let i = 0; i < galery.images.length; i++) {
  createImage(galery.images[i], '#thumbnail');
}

document.querySelector('#left').onclick = () => {
  let currentImageIndex = galery.findImage(document.querySelector('.main-image-content img').getAttribute('src'));
  if (currentImageIndex > 0) {
    document.querySelector('.main-image-content img').setAttribute('src', galery.images[currentImageIndex - 1].path);
    document.querySelector('#textBox').innerHTML = `<h2>${galery.images[currentImageIndex - 1].title}</h2><p>${galery.images[currentImageIndex - 1].description}</p>`;
  } else {
    document.querySelector('.main-image-content img').setAttribute('src', galery.images[galery.images.length - 1].path);
    document.querySelector('#textBox').innerHTML = `<h2>${galery.images[galery.images.length - 1].title}</h2><p>${galery.images[galery.images.length - 1].description}</p>`;
  }
};

document.querySelector('#right').onclick = () => {
  let currentImageIndex = galery.findImage(document.querySelector('.main-image-content img').getAttribute('src'));
  if (currentImageIndex < galery.images.length - 1) {
    document.querySelector('.main-image-content img').setAttribute('src', galery.images[currentImageIndex + 1].path);
    document.querySelector('#textBox').innerHTML = `<h2>${galery.images[currentImageIndex + 1].title}</h2><p>${galery.images[currentImageIndex + 1].description}</p>`;
  } else {
    document.querySelector('.main-image-content img').setAttribute('src', galery.images[0].path);
    document.querySelector('#textBox').innerHTML = `<h2>${galery.images[0].title}</h2><p>${galery.images[0].description}</p>`;
  }
};

document.querySelector('#left').addEventListener("mousedown", function(){
  this.classList.add('pressed');
}, false);

document.querySelector('#left').addEventListener("mouseup", function(){
  this.classList.remove('pressed');
}, false);

document.querySelector('#left').addEventListener("mouseleave", function(){
  this.classList.remove('pressed');
}, false);

document.querySelector('#right').addEventListener("mousedown", function(){
  this.classList.add('pressed');
}, false);

document.querySelector('#right').addEventListener("mouseup", function(){
  this.classList.remove('pressed');
}, false);

document.querySelector('#right').addEventListener("mouseleave", function(){
  this.classList.remove('pressed');
}, false);