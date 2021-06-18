const puppeteer = require("puppeteer");

const snapshot = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //   await page.setViewport({
  //     width: 640,
  //     height: 480,
  //     deviceScaleFactor: 1,
  //   });
  await page.goto("https://www.thesun.co.uk", {
    waitUntil: "networkidle0",
  });
  //const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
  await page.setViewport({ width: 1280, height: bodyHeight });

  await page.waitForTimeout(15000);
  await page.screenshot({
    path: "./screenshot.png",
    fullPage: true,
  });
  await browser.close();
};
snapshot();
