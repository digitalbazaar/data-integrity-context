/*!
 * Copyright (c) 2022-2023 Digital Bazaar, Inc. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const {
  contexts, constants, appContextMap, CONTEXT_URL, CONTEXT,
  DATA_INTEGRITY_CONTEXT_V1_URL, DATA_INTEGRITY_CONTEXT_V2_URL
} = require('..');

describe('Data Integrity Context', () => {
  it('constants', async () => {
    expect(appContextMap).to.exist;
    expect(constants).to.exist;
    expect(constants).to.have.property('CBORLD_VALUE');
    expect(DATA_INTEGRITY_CONTEXT_V1_URL).to.exist;
    expect(DATA_INTEGRITY_CONTEXT_V2_URL).to.exist;
    expect(CONTEXT_URL).to.exist;
    expect(CONTEXT).to.exist;
  });

  it('contexts', async () => {
    expect(contexts.get(CONTEXT_URL)).to.have.property('@context');
    expect(contexts.get(DATA_INTEGRITY_CONTEXT_V2_URL))
      .to.have.property('@context');
  });

  it('appContextMap', async () => {
    expect(appContextMap.get(CONTEXT_URL)).to.exist;
  });
});
