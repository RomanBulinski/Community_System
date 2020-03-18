INSERT INTO cities(name, population) VALUES('Bratislava', 432000);
INSERT INTO cities(name, population) VALUES('Budapest', 1759000);
INSERT INTO cities(name, population) VALUES('Prague', 1280000);
INSERT INTO cities(name, population) VALUES('Warsaw', 1748000);
INSERT INTO cities(name, population) VALUES('Los Angeles', 3971000);
INSERT INTO cities(name, population) VALUES('New York', 8550000);
INSERT INTO cities(name, population) VALUES('Edinburgh', 464000);
INSERT INTO cities(name, population) VALUES('Berlin', 3671000);

INSERT INTO owners(name, surname) VALUES('Jan', 'Kowalski');
INSERT INTO owners(name, surname) VALUES('Wojtek', 'Nowak');
INSERT INTO owners(name, surname) VALUES('Franek', 'Bucek');
INSERT INTO owners(name, surname) VALUES('Józek', 'Belka');

INSERT INTO properties( type , symbol , area , level , participation ) VALUES('apartment', 'm27', 60.21, 5, 1.03);
INSERT INTO properties( type , symbol , area , level , participation ) VALUES('apartment', 'm27', 60.21, 5, 1.03);
INSERT INTO properties( type , symbol , area , level , participation ) VALUES('garage', 'g5', 12.21, -1, 0.22);

INSERT INTO garages(garage_number, area, level) VALUES('1G', 12.75, -1);
INSERT INTO garages(garage_number, area, level) VALUES('2G', 12.75, -1);

INSERT INTO resolutions(id, symbol,title, text, year) VALUES(1, '5-2017', 'Za wymina wind', 'W oparciu o xxxx', 2015);
INSERT INTO resolutions(id, symbol,title, text, year) VALUES(2, '6-2017', 'Za całość', 'W oparciu o yyy', 2017);

INSERT INTO polls( id, resolutionid, propertyid, ownerid, yes, against, abstention )
                    VALUES
                    (1,1,1,1,TRUE ,FALSE ,FALSE ),
                    (2,1,1,1,TRUE ,FALSE ,FALSE),
                    (3,1,1,1,FALSE ,TRUE ,FALSE),
                    (4,1,1,1,TRUE ,FALSE ,FALSE ),
                    (5,1,1,1,TRUE ,FALSE ,FALSE),
                    (6,1,1,1,FALSE ,TRUE ,FALSE);
