const { get } = require("./index");

describe("trading view", () => {
  const fixtures = [
    {},
    { ticker: "COINBASE:BTCGBP" },
    { ticker: "COINBASE:BTCGBP", resolution: 1 },
    { ticker: "COINBASE:BTCGBP", resolution: 1, scanner: "crypto" },
    { ticker: "COINBASE:LINKGBP", resolution: 5 },
    { ticker: "NASDAQ:TSLA", scanner: "america" },
  ];
  for (const fixture of fixtures) {
    it(`can get signal for ${fixture.ticker}, resolution ${fixture.resolution}, scanner ${fixture.scanner}`, async () => {
      const { signal } = await get(fixture);
      expect(signal).toBeGreaterThanOrEqual(-1);
      expect(signal).toBeLessThanOrEqual(1);
    }, 10000);
  }
});
