const puppeteer = require("puppeteer");
const path = require("path");

const HTML = path.join(__dirname, "..", "pages", "hotel-resume.html");
const OUT = path.join(__dirname, "..", "media", "hotel-resume.pdf");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 });
  await page.goto(`file:${HTML}`, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMediaType("print");

  await page.pdf({
    path: OUT,
    format: "A4",
    printBackground: false,
    /* Margins from @page in hotel-resume.html (print) — avoid double margins here */
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  console.log("Wrote", OUT);
})();
