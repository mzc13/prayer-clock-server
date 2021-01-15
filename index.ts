import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

const host = "0.0.0.0";
const port = 8080;

app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
//   console.log("Request from: " + req.ip + " for " + req.originalUrl);
//   next();
// });

function islamicFinderAdhan(res: string) {
  let fajr = res
    .match(`<p>\\s*?Fajr\\s*?<\/p>\\D*?<p>\\s*?\\d*?:\\d*?\\s*?\\w*?\\s*?<`)![0]
    .match("\\d*:\\d*\\s*\\w*")![0];
  let sunrise = res
    .match(`<p>\\s*?Sunrise\\s*?<\/p>\\D*?<p>\\s*?\\d*?:\\d*?\\s*?\\w*?\\s*?<`)![0]
    .match("\\d*:\\d*\\s*\\w*")![0];
  let dhuhr = res
    .match(`<p>\\s*?Dhuhr\\s*?<\/p>\\D*?<p>\\s*?\\d*?:\\d*?\\s*?\\w*?\\s*?<`)![0]
    .match("\\d*:\\d*\\s*\\w*")![0];
  let asr = res
    .match(`<p>\\s*?Asr\\s*?<\/p>\\D*?<p>\\s*?\\d*?:\\d*?\\s*?\\w*?\\s*?<`)![0]
    .match("\\d*:\\d*\\s*\\w*")![0];
  let maghrib = res
    .match(`<p>\\s*?Maghrib\\s*?<\/p>\\D*?<p>\\s*?\\d*?:\\d*?\\s*?\\w*?\\s*?<`)![0]
    .match("\\d*:\\d*\\s*\\w*")![0];
  let isha = res
    .match(`<p>\\s*?Isha\\s*?<\/p>\\D*?<p>\\s*?\\d*?:\\d*?\\s*?\\w*?\\s*?<`)![0]
    .match("\\d*:\\d*\\s*\\w*")![0];

  return { fajr: fajr, sunrise: sunrise, dhuhr: dhuhr, asr: asr, maghrib: maghrib, isha: isha };
}

app.get("/", (req, res) => {
  res.send("Prayer Clock Server Running");
});

app.get("/bayonne-if", (req, res) => {
  let atimes = islamicFinderAdhan(fs.readFileSync("/home/ubuntu/prayer-clock-server/adhan.html", "utf8"));
  res.send(atimes);
});

app.listen(port, host, () => {
  console.log(`App listening at http://${host}:${port}`);
});
