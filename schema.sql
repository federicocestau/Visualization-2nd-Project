DROP TABLE IF EXISTS scraping;
CREATE TABLE scraping (
    abrand VARCHAR(8000)  NOT NULL,
    blogo VARCHAR(8000) NOT NULL,
    dealer_description VARCHAR(8000) NOT NULL,
    price VARCHAR(25)  NOT NULL,
    cdealer_link VARCHAR(200) NOT NULL
 )