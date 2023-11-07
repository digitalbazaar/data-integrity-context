# Data Integrity Context for JavaScript _(@digitalbazaar/data-integrity-context)_

[![Build status](https://img.shields.io/github/actions/workflow/status/digitalbazaar/data-integrity-context/main.yml)](https://github.com/digitalbazaar/data-integrity-context/actions?query=workflow%3A%22Node.js+CI%22)
[![NPM Version](https://img.shields.io/npm/v/@digitalbazaar/data-integrity-context.svg)](https://npm.im/@digitalbazaar/data-integrity-context)

> A Data Integrity context library for JavaScript.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

See also (related specs):

* [Data Integrity v1.0](https://w3c.github.io/vc-data-integrity/)

## Install

Requires Node.js 16+

To install via NPM:

```
npm install @digitalbazaar/data-integrity-context
```

## Usage

```js
import dataIntegrity from '@digitalbazaar/data-integrity-context';

dataIntegrity.CONTEXT_URL
// 'https://w3id.org/security/data-integrity/v2'

// Codec term map value for CBOR-LD
dataIntegrity.constants.CBORLD_CODEC_VALUE
// 0x30

// get context data for a specific context
dataIntegrity.CONTEXT
// full context object
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports the following properties:
- `CONTEXT_URL`
- `CONTEXT`
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CONTEXT_URL` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps URLs to full context data.
- `appContextMap`: For use with `cborld` library.
- `DATA_INTEGRITY_CONTEXT_V1_URL`
- `DATA_INTEGRITY_CONTEXT_V2_URL`

## Developing

WARNING: The `.jsonld` in `contexts/` is auto-generated by the `npm run build`
script, each time you run the test suite.

DO NOT edit it directly (or your changes will be quickly overwritten).
Instead, make all context changes to `js/context.js`.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- BSD 3-Clause © Digital Bazaar
- See the [LICENSE](./LICENSE) file for details.

[webpack]: https://webpack.js.org/
