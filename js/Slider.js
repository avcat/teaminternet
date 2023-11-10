export default class Slider {
  constructor(sliderWrapperSelector) {
    this.sliderWrapperNode = document.querySelector(sliderWrapperSelector);
    this.init();
  }

  init() {
    if (!this.sliderWrapperNode) {
      console.error('sliderWrapperNode not found');
      return;
    }

    this.marqueeNode = this.sliderWrapperNode.querySelector(
      '[data-slider="marquee"]',
    );
    this.currentSlideNode =
      this.sliderWrapperNode.querySelector('.current-slide');
    this.slidesAmountNode =
      this.sliderWrapperNode.querySelector('.slides-amount');

    if (!this.marqueeNode || !tns) {
      console.error('marqueeNode or tns not found');
      return;
    }

    const marquee = tns({
      container: this.marqueeNode,
      items: 1,
      controlsPosition: 'bottom',
      nav: false,
      prevButton: '.marquee .prev',
      nextButton: '.marquee .next',
      loop: false,
      autoWidth: true,
      center: true,
      gutter: 21,
      startIndex: 1,
    });
    this.slider = marquee;

    this.updateInfo();
    this.addListeners();
  }

  addListeners() {
    if (!this.sliderWrapperNode) {
      console.error('sliderWrapperNode found');
      return;
    }

    this.sliderWrapperNode.addEventListener('click', () => {
      this.updateInfo();
    });
  }

  updateInfo() {
    const { index, slideCount } = this.slider?.getInfo();

    if (this.currentSlideNode) {
      this.currentSlideNode.textContent = index + 1;
    } else {
      console.error('currentSlideNode not found');
    }

    if (this.slidesAmountNode) {
      this.slidesAmountNode.textContent = slideCount;
    } else {
      console.error('slidesAmountNode not found');
    }
  }
}
