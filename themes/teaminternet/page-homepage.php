<?php /* Template Name: Homepage */ ?>
<?php get_header(); ?>

<main class="main-content">
    <section class="banner">
        <div class="wrapper">
            <div class="banner-motto">
                <h1 class="section-title">
                    Create Your Own <b class="highlight">NFT Dream</b> Gallery
                </h1>
                <p class="motto-subtitle">
                    The Largest NFT Marketplace. Automatic and truly unique digital
                    creation. Signed and issued by the creator, made possible by
                    blockchain technology
                </p>
                <button class="btn motto-button" data-color="accent">
                    Discover NFT
                </button>
            </div>

            <div class="banner-cards">
                <img class="banner-card" src="<?= IMG_DIR; ?>/banner-card-3.png" alt="Banner card - Dude in glasses" width="287" height="196" />
                <img class="banner-card" src="<?= IMG_DIR; ?>/banner-card-2.png" alt="Banner card - Dude in mask" width="308" height="210" />
                <img class="banner-card" src="<?= IMG_DIR; ?>/banner-card-1.png" alt="Banner card - Monkey" width="326" height="223" />

                <img class="banner-card mobile" src="<?= IMG_DIR; ?>/banner-card-1-mobile.png" alt="Banner card - Monkey" width="324" height="525" />
            </div>
        </div>
    </section>

    <section class="product-listings">
        <div class="wrapper">
            <h2 class="section-title">Product Listings</h2>
            <div class="filters">
                <button class="btn button-filter" data-color="active" data-category="all">
                    ALL
                </button>
            </div>
            <ul class="listing-cards">
                <!-- TODO. Loader -->
            </ul>
        </div>
    </section>

    <hr class="section-divider" />

    <section class="marquee">
        <div class="wrapper">
            <div class="marquee-slider-wrapper">
                <div class="marquee-slider" data-slider="marquee">
                    <div class="marquee-slide">
                        <!-- TODO. Lightbox -->
                        <!-- TODO. Fix Marqee -->
                        <img class="marquee-slide-image" src="<?= IMG_DIR; ?>/slide-1.png" alt="slide" />
                    </div>
                    <div class="marquee-slide">
                        <img class="marquee-slide-image" src="<?= IMG_DIR; ?>/slide-2.png" alt="slide" />
                    </div>
                    <div class="marquee-slide">
                        <img class="marquee-slide-image" src="<?= IMG_DIR; ?>/slide-3.png" alt="slide" />
                    </div>
                    <div class="marquee-slide">
                        <img class="marquee-slide-image" src="<?= IMG_DIR; ?>/slide-1.png" alt="slide" />
                    </div>
                    <div class="marquee-slide">
                        <img class="marquee-slide-image" src="<?= IMG_DIR; ?>/slide-2.png" alt="slide" />
                    </div>
                </div>

                <footer class="marquee-footer">
                    <button class="prev"></button>
                    <div class="info">
                        <span class="current-slide"></span>
                        /
                        <span class="slides-amount"></span>
                    </div>
                    <button class="next"></button>
                </footer>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>