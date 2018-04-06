# bookerkeeper

--[X] Create server, serve static files.
--[X] Create SQL Table and Insert Placeholder Data, see Below
--[X] Set up controllers and service and establish book GET route.
--[X] Move book GET to router
--[X] Establish book POST route
--[X] Establish Genre GET route that uses COUNT and JOIN to populate Genre.html
--[X] DELETE and PUT routes for Books.
--[X] DELETE route for Genres.

```SQL 
CREATE TABLE "genre" (
  "id" serial primary key,
  "name" varchar(80)
);

CREATE TABLE "book" (
  "id" serial primary key,
  "title" varchar(120),
  "author" varchar(80),
  "image" varchar(1000),
  "date" DATE,
  "score" INT,
  "favorite" BOOLEAN,
  "genre_id" INT REFERENCES "genre"

);

INSERT INTO "genre" ("name") 
VALUES ('Science fiction'),
	('Satire'),
	('Drama'),
	('Action and Adventure'),
	('Romance'),
	('Mystery'),
	('Horror'),
	('Self Help'),
	('Health'),
	('Guide'),
	('Travel'),
	('Children'),
	('Religion'),
	('Science'),
	('History'),
	('Math'),
	('Anthology'),
	('Poetry'),
	('Encyclopedias'),
	('Dictionaries'),
	('Comics'),
	('Art'),
	('Cookbooks'),
	('Diaries'),
	('Journals'),
	('Prayer Books'),
	('Series'),
	('Trilogy'),
	('Biographies'),
	('Autobiographies'),
	('Fantasy');
	
INSERT INTO "book" ("author", "title", "date", "image", "genre_id", "score", "favorite")
VALUES ('Ernest Hemingway', 'For Whom The Bell Tolls', '1-1-1940', 'http://www.bookthink.com/images/170hem01.jpg', 3, 5, FALSE),
    ('Leo Tolstoy', 'War And Peace', '1-1-1869', 'https://d7akkm3013lov.cloudfront.net/covers/tolstoy-war-and-peace.jpg', 3, 5, FALSE),
    ('Karl Ove Knausgard', 'My Struggle, Book 2', '1-1-2014', 'https://images-na.ssl-images-amazon.com/images/I/51TAwy59O0L._SX332_BO1,204,203,200_.jpg', 3, 5, FALSE),
    ('J.R.R. Tolkien', 'The Hobbit', '1-1-1937', 'https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg', 12, 5, FALSE),
    ('Jorge Luis Borges', 'Ficciones', '1-1-1944', 'https://imagessl8.casadellibro.com/a/l/t0/08/9788499089508.jpg', 1, 5, FALSE),
    ('Charles Simic', 'Hotel Insomnia', '1-1-1992', 'https://static.bokelskere.no/85562e199b3ff456fe316db5c8a1d3be128d243c6051482326826a1d.jpeg', 18, 5, FALSE),
    ('Raymond Carver', 'Will You Please Be Quiet, Please?', '1-1-1976', 'https://images.gr-assets.com/books/1360355821l/11446.jpg', 3, 5, FALSE),
    ('Wilson Rawls', 'Where The Red Fern Grows', '1-1-1961', 'https://nashvillebookworm.files.wordpress.com/2015/03/redfern.jpg', 12, 5, FALSE);
```
