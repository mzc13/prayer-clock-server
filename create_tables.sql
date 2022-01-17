CREATE TABLE bayonne_if(
    month INT NOT NULL,
    date INT NOT NULL,
    year INT NOT NULL,
    fajr_adhan TEXT NOT NULL,
    sunrise TEXT NOT NULL,
    dhuhr_adhan TEXT NOT NULL,
    asr_adhan TEXT NOT NULL,
    maghrib_adhan TEXT NOT NULL,
    isha_adhan TEXT NOT NULL,
    PRIMARY KEY(month, date, year),
    CHECK(month > -1 AND month < 12),
    CHECK(date > 0 AND date < 32),
    CHECK(year > 1900)
) STRICT