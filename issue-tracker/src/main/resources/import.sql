INSERT INTO USERS (ID, VERSION, USERNAME, EMAIL, PASSWORD, ROLE) VALUES (0, 0, 'admin', 'admin@gmail.com', 'admin', 'ADMIN');
INSERT INTO USERS (ID, VERSION, USERNAME, EMAIL, PASSWORD, ROLE) VALUES (1, 0, 'kkereszti', 'kkereszti@kkereszti.com', 'almafa', 'USER');
INSERT INTO USERS (ID, VERSION, USERNAME, EMAIL, PASSWORD, ROLE) VALUES (2, 0, 'TibiAtya', 'tibi@atya.hu', 'ta', 'USER');



INSERT INTO ISSUES (ID, VERSION, DESCRIPTION, LOCATION, STATUS, TIMESTAMP, USER_ID) VALUES (0, 0, 'Tűz a hibernáló kamrában', 'Hibernáló kamra', 'INPROGRESS', CURRENT_TIMESTAMP(), 1);
INSERT INTO ISSUES (ID, VERSION, DESCRIPTION, LOCATION, STATUS, TIMESTAMP, USER_ID) VALUES (1, 0, 'Elfogyott a bor', 'Bár', 'NEW', CURRENT_TIMESTAMP(), 2);




