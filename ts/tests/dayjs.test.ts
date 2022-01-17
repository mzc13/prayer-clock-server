import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

test("Parsing date of 09 January 2022, strict and non-strict", () => {
  let d = dayjs("09 January 2022", "DD MMMM YYYY", true);
  expect(d.isSame(dayjs("09 January 2022"))).toBe(true);
});
