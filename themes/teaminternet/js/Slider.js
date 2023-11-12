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
      controlsPosition: 'bottom',
      prevButton: '.marquee .prev',
      nextButton: '.marquee .next',
      startIndex: 1,
      nav: false,
      loop: false,
      center: true,
      responsive: {
        1024: {
          fixedWidth: 795,
          gutter: 21,
          touch: false,
        },
      },
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
