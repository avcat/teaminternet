<?php /* Template Name: Homepage */ ?>
<?php get_header(); ?>

<!-- TODO. Caching Plugin -->

<main class="main-content">

    <?php
    [
        'title' => $title,
        'subtitle' => $subtitle,
        'button' => $button,
        'image_desktop' => $image_desktop,
        'image_mobile' => $image_mobile,
    ] = get_field('banner');
    ?>
    <section class="banner">
        <div class="wrapper">
            <div class="banner-motto">

                <?php if ($title) { ?>
                    <h1 class="section-title">
                        <?= $title; ?>
                    </h1>
                <?php } ?>

                <?php if ($subtitle) { ?>
                    <p class="motto-subtitle">
                        <?= $subtitle; ?>
                    </p>
                <?php } ?>

                <?php if ($button) { ?>
                    <a class="btn motto-button" data-color="accent" href="<?= $button['url'] ?>">
                        <?= $button['title']; ?>
                    </a>
                <?php } ?>

            </div>

            <div class="banner-cards">

                <?php if ($image_desktop) { ?>
                    <img class="banner-card" src="<?= $image_desktop['url']; ?>" alt="Banner card" />
                <?php } ?>

                <?php if ($image_mobile) { ?>
                    <img class="banner-card mobile" src="<?= $image_mobile['url']; ?>" alt="Banner card" />
                <?php } ?>

            </div>
        </div>
    </section>

    <?php
    [
        'show_section' => $show_section,
        'title' => $title,
    ] = get_field('product_listings');

    if ($show_section) {
    ?>
        <section class="product-listings">
            <div class="wrapper">
                <h2 class="section-title">
                    <?= $title; ?>
                </h2>
                <div class="filters">
                    <button class="btn button-filter" data-color="active" data-category="all">
                        ALL
                    </button>
                </div>
                <ul class="listing-cards"></ul>
            </div>
        </section>
    <?php } ?>

    <?php
    [
        'images' => $images,
    ] = get_field('marquee');

    if (!empty($images)) {
    ?>
        <hr class="section-divider" />

        <!-- TODO. Lightbox -->
        <!-- TODO. Fix Marqee -->
        <section class="marquee">
            <div class="wrapper">
                <div class="marquee-slider-wrapper">
                    <div class="marquee-slider" data-slider="marquee">
                        <?php foreach ($images as $image) { ?>
                            <div class="marquee-slide">
                                <img class="marquee-slide-image" src="<?= $image; ?>" alt="slide" />
                            </div>
                        <?php } ?>
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
    <?php } ?>

</main>

<?php get_footer(); ?>