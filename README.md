# @roylines/tradingview

![ci](https://github.com/roylines/node-tradingview/actions/workflows/action.yml/badge.svg)
[![npm version](https://badge.fury.io/js/%40roylines%2Ftradingview.svg)](https://badge.fury.io/js/%40roylines%2Ftradingview)

A node module for accessing [trading view](https://www.tradingview.com) technical analysis signals. This allows you to access the numbers underpinning, for example, the [BTC to GBP technicals](https://www.tradingview.com/symbols/BTCGBP/technicals/).

## Install

```
npm install @roylines/tradingview
```


## Quick Start

```js
const tradingview = require('@roylines/tradingview');

const signal = await tradingview.get()
console.log('signal', signal)
```

## API

<a name='get'></a>
#### `get(opts): Promise`

Retrieves a signal from [tradingview](https://www.tradingview.com)

Options:

* `ticker: String`, the ticker to obtain a signal for. Defaults to `COINBASE:BTCGBP`.
* `resolution: Integer`, the resolution of the technical signal in seconds. Defaults to `1`.
* `scanner: String`, the scanner to use. Defaults to `crypto`
* `indicator: String`, the indicator to retrieve. Defaults to `Recommend.All`.

Returns:

* `ticker: String`, the ticker used.
* `resolution: Integer`, the resolution used.
* `scanner: String`, the scanner used.
* `indicator: String`, the indicator retrieved.
* `signal: Float`, the signal from trading view. This a float between -1 and 1 where -1 represents a strong sell signal, 1 represents a strong buy signal, and 0 represents a neutral view.


Example:

```js
const tradingview = require('@roylines/tradingview')

const {signal} = await tradingview.get({ticker: "COINBASE:BTCGBP", resolution: 5});
console.log('signal received', signal)
```

## License

MIT
