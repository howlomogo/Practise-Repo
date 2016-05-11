<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress-blog');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'HF>GzYKxGXEK]wC `j@-sC*j1GXeJrr6=|WJ=!p4-OR13V-GOL9g:lf/!`zRZZ%^');
define('SECURE_AUTH_KEY',  '0-k_(nT`p|r|z`RQ@V{+XxC`a6:|kV9U.-iJ{+|Y,Y%%|Xm+Z2v&zAcH &>R<nqi');
define('LOGGED_IN_KEY',    'wlzTD_v@2z=,75NCZhE|>U}RZ617<Qz|kn.6~porJX]US?Af@E(A<]QP-!g|Y;yp');
define('NONCE_KEY',        'hJfA=Lg6r)Pg|:/@+!CWyR)a-|91K6EQ7UMCLR&|cZM9)kz2E]0<r}}Ab}q^h+a#');
define('AUTH_SALT',        'fQ}apj,|+o}FC4;hYTSj#}n/@:p*r/i~v@pM?Z48x4Myjb!#%,-|#&N|.^+,n<*+');
define('SECURE_AUTH_SALT', 'F|f1?XEY8QsRiqKMwBr{B_C@H{QYNW^Y,|nI%6ml4=ADt<F^=>Amr-fR&8jp-O!G');
define('LOGGED_IN_SALT',   ';_Kl(1XDVcdAsiqX?VH xIV|P+NBl^+cs@&p|gVYn}/N!K0A!{oiYK-N_FSItUnm');
define('NONCE_SALT',       'pb4@p}sz?s TY@m|<Zp$&A|E 4}P>zP_do=H-Rfs6F4PS&A&j5$]xGgCn|Yde&Zt');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
