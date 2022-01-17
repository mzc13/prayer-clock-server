import Database from "better-sqlite3";
// import { constants } from "fs";
// import fs from "fs/promises";

const DBPATH = "test.db";
const DB = new Database(DBPATH, { verbose: console.log });
// beforeAll(async () => {
//   await fs.rm(DBPATH);
// });
// beforeAll(async () => {});

test("Create bayonne_if table", () => {
  let stmt = DB.prepare(
    `CREATE TABLE bayonne_if(
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
    ) STRICT`
  );
  stmt.run();
});

// test("DB was deleted", async () => {
//   console.log(await fs.access(DBPATH, constants.F_OK));
// });
