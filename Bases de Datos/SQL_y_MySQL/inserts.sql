INSERT INTO users(name, email) VALUES
    ('Ricardo', 'ricardo@hola.com'),
    ('Laura', 'laura@hola.com'),
    ('Jose', 'jose@hola.com'),
    ('Sofia', 'sofia@hola.com'),
    ('Fernanda', 'fernanda@hola.com'),
    ('Jose Guillermo', 'memo@hola.com'),
    ('Maria', 'maria@hola.com'),
    ('Susana', 'susana@hola.com'),
    ('Jorge', 'jorge@hola.com');
INSERT INTO publishers(publisher_id, name, country) VALUES
    (1, 'OReilly', 'USA'),
    (2, 'Santillana', 'Mexico'),
    (3, 'MIT Edu', 'USA'),
    (4, 'UTPC', 'Colombia'),
    (5, 'Platzi', 'USA');
INSERT INTO books(publisher_id, title, author, description, price, copies) VALUES
    (1, 'Mastering MySQL', 'John Goodman', 'Clases de bases de datos usando MySQL', 10.50, 4),
    (2, 'Trigonometria avanzada', 'Pi Tagoras', 'Trigonometria desde sus origenes', 7.30, 2),
    (3, 'Advanced Statistics', 'Carl Gauss', 'De curvas y otras graficas', 23.60, 1),
    (4, 'Redes Avanzadas', 'Tim Bernes-Lee', 'Lo que viene siendo el Internet', 13.50, 4),
    (2, 'Curvas Parabolicas', 'Napoleon TNT', 'Historia de la parabola', 6.99, 10),
    (1, 'Ruby On (the) Road', 'A Miner', 'Un nuevo acercamiento a la programacion', 18.75, 4),
    (1, 'Estudios basicos de estudios', 'John Goodman', 'Clases de datos usando MySQL', 10.50 , 4),
    (4, 'Donde esta Y?', 'John Goodman', 'Clases de datos usando MySQL', 10.50, 4),
    (3, 'Quimica Avanzada', 'John White', 'Profitable studies on chemistry', 45.35, 1),
    (4, 'Graficas Matematicas', 'Rene Descartes', 'De donde viene el plano', 13.99, 7),
    (4, 'Numeros Importantes', 'Leonard Euler', 'De numeros que a veces nos sirven', 10, 3),
    (3, 'Modelado de conocimiento', 'Jack Friedman', 'Una vez adquirido, como se guarda el conocimiento', 29.99, 2),
    (3, 'Teoria de juegos', 'John Nash', 'A o B?', 12.55, 3),
    (1, 'Calculo de variables', 'Brian Kernhigan', 'Programacion mega basica', 9.50, 3),
    (5, 'Produccion de streaming', 'Juan Pablo Rojas', 'De la oficina ala pan', 23.49, 9),
    (5, 'ELearning', 'JFD & DvdH', 'Diseno y ejecucion de educacion online', 23.55, 4),
    (5, 'Pet Caring for Geeks', 'KC', 'Que tu perro aprenda a programar', 18.79, 3 ),
    (1, 'Algebra basica', 'Al Juarismi', 'Esto de encontrar X o Y, dependiendo', 13.50, 8);

SELECT count(*) FROM publishers;
SELECT * FROM publishers;
DELETE * FROM publishers;

_____________________________________

SELECT a.action_id,
    b.title,
    a.action_type,
    u.name,
    0 AS price
FROM actions AS a
LEFT JOIN books AS b
    ON b.book_id = a.book_id
LEFT JOIN users AS u
    ON a.user_id = u.user_id
WHERE a.action_type <> 'venta';

_________________________________________

SELECT a.action_id AS aid,
    b.title,
    a.action_type,
    u.name,
    0 AS price
FROM actions AS a
LEFT JOIN books AS b
    ON b.book_id = a.book_id
LEFT JOIN users AS u
    ON a.user_id = u.user_id
WHERE a.action_type IN ('prestamo', 'devolucion')

UNION

SELECT a.action_id AS aid,
    b.title,
    a.action_type,
    u.name,
    b.price AS price
FROM actions AS a
LEFT JOIN books AS b
    ON b.book_id = a.book_id
LEFT JOIN users AS u
    ON a.user_id = u.user_id
WHERE a.action_type NOT IN ('prestamo', 'devolucion')

ORDER BY aid

______________________________________________

SELECT a.action_id AS aid,
    b.title,
    a.action_type,
    u.name,
--    b.price AS price
    IF(a.action_type = 'venta',
     b.price,
     0) AS price
FROM actions AS a
LEFT JOIN books AS b
    ON b.book_id = a.book_id
LEFT JOIN users AS u
    ON a.user_id = u.user_id


______________________________________________

SELECT a.action_id AS aid,
    b.title,
    a.action_type,
    u.name,
--    b.price AS price
    IF(a.action_type = 'venta',
     b.price,
     0) AS price,
    b.book_id AS bid,
    IF(b.book_id IN (1,4,7,8,2),
        b.price*.9, 
        b.price) AS dcto
FROM actions AS a
LEFT JOIN books AS b
    ON b.book_id = a.book_id
LEFT JOIN users AS u
    ON a.user_id = u.user_id

___________________________________

SELECT p.name,
    b.title,
    b.price,
    b.copies
FROM books AS b
JOIN publishers AS p
    ON b.publisher_id = p.publisher_id

___________________________________    


SELECT p.publisher_id AS pid,
    p.name,
    SUM(b.price)
FROM books AS b
JOIN publishers AS p
    ON b.publisher_id = p.publisher_id
GROUP BY pid

___________________________________    

SELECT p.publisher_id AS pid,
    p.name,
    SUM(b.price * b.copies)
FROM books AS b
JOIN publishers AS p
    ON b.publisher_id = p.publisher_id
GROUP BY pid
___________________________________ 

SELECT p.publisher_id AS pid,
    p.name,
    SUM(IF(b.price < 15, 0,b.price * b.copies)) AS Total
FROM books AS b
JOIN publishers AS p
    ON b.publisher_id = p.publisher_id
GROUP BY pid
___________________________________

SELECT 
    p.publisher_id AS pid,
    p.name,
    COUNT(b.books_id) AS libros
FROM books AS b
LEFT JOIN publishers AS p
    ON b.publisher_id = p.publisher_id
GROUP BY pid
__________________________________ 

SELECT 
    p.publisher_id AS pid,
    p.name,
--  COUNT(b.books_id) AS libros
    SUM(IF(b.price >= 15, 1, 0)) AS libros_mios
FROM books AS b
LEFT JOIN publishers AS p
    ON b.publisher_id = p.publisher_id
GROUP BY pid
__________________________________ 

SELECT 
    p.publisher_id AS pid,
    p.name,
    SUM(IF(b.price < 15, 0, b.price * b.copies)) AS total,
    SUM(IF(b.price < 15, 0, 1)) AS libros_por_vender
FROM books AS b
JOIN publishers AS p
    ON b.publisher_id = p.publisher_id
GROUP BY pid
__________________________________ 

SELECT 
    p.publisher_id AS pid,
    p.name,
    SUM(IF(b.price < 15, 0, b.price * b.copies)) AS total,
    SUM(IF(b.price < 15, 0, 1)) AS libros_por_vender,
    COUNT(b.books_id) AS libros
FROM books AS b
JOIN publishers AS p
    ON b.publisher_id = p.publisher_id
WHERE b.price > 15
GROUP BY pid
__________________________________

INSERT INTO users(name, email) VALUES('hola', 'sofia@gmail.com');
__________________________________

ALTER TABLE users add column active tinyint(1) not null default 1;
__________________________________

desc users;
__________________________________

UPDATE users SET active = 0 WHERE user_id = 16;
__________________________________

INSERT INTO users(name, email) 
    VALUES('rocio', 'sofia@gmail.com')
ON DUPLICATE KEY UPDATE SET 
    active = 1, 
    name = CONCAT(name, ' - nuevo');
__________________________________

UPDATE users SET name = 'juan' 
WHERE user_id = 5
LIMIT 1;
__________________________________

UPDATE users SET name = 'juan' 
WHERE user_id = % /* wild card, eso son todas las filas */
LIMIT 1;
__________________________________

INSERT INTO [table]
UPDATE [table]

--insert o update
--1
REPLACE INTO users(name, email, active)
    VALUES('lorena','laura@hola.com', 4)
__________________________________

--2
REPLACE INTO users SET 
    name = 'juan', 
    email = 'juan@hotmail.com';