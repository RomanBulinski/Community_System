DROP TABLE IF EXISTS polls;
DROP TABLE IF EXISTS resolutions;
DROP TABLE IF EXISTS properties;
DROP TABLE IF EXISTS owners;

DROP TABLE IF EXISTS owners;
CREATE TABLE owners(    id serial PRIMARY KEY,
                        name VARCHAR(255),
                        surname VARCHAR(255),
                        email VARCHAR(255) );
INSERT INTO owners(name, surname, email)
VALUES
('Jan', 'Kowalski', 'rraa@com.pl'),
('Wojtek', 'Strazak', 'daa@com.pl'),
('Franek', 'Golas',  'raa@com.pl'),
('Wojtek', 'BezPortek',  'qwwqeaa@com.pl'),
('Józek', 'Belka','aauuuu@com.pl');


DROP TABLE IF EXISTS properties;
CREATE TABLE properties(id serial PRIMARY KEY,
                        owner_ID integer REFERENCES owners(id),
                        type VARCHAR(255),
                        symbol VARCHAR(255),
                        area numeric,
                        level integer,
                        participation numeric );
INSERT INTO properties( owner_ID, type , symbol , area , level , participation )
VALUES
(1,'apartment', 'm27', 60.21, 5, 6400),
(2,'apartment', 'm27', 60.21, 5, 6300),
(3,'garage',    'g5', 12.21, -1, 2080),
(4,'apartment', 'm22', 60.21,6, 7200),
(1,'garage',    'g4', 12.21, -1, 2080),
(1,'apartment', 'm23', 60.21, 5, 4080),
(2,'garage',    'g1', 12.21, -1, 2080);


DROP TABLE IF EXISTS resolutions;
CREATE TABLE resolutions(id serial PRIMARY KEY,
                         symbol VARCHAR(50),
                         title VARCHAR(255),
                         text VARCHAR (1000),
                         year integer );
INSERT INTO resolutions( symbol,title, text, year)
VALUES
('1-2016', 'Absolutorium', 'W oparciu o xxxx', 2016),
('5-2017', 'Za wymina wind', 'W oparciu o xxxx', 2017),
('6-2017', 'Za całość', 'W oparciu o yyy', 2017),
( '1-2018', 'Absolutorium', 'W oparciu czlonkowie wspolnoty', 2018),
('2-2018', 'Plan gospodarczy', 'W oparciu czlonkowie wspolnoty', 2018);


DROP TABLE IF EXISTS polls;
CREATE TABLE polls(id serial PRIMARY KEY,
                   resolutionid integer REFERENCES resolutions(id),
                   propertyid integer REFERENCES properties(id),
                   vote VARCHAR(25));
INSERT INTO polls( resolutionid, propertyid, vote )
VALUES
(1,4,'+'),
(2,1,'+'),
(1,5,'-'),
(3,2,'0'),
(1,2,''),
(3,3,'');
