export default class ProductListings {
  constructor(listingsWrapperSelector) {
    this.productsURL =
      'https://63d0d6303f08e4a8ff8afa7c.mockapi.io/ProductList';
    this.categoriesURL =
      'https://63d0d6303f08e4a8ff8afa7c.mockapi.io/Categories';
    this.listingsWrapperNode = document.querySelector(listingsWrapperSelector);
    this.activeCategory = 0;
    this.init();
    this.getCategoriesData();
  }

  init() {
    if (!this.listingsWrapperNode) {
      console.error('listingsWrapperNode not found');
      return;
    }

    this.listingCardsNode =
      this.listingsWrapperNode.querySelector('.listing-cards');
    this.filtersNode = this.listingsWrapperNode.querySelector('.filters');

    this.getProductsData();
  }

  noProductsAvailable() {
    this.listingCardsNode.innerHTML = `
          <div class="no-cards">
            No products are available at the moment :(
          </div>
        `;
  }

  async getProductsData() {
    try {
      const response = await fetch(this.productsURL);
      const products = await response.json();
      this.fillCards(products);
      this.products = products;
    } catch (err) {
      this.noProductsAvailable();
      throw new Error(err);
    }
  }

  calcTimeLeft(time) {
    const timeNow = Date.now();
    const timeEnd = Date.parse(time);
    const timeLeft = timeEnd - timeNow;
    const timeLeftFormatted = this.formatTime(timeLeft);
    return timeLeftFormatted;
  }

  formatTime(time) {
    if (time <= 0) {
      return 0;
    }

    const date = new Date(time);
    return `${date.getHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`;
  }

  fillCards(products) {
    if (!products.length || !this.listingCardsNode) {
      this.noProductsAvailable();
    }

    products.forEach((product, index) => {
      const endDate = this.calcTimeLeft(product.end_date);
      const cardFooter = endDate
        ? `
        <footer class="card-footer">
          <time class="time">${this.calcTimeLeft(product.end_date)}</time>
        </footer>`
        : '';

      const card = `
        <li class="listing-card">
          <a
            class="listing-link"
            href="#"
          >
            <div class="listing-wrapper-thumbnail">
              <img
                class="thumbnail"
                src="${product.image}"
                alt="Old town street"
              />
            </div>

            <div class="listing-wrapper-info">
              <h3 class="listing-title">${product.name}</h3>

              <div class="listing-price">
                <img
                  class="icon"
                  alt="ETH icon"
                  width="21"
                  height="21"
                />
                <span class="amount">${product.price}</span>
              </div>

              <div class="listing-index">${index + 1} of ${
        products.length
      }</div>

              ${cardFooter}
            </div>
          </a>
        </li>
      `;

      this.listingCardsNode.insertAdjacentHTML('beforeend', card);
    });
  }

  async getCategoriesData() {
    try {
      const response = await fetch(this.categoriesURL);
      this.categories = await response.json();
      this.fillFilters();
    } catch (err) {
      throw new Error(err);
    }
  }

  fillFilters() {
    if (!this.categories.length || !this.filtersNode) {
      return;
    }

    this.categories.forEach((category) => {
      const filterBtn = `
        <button
          class="btn button-filter"
          data-color="inactive"
          data-category="${category.id}"
        >
          ${category.name}
        </button>
      `;

      this.filtersNode.insertAdjacentHTML('beforeend', filterBtn);
    });

    this.addListeners();
  }

  addListeners() {
    this.filtersNode.addEventListener('click', (e) => {
      const categoryId = e.target.getAttribute('data-category');
      if (!categoryId) {
        return;
      }

      this.listingCardsNode.innerHTML = '';
      const filteredProducts =
        categoryId === 'all'
          ? this.products
          : this.products.filter(
              (product) => product.category_id === parseInt(categoryId),
            );
      this.fillCards(filteredProducts);

      [...this.filtersNode.children].forEach((btn) => {
        btn.setAttribute('data-color', 'inactive');
      });
      e.target.setAttribute('data-color', 'active');
    });
  }
}
