CREATE TABLE books (
	books_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	publisher_id INTEGER UNSIGNED NOT NULL,
	author VARCHAR(100) NOT NULL,
	title VARCHAR(60) NOT NULL,
	description TEXT,
	price DECIMAL(5,2), /* Digitos, Decimal */
	copies INTEGER UNSIGNED
);

CREATE TABLE publishers (
	publisher_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	country VARCHAR(20)
);

CREATE TABLE users(
	user_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE actions (
	action_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	book_id INTEGER UNSIGNED NOT NULL,
	user_id INTEGER UNSIGNED NOT NULL,
	action_type ENUM('venta', 'prestamo', 'devolucion')
		NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP /* Format YYYY-MM-DD HH:MM*/
);
