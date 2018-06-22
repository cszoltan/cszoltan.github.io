'use srtict';

import { Image } from "./image";

export class Galery {
  images;

  constructor() {
    this.images = [];
  }

  init() {
    this.images.push(new Image('./img/african_savanna.jpg', 'It\'s a savanna', 'African Savanna'));
    this.images.push(new Image('./img/agnel_lake_ceresole_reale.jpg', 'It\'s a lake', 'Agnel Lake'));
    this.images.push(new Image('./img/aurlandsfjord_norway-3840x1200.jpg', 'It\'s a fjord', 'Aurlandsfjord'));
    this.images.push(new Image('./img/aurora_borealis_northern_lights_iceland.jpg', 'It\'s a light', 'Northern Light'));
    this.images.push(new Image('./img/autumn_forest.jpg', 'It\'s a forest', 'Autumn Forest'));
    this.images.push(new Image('./img/baltic_sea.jpg', 'It\'s a sea', 'Baltic Sea'));
  }
}
