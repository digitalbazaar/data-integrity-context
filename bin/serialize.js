#!/usr/bin/env node
/*!
 * Copyright (c) 2022-2023 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const contextV1 = require('../js/data-integrity-v1');
const contextV2 = require('../js/data-integrity-v2');
const constants = require('../js/constants');

// Serialize the context V1 as JSON-LD
fs.writeFileSync(
  path.join(__dirname, '..', 'contexts', constants.CONTEXT_FILENAME_V1),
  JSON.stringify(contextV1, null, 2) + '\n'
);

// Serialize the context V2 as JSON-LD
fs.writeFileSync(
  path.join(__dirname, '..', 'contexts', constants.CONTEXT_FILENAME_V2),
  JSON.stringify(contextV2, null, 2) + '\n'
);
