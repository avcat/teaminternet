import ProductListings from './ProductListings.js';
import Slider from './Slider.js';

(() => {
  const listings = new ProductListings('.product-listings');

  // TODO. Adaptive slider, touch
  const marquee = new Slider('.marquee-slider-wrapper');
})();
