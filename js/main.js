import ProductListings from './ProductListings.js';
import Slider from './Slider.js';

(() => {
  const listings = new ProductListings('.product-listings');
  const marquee = new Slider('.marquee-slider-wrapper');
})();
