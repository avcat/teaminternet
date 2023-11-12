# Team Internet test task

## Install the files

Requires: [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos), [Docker](https://docs.docker.com/desktop/install/linux-install/), [Docker Compose](https://docs.docker.com/compose/install/other/).

1. Install Wordpress plugins, unzip Wordpress uploads folder, unzip database:

   > $ `composer install`

2. Download and install the enviroment to run Wordpress: Wordpress core, MySQL, phpMyAdmin:

   > $ `docker-compose up -d`

---

## Import database. Login into the site

3. Open [phpMyAdmin](http://localhost:1000).

4. Log in to phpMyAdmin:

   > Username: `wordpress`

   > Password: `wordpress`

5. Import contentful database from db/wordpress.sql intro wordpress database:

   > `wordpress - Import - Browse - db/wordpress.sql - Import`.

6. Log into [site admin panel](http://localhost:1111/wp-admin/):

   > Username or Email Address: `teaminternet`

   > Password: `teaminternet`

---

## Change the content

7. While editing the only [Homepage](http://localhost:1111/wp-admin/post.php?post=12&action=edit).

---

![](/themes/teaminternet/screenshot.png)
