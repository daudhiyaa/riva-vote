const puppeteer = require("puppeteer"); // v20.7.4 or later

const konfigbrowser = {
  headless: false,
  args: [
    "--log-level=3", // fatal only

    "--no-default-browser-check",
    "--disable-infobars",
    "--disable-web-security",
    "--disable-site-isolation-trials",
    "--no-experiments",
    "--ignore-gpu-blacklist",
    "--ignore-certificate-errors",
    "--ignore-certificate-errors-spki-list",
    "--mute-audio",
    "--disable-extensions",
    "--no-sandbox",
  ],
  disablejavascript: true,
  ignoreHTTPSErrors: true,
  incognito: true,
  disablegpu: true,
};

const banyakVote = 5;
const delay = 150; // miliseconds
const timeout = 5000;

(async () => {
  const browser = await puppeteer.launch(konfigbrowser);

  for (let i = 0; i < banyakVote; i++) {
    const page = await browser.newPage();
    page.setDefaultTimeout(timeout);

    let option1 = Math.floor(Math.random() * 6) + 1,
      option2 = Math.floor(Math.random() * 3) + 1,
      option3 = Math.floor(Math.random() * 6) + 1,
      option4 = Math.floor(Math.random() * 5) + 1;

    {
      const targetPage = page;
      await targetPage.setViewport({
        width: targetPage.viewport().width,
        height: 749,
      });
    }
    {
      const targetPage = page;
      const promises = [];
      const startWaitingForEvents = () => {
        promises.push(targetPage.waitForNavigation());
      };
      startWaitingForEvents();
      await targetPage.goto(
        "https://docs.google.com/forms/d/e/1FAIpQLScLoTY1JhXaDpdFamwEnMMTZ09EFKF7Gg_p3G2Vhpv0o9E-Mg/viewform"
      );
      await Promise.all(promises);
    }
    {
      const targetPage = page;
      await puppeteer.Locator.race([
        targetPage.locator(
          `div.o3Dpx > div:nth-of-type(1) span > div > div:nth-of-type(${option1}) div.vd3tt > div`
        ),
        targetPage.locator('::-p-xpath(//*[@id=\\"i5\\"]/div[3]/div)'),
        targetPage.locator(
          `:scope >>> div.o3Dpx > div:nth-of-type(1) span > div > div:nth-of-type(${option1}) div.vd3tt > div`
        ),
      ])
        .setTimeout(timeout)
        .click({
          delay: delay,
          offset: {
            x: 10,
            y: 7.015625,
          },
        });
    }
    {
      const targetPage = page;
      await puppeteer.Locator.race([
        targetPage.locator(
          `div.o3Dpx > div:nth-of-type(2) span > div > div:nth-of-type(${option2}) div.vd3tt > div`
        ),
        targetPage.locator('::-p-xpath(//*[@id=\\"i27\\"]/div[3]/div)'),
        targetPage.locator(
          `:scope >>> div.o3Dpx > div:nth-of-type(2) span > div > div:nth-of-type(${option2}) div.vd3tt > div`
        ),
      ])
        .setTimeout(timeout)
        .click({
          delay: delay,
          offset: {
            x: 8,
            y: 5.015625,
          },
        });
    }
    {
      const targetPage = page;
      await puppeteer.Locator.race([
        targetPage.locator(
          `div:nth-of-type(3) span > div > div:nth-of-type(${option3}) div.vd3tt > div`
        ),
        targetPage.locator('::-p-xpath(//*[@id=\\"i40\\"]/div[3]/div)'),
        targetPage.locator(
          `:scope >>> div:nth-of-type(3) span > div > div:nth-of-type(${option3}) div.vd3tt > div`
        ),
      ])
        .setTimeout(timeout)
        .click({
          delay: delay,
          offset: {
            x: 5,
            y: 1.015625,
          },
        });
    }
    {
      const targetPage = page;
      await puppeteer.Locator.race([
        targetPage.locator(
          `div:nth-of-type(4) span > div > div:nth-of-type(${option4}) div.vd3tt > div`
        ),
        targetPage.locator('::-p-xpath(//*[@id=\\"i71\\"]/div[3]/div)'),
        targetPage.locator(
          `:scope >>> div:nth-of-type(4) span > div > div:nth-of-type(${option4}) div.vd3tt > div`
        ),
      ])
        .setTimeout(timeout)
        .click({
          delay: delay,
          offset: {
            x: 13,
            y: 14.015625,
          },
        });
    }
    {
      const targetPage = page;
      await puppeteer.Locator.race([
        targetPage.locator(
          "div:nth-of-type(5) div:nth-of-type(4) div.vd3tt > div"
        ),
        targetPage.locator('::-p-xpath(//*[@id=\\"i90\\"]/div[3]/div)'),
        targetPage.locator(
          ":scope >>> div:nth-of-type(5) div:nth-of-type(4) div.vd3tt > div"
        ),
      ])
        .setTimeout(timeout)
        .click({
          delay: delay,
          offset: {
            x: 10,
            y: 4.015625,
          },
        });
    }
    {
      const targetPage = page;
      const promises = [];
      const startWaitingForEvents = () => {
        promises.push(targetPage.waitForNavigation());
      };
      await puppeteer.Locator.race([
        targetPage.locator("div.lRwqcd span > span"),
        targetPage.locator(
          '::-p-xpath(//*[@id=\\"mG61Hd\\"]/div[2]/div/div[3]/div/div[1]/div/span/span)'
        ),
        targetPage.locator(":scope >>> div.lRwqcd span > span"),
        targetPage.locator("::-p-text(Kirim)"),
      ])
        .setTimeout(timeout)
        .on("action", () => startWaitingForEvents())
        .click({
          delay: delay,
          offset: {
            x: 31,
            y: 18.015625,
          },
        });
      await Promise.all(promises);
    }

    await page.close();
  }
  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
