INSERT INTO cities(name, population) VALUES('Bratislava', 432000);
INSERT INTO cities(name, population) VALUES('Budapest', 1759000);
INSERT INTO cities(name, population) VALUES('Prague', 1280000);
INSERT INTO cities(name, population) VALUES('Warsaw', 1748000);
INSERT INTO cities(name, population) VALUES('Los Angeles', 3971000);
INSERT INTO cities(name, population) VALUES('New York', 8550000);
INSERT INTO cities(name, population) VALUES('Edinburgh', 464000);
INSERT INTO cities(name, population) VALUES('Berlin', 3671000);


INSERT INTO owners(name, surname)
                        VALUES
                        ('Jan', 'Kowalski'),
                        ('Wojtek', 'Nowak'),
                        ('Franek', 'Bucek'),
                        ('Józek', 'Belka');

INSERT INTO properties( owner_ID, type , symbol , area , level , participation )
                        VALUES
                        (1,'apartment', 'm27', 60.21, 5, 6400),
                        (2,'apartment', 'm27', 60.21, 5, 6300),
                        (3,'garage',    'g5', 12.21, -1, 2080),
                        (4,'apartment', 'm22', 60.21,6, 7200),
                        (1,'garage',    'g4', 12.21, -1, 2080),
                        (1,'apartment', 'm23', 60.21, 5, 4080),
                        (2,'garage',    'g1', 12.21, -1, 2080);


INSERT INTO garages(garage_number, area, level) VALUES('1G', 12.75, -1);
INSERT INTO garages(garage_number, area, level) VALUES('2G', 12.75, -1);

INSERT INTO resolutions(id, symbol,title, text, year)
                    VALUES
                    (1, '5-2017', 'Za wymina wind', 'W oparciu o xxxx', 2015),
                    (2, '6-2017', 'Za całość', 'W oparciu o yyy', 2017),
                    (3, '1-2018', 'Absolutorium', 'W oparciu czlonkowie wspolnoty', 2018),
                    (4, '2-2018', 'Plan gospodarczy', 'W oparciu czlonkowie wspolnoty', 2018);

INSERT INTO polls( resolutionid, propertyid, ownerid, vote )
                    VALUES
                    (1,1,1,'+'),
                    (1,2,1,'+'),
                    (2,1,2,'-'),
                    (2,3,2,'0'),
                    (3,1,2,''),
                    (3,3,3,'');
