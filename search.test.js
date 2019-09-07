const puppeteer = require("puppeteer");
require("jest");

test('Search Google Using Jest Then Print To Console', async () => {
    const _instance = await puppeteer.launch({
        headless : false,
        slowMo : 30
    })

    const _context = await _instance.createIncognitoBrowserContext();
    const _page = await _context.newPage();

    await _page.goto("https://google.com")
    await _page.click(".gLFyf");
    await _page.type(".gLFyf","TheDeveloperTT.ml")
    await _page.keyboard.press('Enter')
    await _page.waitForSelector("html");

    const _content = await _page.$eval("html",el =>el.innerHTML);

    console.log(_content);

}, 20000)